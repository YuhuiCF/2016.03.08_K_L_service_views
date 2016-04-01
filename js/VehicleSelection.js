
var VehicleSelection = function($, Events){
    var self = this;
    var vehicleElmt = $('.vehicle-selection');

    var selectVehicleButton = vehicleElmt.find('.select-vehicle');
    var selectedVehicleText = vehicleElmt.find('.selected-vehicle');

    Events.on('hasVehicleRequiredService', function(){
        vehicleElmt.show();
    });

    Events.on('hasNoVehicleRequiredService', function(){
        vehicleElmt.hide();
    });

    selectVehicleButton.on('click', function(){
        selectVehicleButton.hide();
        selectedVehicleText.show();
        Events.trigger('vehicleSelected');
    });
};
