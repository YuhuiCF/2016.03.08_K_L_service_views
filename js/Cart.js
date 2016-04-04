
var Cart = function($, Events){
    var self = this;

    var services = [];

    var cartElmt = $('.service-cart');
    var noServiceElmt = cartElmt.find('.service-cart-empty');
    var allServicesElmt = cartElmt.find('.service-cart-not-empty');
    var serviceItemElmt = cartElmt.find('.service-cart-item');
    var serviceItemParentElmt = serviceItemElmt.parent();

    var searchElmt = $('.search');
    var searchButton = $('.search-button');

    var hightlightTO;
    var hasVehicleRequiredService = false;

    searchButton.bind('click', function(){
        var hasContactRequest = false;
        var isCalculable = true;
        $.each(services, function(i, service){
            // test if offer page should do contact request
            if (service.serviceCode === 'locations.search') {
                hasContactRequest = true;
            }
            // test if is calculable
            if (service.calculable !== true) {
                isCalculable = false;
            }
        });
        var data = {
            selectedServices: services,
            hasContactRequest: hasContactRequest,
            isCalculable: isCalculable
        };

        Events.trigger('startSearch', data);
    });

    Events.on('serviceSelected', function(data){
        self.addService(data);
        var cartItemElmt = cartElmt.find('[data-service-config="' + data.serviceCode +'"]');

        $('html, body').animate({
            scrollTop: cartItemElmt.offset().top
        });
    });

    var vehicleSelectedTriggered = false;
    Events.on('vehicleSelected', function(){
        vehicleSelectedTriggered = true;
        checkEnableOfferSearchButton();
    });

    var regionSelectedTriggered = false;
    Events.on('regionSelected', function(){
        regionSelectedTriggered = true;
        checkEnableOfferSearchButton();
    });

    Events.on('hasNoVehicleRequiredService', function(){
        checkEnableOfferSearchButton();
    });

    Events.on('allServicesRemoved', function(){
        self.showNoService();
    });

    function enableOfferSearchButton(){
        searchButton.prop('disabled', false);
    }

    function checkEnableOfferSearchButton(){
        if (!(hasVehicleRequiredService && !vehicleSelectedTriggered) && regionSelectedTriggered) {
            enableOfferSearchButton();
        } else {
            disableOfferSearchButton();
        }
    }

    function disableOfferSearchButton(){
        searchButton.prop('disabled', true);
    }

    function getServiceIndexByCode(serviceCode){
        var output = -1;
        $.each(services, function(i, service){
            if (service.serviceCode === serviceCode) {
                output = i;
                return;
            }
        });
        return output;
    }

    self.addService = function(data){
        var serviceCode = data.serviceCode;
        var calcParams = data.calcParams;
        var vehicleRequired = data.vehicleRequired;
        /*
        var service = {
            serviceCode: serviceCode,
            vehicleRequired: vehicleRequired
        };
        */

        var newElmt = serviceItemElmt.clone();

        if (getServiceIndexByCode(serviceCode) === -1) {
            services.push(data);

            newElmt.attr('data-service-config', serviceCode);
            newElmt.find('.service-cart-item-text').html(serviceCode);
            newElmt.find('.service-cart-item-calc-params').html(calcParams.join('<br>'));

            newElmt.find('.service-cart-item-remove').bind('click', function(){
                newElmt.remove();
                self.removeService(serviceCode);

                self.updateServiceDisplay();
            });
            serviceItemParentElmt.append(newElmt);
        } else {
            newElmt = allServicesElmt.find('[data-service-config="' + serviceCode + '"]');
        }

        self.highlightService(newElmt);
        self.updateServiceDisplay();
    };

    self.removeService = function(serviceCode){
        var index = getServiceIndexByCode(serviceCode);
        if (index > -1) {
            services.splice(index, 1);
        }
    };

    self.updateServiceDisplay = function(){
        // show or hide cart
        if (services.length > 0) {
            self.showAllServices();
        } else {
            Events.trigger('allServicesRemoved');
        }
        // show or hide vehicle selection
        hasVehicleRequiredService = false;
        $.each(services, function(i, service){
            if (service.vehicleRequired) {
                hasVehicleRequiredService = true;
                return;
            }
        });

        if (hasVehicleRequiredService) {
            Events.trigger('hasVehicleRequiredService');
        } else {
            Events.trigger('hasNoVehicleRequiredService');
        }

        checkEnableOfferSearchButton();
    };

    self.showNoService = function(){
        noServiceElmt.show();
        allServicesElmt.hide();
        searchElmt.hide();
    };

    self.showAllServices = function(){
        noServiceElmt.hide();
        allServicesElmt.show();
        searchElmt.show();
    };

    self.highlightService = function(serviceItem){
        clearTimeout(hightlightTO);
        serviceItemParentElmt.children().removeClass('selected');

        serviceItem.addClass('selected');
        hightlightTO = setTimeout(function(){
            serviceItem.removeClass('selected');
        },3000);
    };
};
