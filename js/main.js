
var cart = new Cart($, Events);

var vehicleSelection = new VehicleSelection($, Events);
var regionSelection = new RegionSelection($, Events);
var views = new Views($, Events);

var serviceViews = new ServiceViews(states, $, Events);
var resultList = new ResultList(resultListData, $, Events);

function getUrlParam(name){
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");

    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );

    if (results === null)
        return "";
    else
        return results[1];
}

var initStateUrlParam = getUrlParam('initState');
var initState = 'category0';
if (initStateUrlParam !== '') {
    initState = initStateUrlParam;
}

serviceViews.loadView(states[initState], true);
