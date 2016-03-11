
var cart = new Cart($);

var views = new Views(states, $);

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

views.loadView(states[initState], true);
