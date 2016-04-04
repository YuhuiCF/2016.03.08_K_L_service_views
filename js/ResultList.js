
var ResultList = function(data, $, Events){
    var self = this;

    var resultListView = $('.result-list-view');
    var resultItemSelector = '.result-item';
    var resultItemElmt = resultListView.find(resultItemSelector);

    var startSearchButton = resultListView.find('.last-view');
    startSearchButton.bind('click', function(){
        Events.trigger('goBackFromResultList');
    });

    var resultItemsElmt = resultItemElmt.parent();
    resultItemElmt = resultItemElmt.clone();
    resultItemsElmt.find(resultItemSelector).remove();

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

    var withPriceButtons = resultItemsElmt.find('.offer-with-price-button');
    var withNoPriceButtons = resultItemsElmt.find('.offer-with-no-price-button');
    var contactLocationButtons = resultItemsElmt.find('.offer-contact-location-button');

    var bookingButtons = withPriceButtons.add(withNoPriceButtons).add(contactLocationButtons);

    self.hideAllButtons = function(){
        bookingButtons.hide();
    };

    Events.on('resultListDisplayed', function(data){
        self.hideAllButtons();
        var offerButton = withNoPriceButtons;
        if (data.hasContactRequest) {
            offerButton = contactLocationButtons;
        } else if (data.isCalculable) {
            offerButton = withPriceButtons;
        }

        offerButton.bind('click', function(){
            Events.trigger('openOffer', data);
        });
        offerButton.show();
    });
};
