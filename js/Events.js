
var Events = (function($, eventNames){
/*
    var self = this;

    self.trigger = function(eventName, data){
        if (isEventNameRegistered(eventName)) {
            $(document).trigger(eventName, data);
        } else {
            log('eventName ' + eventName + ' is not registered');
        }
    };

    self.on = function(eventName, callback){
        if (isEventNameRegistered(eventName)) {
            $(document).on(eventName, function(ev, data){
                callback(data);
            });
        } else {
            log('eventName ' + eventName + ' is not registered');
        }
    };
*/
    function isEventNameRegistered(eventName){
        return $.inArray(eventName, eventNames) > -1;
    }

    function log(msg){
        console.log(msg);
    }

    return {
        trigger: function(eventName, data){
            if (isEventNameRegistered(eventName)) {
                $(document).trigger(eventName, data);
            } else {
                log('to-be-triggered eventName "' + eventName + '"" is not registered');
            }
        },

        on: function(eventName, callback){
            if (isEventNameRegistered(eventName)) {
                $(document).on(eventName, function(ev, data){
                    callback(data);
                });
            } else {
                log('to-be-listened eventName "' + eventName + '" is not registered');
            }
        }
    };
})($, [
    'serviceSelected',
    'allServicesRemoved',

    'hasVehicleRequiredService',
    'hasNoVehicleRequiredService',
    'vehicleSelected',

    'regionSelected',

    'startSearch',

    'resultListDisplayed',
    'goBackFromResultList',

    'openOffer',
    'offerDisplayed',
    'goBackFromOffer',

    'openHailCalculator'
]);
