
var RegionSelection = function($, Events){
    var self = this;
    var regionElmt = $('.region-selection');
    var selectRegionButton = regionElmt.find('.select-region');
    var selectedRegionText = regionElmt.find('.selected-region');

    Events.on('serviceSelected', function(){
        regionElmt.show();
    });

    Events.on('allServicesRemoved', function(){
        regionElmt.hide();
    });

    selectRegionButton.on('click', function(){
        selectRegionButton.hide();
        selectedRegionText.show();
        Events.trigger('regionSelected');
    });
};
