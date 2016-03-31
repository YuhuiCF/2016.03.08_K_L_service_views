
var RegionSelection = function($, Events){
    var self = this;
    var regionElmt = $('.region-selection');

    Events.on('initStateLoaded', function(){
        regionElmt.show();
    });
};
