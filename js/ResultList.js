
var ResultList = function(data, $, Events){
    var self = this;

    var resultListView = $('.result-list-view');
    var originalResultItemElmt = resultListView.find('.result-item');

    var startSearchButton = resultListView.find('.last-view');
    startSearchButton.bind('click', function(){
        Events.trigger('goBackFromResultList');
    });

    var resultItemsElmt = originalResultItemElmt.parent();
    var resultItemElmt = originalResultItemElmt.clone();
    originalResultItemElmt.remove();

    // write result list
    $.each(data, function(i, location){
        resultItemsElmt.append(resultItemElmt.clone());

        var thisItemElmt = resultItemsElmt.children().filter(':last');
        var distanceElmt = thisItemElmt.find('.location-distance');
        var nameElmt = thisItemElmt.find('.location-name');
        var addressElmt = thisItemElmt.find('.location-address');

        distanceElmt.html(location.distance);
        nameElmt.html(location.name);
        addressElmt.html(location.address);
    });

    var offerWithPriceButtons = resultItemsElmt.find('.offer-with-price-button');
    var offerWithNoPriceButtons = resultItemsElmt.find('.offer-with-no-price-button');
    var offerContactLocationButtons = resultItemsElmt.find('.offer-contact-location-button');

    self.hideAllButtons = function(){
        offerWithPriceButtons.hide();
        offerWithNoPriceButtons.hide();
        offerContactLocationButtons.hide();
    };

    Events.on('resultListDisplayed', function(data){
        var hasContactRequest = false;
        var isCalculable = false;
        $.each(data.selectedServices, function(i, service){
            // test if offer page should do contact request
            if (service.serviceCode === 'locations.search') {
                hasContactRequest = true;
            }
            // test if is calculable
            if (service.calculable) {
                isCalculable = true;
            }
        });

        self.hideAllButtons();
        var offerButton;
        if (hasContactRequest) {
            offerButton = offerContactLocationButtons;
        } else if (isCalculable) {
            offerButton = offerWithPriceButtons;
        } else {
            offerButton = offerWithNoPriceButtons;
        }
        offerButton.show();
    });
};
