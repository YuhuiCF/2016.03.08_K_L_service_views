
var configs = {};

(function(){
    var locationPath = window.location.pathname;

    configs.isDevEnv = (locationPath.indexOf('/dist/') === -1 && locationPath.indexOf('/k_l/') === -1);
})();
