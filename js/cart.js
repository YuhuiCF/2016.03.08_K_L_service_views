
var Cart = function($){
    var self = this;

    var serviceCodes = [];

    var cartElmt = $('[data-service-cart]');
    var noServiceElmt = cartElmt.find('[data-service-empty]');
    var allServicesElmt = cartElmt.find('[data-service-not-empty]');
    var serviceItemElmt = cartElmt.find('[data-service-item]');
    var serviceItemParentElmt = serviceItemElmt.parent();

    var hightlightTO;

    $(document).on('trigger-addService', function(ev, data){
        self.addService(data);
        var cartItemElmt = cartElmt.find('[data-service-config="' + data.serviceCode +'"]');
        $('html, body').animate({
            scrollTop: cartItemElmt.offset().top
        });
    });

    self.addService = function(data){
        var serviceCode = data.serviceCode;
        var calcParams = data.calcParams;
        var newElmt = serviceItemElmt.clone();

        if (serviceCodes.indexOf(serviceCode) === -1) {
            serviceCodes.push(serviceCode);

            newElmt.attr('data-service-config', serviceCode);
            newElmt.find('[data-service-item-text]').html(serviceCode);
            newElmt.find('[data-service-item-calc-params]').html(calcParams.join('<br>'));

            newElmt.find('[data-service-item-remove]').bind('click', function(){
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
        var index = serviceCodes.indexOf(serviceCode);
        if (index > -1) {
            serviceCodes.splice(index, 1);
        }
    };

    self.updateServices = function(){
        if (serviceCodes.length > 0) {
            self.showAllServices();
        } else {
            self.showNoService();
        }
    };

    self.showNoService = function(){
        noServiceElmt.show();
        allServicesElmt.hide();
    };

    self.showAllServices = function(){
        noServiceElmt.hide();
        allServicesElmt.show();
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
