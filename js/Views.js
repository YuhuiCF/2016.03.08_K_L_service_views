
var Views = function($, Events){
    var self = this;

    var viewNames = [
        'search',
        'result-list',
        'offer'
    ];
    var viewMap = {};

    $.each(viewNames, function(i, viewName){
        viewMap[viewName] = $('.' + viewName + '-view');
    });

    Events.on('startSearch', function(data){
        goToResultList(data);
    });
    Events.on('goBackFromOffer', function(data){
        goToResultList(data);
    });

    function goToResultList(data){
        self.showView('result-list');
        Events.trigger('resultListDisplayed', data);
    }

    Events.on('goBackFromResultList', function(){
        self.showView('search');
    });

    Events.on('openOffer', function(data){
        self.showView('offer');
        Events.trigger('offerDisplayed', data);
    });

    self.hideAllViews = function(){
        for (var key in viewMap) {
            viewMap[key].hide();
        }
    };

    self.showView = function(viewName){
        if (viewMap[viewName]) {
            self.hideAllViews();
            viewMap[viewName].show();
        }
    };

};
