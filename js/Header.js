
var Header = function($, configs){
    var self = this;

    var headerElmt = $('header');
    var logoImg = headerElmt.find('.logo');

    var setLogoImgPath = function(){
        logoImg.attr('src', (configs.isDevEnv ? '' : '../' ) + 'img/Acoat_Logo_Horizontal_web.jpg');
    };

    setLogoImgPath();
};
