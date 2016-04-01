
var ServiceViews = function(states, $, Events){
    var self = this;

    var templates = {};

    self.loadView = function(state, isInitState){
        var configId = state.configs.id;
        console.log('loading view: ' + configId);

        // load template from store variable, or by ajax call
        if (templates[state.viewType]) {
            appendView(templates[state.viewType], state);
        } else {
            $.ajax({
                type: 'GET',
                url: 'templates/' + state.viewType + '.html',
                dataType: 'html',
                success: function(template){
                    templates[state.viewType] = template;
                    appendView(template, state);
                }
            });
        }

        function appendView(template, state){
            if (isInitState) {
                Events.trigger('initStateLoaded');
            }

            $('.service-views').append(template);

            // set page title if needed
            if (state.pageTitle && isInitState) {
                $('title').html(state.pageTitle);
            }

            // fill data of the service view
            var numberOfViews = $('.service-view').length;
            if (state.configs) {
                self.setViewData($('.service-views').find('.service-view:last'), state.configs, numberOfViews);
            }

            // scroll only if there are several views
            if ($('.service-view').length > 1) {
                $('html, body').animate({
                    scrollTop: $('.service-view:last').offset().top
                });
            }
        }
    };

    self.setViewData = function(viewJQElmt, configs, numberOfViews){
        var configId = configs.id;

        var questionElmt = viewJQElmt.find('.service-question');
        questionElmt.html(configs.question);
        questionElmt.bind('click', function(){
            if (viewJQElmt.find('.selected.service-answer').length > 0) {
                var answerElmts = viewJQElmt.find('.service-answer');
                if ($(this).hasClass('close')) {// show all
                    answerElmts.show();

                    $('html, body').animate({
                        scrollTop: viewJQElmt.offset().top
                    });
                } else {// hide others
                    answerElmts.hide();
                    viewJQElmt.find('.selected.service-answer').show();
                    $(this).show();
                }
                $(this).toggleClass('close');
            }
        });

        var serviceCodeElmt = viewJQElmt.find('.service-config-id');
        if (configs.serviceCode) {
            serviceCodeElmt.html(configs.serviceCode);
        }

        var imgElmt = viewJQElmt.find('.service-img');
        if (configs.img) {
            setImageConfigs(imgElmt, configs.img);
        }

        var answerElmt = viewJQElmt.find('.service-answer');
        var answersElmt = answerElmt.parent();
        answerElmt = answerElmt.clone();
        $.each(configs.answers || [], function(i, answer){
            if (i > 0) {
                answersElmt.append(answerElmt.clone());
            }

            var thisAnswerElmt = viewJQElmt.find('.service-answer:last');
            var textElmt = thisAnswerElmt.find('.service-answer-text');
            var clickElmt = thisAnswerElmt.find('.service-answer-click');
            var viewIdElmt = thisAnswerElmt.find('.service-answer-view-id');
            var descriptionElmt = thisAnswerElmt.find('.service-answer-description');

            textElmt.html(answer.answer);

            viewIdElmt.attr('name',configId);

            descriptionElmt.html(answer.description);

            var nextStateId = answer.nextStateId;
            if (nextStateId) {
                clickElmt.bind('click', function(){
                    goToNextFrom(clickElmt, answer);
                });
            } else {
                thisAnswerElmt.addClass('inactive');
            }
        });

        $.each(configs.checklist || [], function(i, item){
            if (i > 0) {
                answersElmt.append(answerElmt.clone());
            }

            var thisAnswerElmt = viewJQElmt.find('.service-answer:last');

            thisAnswerElmt = prepareMixAnswerElement(thisAnswerElmt, item);

            var textElmt = thisAnswerElmt.find('.service-answer-text');
            var viewIdElmt = thisAnswerElmt.find('.service-answer-view-id');
            var defaultValueElmt = thisAnswerElmt.find('.service-answer-default-value');

            textElmt.html(item.answer);

            viewIdElmt.attr('name',configId);

            defaultValueElmt.val(item.defaultValue);
        });

        var goBackElmt = viewJQElmt.find('.service-answer-back');
        goBackElmt.bind('click', function(){
            goBackFrom(this);
        });

        var confirmElmt = viewJQElmt.find('.service-answer-confirm');
        confirmElmt.bind('click', function(){
            goToNextFrom(this, configs);
        });

/*
        function getAndSetConfirmedOptions(configs, jQElmt){
            var viewElmt = jQElmt.closest('.service-view');

// text

// dropdown

// radio


            return configs;
        }
*/

        function goBackFrom(elmt){
            if ($('.service-view').length > 1) {
                $(elmt).closest('.service-view').remove();
            }
        }

        function goToNextFrom(jQElmt, answer){
            var nextStateId = answer.nextStateId;
            self.highlight(jQElmt);
            self.keepViews(numberOfViews);

            if (answer.newWindow) {
                window.open('?initState=' + nextStateId);
                return;
            }

            var serviceCode = answer.serviceCode;
            var calcParams = answer.calcParams;
            var vehicleRequired = answer.vehicleRequired;
            if (serviceCode) {
                Events.trigger('addService', {serviceCode: serviceCode, calcParams: calcParams || [], vehicleRequired: vehicleRequired});
            }

            switch (nextStateId) {
                case 'LASTSTATE':
                    goBackFrom(jQElmt);
                    break;
                case 'END':
                    break;
                default:
                    self.loadView(states[nextStateId]);
            }
        }

        function setImageConfigs(imgElmt, config){
            imgElmt.attr('height', config.height);
            imgElmt.attr('src', 'img/' + config.file);
        }

        function prepareMixAnswerElement(jQElmt, item){
            $.each(jQElmt.children(), function(i, elmt){
                if (!$(elmt).hasClass('service-answer-type-' + item.type)) {
                    $(elmt).detach();
                }
            });

            var itemElmt, itemParentElmt, defaultValue;

            var imgElmt = jQElmt.find('.service-img');
            if (item.img) {
                setImageConfigs(imgElmt, item.img);
            } else {
                if (imgElmt.length > 0) {
                    imgElmt.remove();
                }
            }

            switch (item.type) {
                case 'dropdown':
                    itemElmt = jQElmt.find('.service-answer-option-text:eq(0)');
                    itemParentElmt = itemElmt.parent();
                    itemElmt = itemElmt.clone();
                    $.each(item.options, function(i, option){
                        if (i > 0) {
                            itemParentElmt.append(itemElmt.clone());
                        }
                        var thisItemElmt = itemParentElmt.find('.service-answer-option-text:last');
                        var value = option.value;
                        thisItemElmt.html(value).attr('value', value);
                    });
                    break;
                case 'radio':
                    itemElmt = jQElmt.find('.service-answer-option-radio:eq(0)');
                    itemParentElmt = itemElmt.parent();
                    itemElmt = itemElmt.clone();
                    defaultValue = item.defaultValue;
                    $.each(item.options, function(i, option){
                        if (i > 0) {
                            itemParentElmt.append(itemElmt.clone());
                        }
                        var thisItemElmt = itemParentElmt.find('.service-answer-option-radio:last');
                        var valueElmt = thisItemElmt.find('.service-answer-option-text');
                        var value = option.value;
                        valueElmt.html(value);

                        if (value === defaultValue) {
                            thisItemElmt.find('.service-answer-view-id').prop('checked', true);
                        }
                    });
                    break;
                case 'checkbox':
                    itemElmt = jQElmt.find('.service-answer-option-checkbox:eq(0)');
                    itemParentElmt = itemElmt.parent();
                    itemElmt = itemElmt.clone();
                    defaultValue = item.defaultValue;

                    $.each(item.options, function(i, option){
                        if (i > 0) {
                            itemParentElmt.append(itemElmt.clone());
                        }
                        var thisItemElmt = itemParentElmt.find('.service-answer-option-checkbox:last');
                        var valueElmt = thisItemElmt.find('.service-answer-option-text');
                        var value = option.value;
                        valueElmt.html(value);

                        if ($.inArray(value, defaultValue) > -1) {
                            thisItemElmt.find('.service-answer-view-id').prop('checked', true);
                        }
                    });
                    break;
                default:
                    break;
            }
            return jQElmt;
        }
    };

    self.highlight = function(elmt){
        $(elmt).closest('.service-view').find('.service-answer').removeClass('selected');
        $(elmt).closest('.service-answer').addClass('selected');

        $(elmt).closest('.service-view').find('.service-question').removeClass('close').trigger('click');
    };

    self.keepViews = function(numberOfViews){
        $('.service-view').each(function(i, view){
            if (i >= numberOfViews) {
                view.remove();
            }
        });
    };
};