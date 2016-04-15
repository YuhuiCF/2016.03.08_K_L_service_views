
var header = new Header($, configs);

var cart = new Cart($, Events);

var vehicleSelection = new VehicleSelection($, Events);
var regionSelection = new RegionSelection($, Events);
var views = new Views($, Events);

var serviceViews = new ServiceViews(states, services, $, Events, configs);
var resultList = new ResultList(resultListData, $, Events);
var offer = new Offer($, Events);

(function(services, serviceViews){
    function getUrlParam(parameterName){
        var result = [];
        var search = window.location.search.substring(1);
        var searchParameters = search.split('&');
        for (var i = 0; i < searchParameters.length; i++) {
            var parameter = searchParameters[i].split('=');
            if (parameter[0] == parameterName && $.inArray(result,parameter[1])===-1) {
                if(typeof (parameter[1]) === 'undefined'){
                    parameter[1]=true;
                }
                if(parameter[1]==='true'){
                    parameter[1]=true;
                }
                if(parameter[1]==='false'){
                    parameter[1]=false;
                }
                result.push(parameter[1]);
            }
        }
        return result;
    }

    // set page title if needed
    var pageTitle = getUrlParam('pageTitle');
    if (pageTitle.length > 0) {
        $('title').html(decodeURIComponent(pageTitle[0]));
    }

    // load single-serivce, view of single-service, SERVICEGROUP service-view, or standard service-view
    // if service requires a view, the view must be named as "serviceCode + '.view'"
    var serviceCodes = getUrlParam('serviceCode');
    var serviceGroupKey = 'SERVICEGROUP';

    var usePredefinedView = false;
    var predefinedView = {
        viewType: 'groupSelection',
        configs: {
            id: serviceGroupKey,
            question: 'Leistungen lorem ipsum',
            useGroup: true,
            answers: [
                {
                    answer: '0',
                    serviceCodes: []
                },
                {
                    answer: 'Single Service (Unfallschaden)',
                    serviceCodes: ['accidentaldamage']
                },
                {
                    answer: '2 Services in a Group',
                    serviceCodes: ['accidentaldamage', 'bumper.front.replace']
                }
            ]
        }
    };

    if (usePredefinedView && predefinedView) {
        serviceViews.loadView(predefinedView, true);
    } else if (serviceCodes.length === 1) {
        var serviceCode = serviceCodes[0];
        var service = services[serviceCode];
        if (service.isViewRequired) {
            serviceViews.loadView(states[serviceCode + '.view']);
        } else {
            service.isNotRemovable = true;
            Events.trigger('serviceSelected', service);
        }
    } else if (serviceCodes.length > 1) {
        states[serviceGroupKey].configs.answers = $.map(serviceCodes, function(serviceCode){
            var service = services[serviceCode];
            var output = {
                nextStateId: serviceCode + '.view',
                answer: service.serviceName
            };
            if (service.isViewRequired !== true) {
                output = {
                    nextStateId: 'END',
                    serviceCode: serviceCode
                };
            }
            return output;
        });

        serviceViews.loadView(states[serviceGroupKey]);
    } else {
        var initStateUrlParam = getUrlParam('initState');
        var initState = 'category0';
        if (initStateUrlParam.length > 0) {
            initState = initStateUrlParam[0];
        }

        serviceViews.loadView(states[initState]);
    }
})(services, serviceViews);
