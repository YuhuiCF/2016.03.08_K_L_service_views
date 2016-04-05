
var Offer = function($, Events){
    var self = this;

    var offerView = $('.offer-view');

    var showResultListButton = offerView.find('.last-view');
    showResultListButton.bind('click', function(){
        Events.trigger('goBackFromOffer', self.data);
    });

    var offerServiceSelector = '.offer-service';
    var offerServiceElmt = offerView.find(offerServiceSelector).clone();
    var offerServicesElmt = offerView.find('.offer-services');

    var withPriceButtons = offerView.find('.booking-with-price-button');
    var withNoPriceButtons = offerView.find('.booking-with-no-price-button');
    var contactLocationButtons = offerView.find('.booking-contact-location-button');

    var bookingButtons = withPriceButtons.add(withNoPriceButtons).add(contactLocationButtons);

    self.hideAllButtons = function(){
        bookingButtons.hide();
    };

    Events.on('offerDisplayed', function(data){
        offerServicesElmt.find(offerServiceSelector).remove();
        self.data = data;

        $.each(data.selectedServices, function(i, service){
            offerServicesElmt.append(offerServiceElmt.clone());

            var thisServiceElmt = offerServicesElmt.find(offerServiceSelector).filter(':last');
            var serviceCodeElmt = thisServiceElmt.find('.offer-service-code');
            var serviceMsgElmt = thisServiceElmt.find('.offer-service-message');
            var serviceAddtConfigElmt = thisServiceElmt.find('.offer-service-additional-option');
            var openAddtConfigButton = serviceAddtConfigElmt.find('.open-config');
            var closeAddtConfigButton = serviceAddtConfigElmt.find('.close-config');

            var serviceCode = service.serviceCode;
            serviceCodeElmt.html(serviceCode);

            var message = 'Preis nach Vereinbahrung';
            if (service.calculable) {
                message = 'Einzelpreis: ' + (service.unitPrice || '100') + ' €';
            } else if (typeof service.unitPrice !== 'undefined') {
                message = 'Einzelpreis: ab ' + service.unitPrice + ' €';
            }
            serviceMsgElmt.html(message);

            var additionalConfiguration = service.additionalConfiguration;
            if (additionalConfiguration) {
                openAddtConfigButton.html(additionalConfiguration.openText);
                openAddtConfigButton.bind('click', function(){
                    Events.trigger(additionalConfiguration.triggerOpenEvent, thisServiceElmt);
                });
                closeAddtConfigButton.hide();

                if (additionalConfiguration.closeText) {
                    closeAddtConfigButton.html(additionalConfiguration.closeText);
                    closeAddtConfigButton.bind('click', function(){
                        thisServiceElmt.find('.additional-option').hide();
                        closeAddtConfigButton.hide();
                        openAddtConfigButton.show();
                    });
                }

            } else {
                serviceAddtConfigElmt.remove();
            }
        });

        self.hideAllButtons();

        var bookingButton = withNoPriceButtons;
        if (data.hasContactRequest) {
            bookingButton = contactLocationButtons;
        } else if (data.isCalculable) {
            bookingButton = withPriceButtons;
        }

        bookingButton.show();
    });

    bookingButtons.bind('click', function(){
        //Events.trigger('sendBooking', self.data);
    });

    Events.on('openHailCalculator', function(serviceElmt){
        serviceElmt = $(serviceElmt);
        var openConfigElmt = serviceElmt.find('.open-config');
        var closeConfigElmt = serviceElmt.find('.close-config');
        openConfigElmt.hide();
        closeConfigElmt.show();

        var calculatorElmt = serviceElmt.find('.haildamage-calculator');
        if (calculatorElmt.length) {
            calculatorElmt.show();
        } else {
            $.ajax({
                type: 'GET',
                url: 'templates/haildamageCalculator.html',
                dataType: 'html',
                success: function(template){
                    self.appendConfigInService(serviceElmt, template);
                }
            });
        }
    });

    self.appendConfigInService = function(serviceElmt, template){
        serviceElmt.append(template);
    };
};
