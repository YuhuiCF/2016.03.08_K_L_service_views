
var Cart = function($, Events){
    var self = this;

    var services = [];

    var cartElmt = $('.service-cart');
    var noServiceElmt = cartElmt.find('.service-cart-empty');
    var allServicesElmt = cartElmt.find('.service-cart-not-empty');
    var serviceItemElmt = cartElmt.find('.service-cart-item');
    var serviceItemParentElmt = serviceItemElmt.parent();

    var offerSearchElmt = $('.offer-search');
    var offerSearchButton = $('.offer-search-button');

    var hightlightTO;

    Events.on('addService', function(data){
        self.addService(data);
        var cartItemElmt = cartElmt.find('[data-service-config="' + data.serviceCode +'"]');
        $('html, body').animate({
            scrollTop: cartItemElmt.offset().top
        });
    });

    var vehicleSelectedTriggered = false;
    Events.on('vehicleSelected', function(){
        vehicleSelectedTriggered = true;
        enableOfferSearchButton();
    });

    Events.on('hideVehicleSelection', enableOfferSearchButton);

    function enableOfferSearchButton(){
        offerSearchButton.prop('disabled', false);
    }

    function disableOfferSearchButton(){
        offerSearchButton.prop('disabled', true);
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
        var service = {
            serviceCode: serviceCode,
            vehicleRequired: vehicleRequired
        };

        var newElmt = serviceItemElmt.clone();

        if (getServiceIndexByCode(serviceCode) === -1) {
            services.push(service);

            newElmt.attr('data-service-config', serviceCode);
            newElmt.find('.service-cart-item-text').html(serviceCode);
            newElmt.find('.service-cart-item-calc-params').html(calcParams.join('<br>'));

            newElmt.find('.service-cart-item-remove').bind('click', function(){
                newElmt.remove();
                self.removeService(serviceCode);

                self.updateServices();
            });
            serviceItemParentElmt.append(newElmt);
        } else {
            newElmt = allServicesElmt.find('[data-service-config="' + serviceCode + '"]');
        }

        self.highlightService(newElmt);
        self.updateServices();
    };

    self.removeService = function(serviceCode){
        var index = getServiceIndexByCode(serviceCode);
        if (index > -1) {
            services.splice(index, 1);
        }
    };

    self.updateServices = function(){
        // show or hide cart
        if (services.length > 0) {
            self.showAllServices();
        } else {
            self.showNoService();
        }
        // show or hide vehicle selection
        var showVehicleSelection = false;
        $.each(services, function(i, service){
            if (service.vehicleRequired) {
                showVehicleSelection = true;
                return;
            }
        });

        if (showVehicleSelection) {
            Events.trigger('showVehicleSelection');
            if (vehicleSelectedTriggered) {
                enableOfferSearchButton();
            } else {
                disableOfferSearchButton();
            }
        } else {
            Events.trigger('hideVehicleSelection');
        }
    };

    self.showNoService = function(){
        noServiceElmt.show();
        allServicesElmt.hide();
        offerSearchElmt.hide();
    };

    self.showAllServices = function(){
        noServiceElmt.hide();
        allServicesElmt.show();
        offerSearchElmt.show();
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
