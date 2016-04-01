
var Views = function($, Events){
    var self = this;

    var searchView = $('.search-view');
    var resultListView = $('.result-list-view');
    var offerView = $('.offer-view');

    Events.on('startSearch', function(data){
        self.showView('result-list');
    });

    self.hideAllViews = function(){
        searchView.hide();
        resultListView.hide();
        offerView.hide();
    };

    self.showView = function(viewName){
        var view;
        switch (viewName) {
            case 'search':
                view = searchView;
                break;
            case 'result-list':
                view = resultListView;
                break;
            case 'offer':
                view = offerView;
                break;
            default:
                break;
        }

        if (view) {
            self.hideAllViews();
            view.show();
        }
    };

};
