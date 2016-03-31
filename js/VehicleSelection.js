
var VehicleSelection = function($, Events){
    var self = this;
    var vehicleElmt = $('.vehicle-selection');
    var selectVehicleButton = $('.select-vehicle');
    var selectedVehicleText = $('.selected-vehicle');

    Events.on('showVehicleSelection', function(){
        vehicleElmt.show();
    });

    Events.on('hideVehicleSelection', function(){
        vehicleElmt.hide();
    });

    selectVehicleButton.on('click', function(){
        selectVehicleButton.hide();
        selectedVehicleText.show();
        Events.trigger('vehicleSelected');
    });
};
