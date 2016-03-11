
var Views = function(states, $){
    var self = this;

    var counter = 0;

    self.loadView = function(state, isInitState){
        var configId = state.configs.id;
        if (state.useTemplate) {
            $.extend(true, state, states[state.useTemplate]);
            state.configs.id = configId;
        }
        console.log('load view: ' + configId);

        $.ajax({
            type: 'GET',
            url: 'templates/' + state.viewType + '.html',
            dataType: 'html',
            success: function(data){
                $('[data-views]').append(data);

                if (state.pageTitle && isInitState) {
                    $('title').html(state.pageTitle);
                }

                var numberOfViews = $('[data-view]').length;
                if (state.configs) {
                    self.setViewData($('[data-views]').find('[data-view]:last'), state.configs, numberOfViews);
                }

                $('html, body').animate({
                    scrollTop: $('[data-view]:last').offset().top
                });
            }
        });
    };

    function setAndReturnValueOfConfigId(value, configId){
        if (typeof value === 'object') {
            if (value[configId]) {
                return value[configId];
            } else if (value['default']) {
                return value['default'];
            } else {
                return value;
            }
        } else {
            return value;
        }
    }

    self.setViewData = function(viewJQElmt, configs, numberOfViews){
        var configId = configs.id;
        var isTemplate = configs.isTemplate;
        if (isTemplate) {
            configs.question = setAndReturnValueOfConfigId(configs.question, configId);
            configs.serviceCode = setAndReturnValueOfConfigId(configs.serviceCode, configId);
            if (configs.img) {
                configs.img.file = setAndReturnValueOfConfigId(configs.img.file, configId);
            }
        }

        var questionElmt = viewJQElmt.find('[data-question]');
        questionElmt.html(configs.question);
        questionElmt.bind('click', function(){
            if (viewJQElmt.find('.selected[data-answer]').length > 0) {
                var answerElmts = viewJQElmt.find('[data-answer]');
                if ($(this).hasClass('close')) {// show all
                    answerElmts.show();

                    $('html, body').animate({
                        scrollTop: viewJQElmt.offset().top
                    });
                } else {// hide others
                    answerElmts.hide();
                    viewJQElmt.find('.selected[data-answer]').show();
                    $(this).show();
                }
                $(this).toggleClass('close');
            }
        });

        var serviceCodeElmt = viewJQElmt.find('[data-config-id]');
        if (configs.serviceCode) {
            serviceCodeElmt.html(configs.serviceCode);
        }

        var imgElmt = viewJQElmt.find('[data-img]');
        if (configs.img) {
            imgElmt.attr('height', configs.img.height);
            imgElmt.attr('src', 'img/' + configs.img.file);
        }

        var answerElmt = viewJQElmt.find('[data-answer]');
        var answersElmt = answerElmt.parent();
        answerElmt = answerElmt.clone();
        if (typeof configs.answers === 'undefined') {
            configs.answers = [];
        }
        $.each(configs.answers, function(i, answer){
            if (i > 0) {
                answersElmt.append(answerElmt.clone());
            }

            if (isTemplate) {
                answer.answer = setAndReturnValueOfConfigId(answer.answer, configId);
                answer.nextStateId = setAndReturnValueOfConfigId(answer.nextStateId, configId);
                answer.newWindow = setAndReturnValueOfConfigId(answer.newWindow, configId);
                answer.serviceCode = setAndReturnValueOfConfigId(answer.serviceCode, configId);
                answer.description = setAndReturnValueOfConfigId(answer.description, configId);
                answer.calcParams = setAndReturnValueOfConfigId(answer.calcParams, configId);
            }

            var textElmt = viewJQElmt.find('[data-answer-text]:eq(' + i + ')');
            var clickElmt = viewJQElmt.find('[data-answer-click]:eq(' + i + ')');
            var viewIdElmt = viewJQElmt.find('[data-answer-view-id]:eq(' + i + ')');
            var descriptionElmt = viewJQElmt.find('[data-answer-description]:eq(' + i + ')');

            textElmt.html(answer.answer);

            viewIdElmt.attr('name',configId);

            descriptionElmt.html(answer.description);

            var nextStateId = answer.nextStateId;
            if (nextStateId) {
                clickElmt.bind('click', function(){
                    goToNextFrom(clickElmt, answer);
                });
            } else {
                textElmt.addClass('inactive');
            }
        });

        if (typeof configs.checklist === 'undefined') {
            configs.checklist = [];
        } else {
            if (isTemplate) {
                configs.checklist = setAndReturnValueOfConfigId(configs.checklist, configId);
                configs.nextStateId = setAndReturnValueOfConfigId(configs.nextStateId, configId);
                configs.serviceCode = setAndReturnValueOfConfigId(configs.serviceCode, configId);
                configs.calcParams = setAndReturnValueOfConfigId(configs.calcParams, configId);
            }
        }
        $.each(configs.checklist, function(i, item){
            if (i > 0) {
                answersElmt.append(answerElmt.clone());
            }

            var thisAnswerElmt = viewJQElmt.find('[data-answer]:last');

            thisAnswerElmt = prepareAnswerElement(thisAnswerElmt, item);

            var textElmt = thisAnswerElmt.find('[data-answer-text]');
            var viewIdElmt = thisAnswerElmt.find('[data-answer-view-id]');
            var defaultValueElmt = thisAnswerElmt.find('[data-answer-default-value]');
            //var defaultRadioElmt = thisAnswerElmt.find('[data-answer-default-value]');

            textElmt.html(item.answer);

            viewIdElmt.attr('name',configId);

            defaultValueElmt.val(item.defaultValue);
            //defaultValueElmt.prop(item.defaultValue);
        });

        var goBackElmt = viewJQElmt.find('[data-answer-back]');
        goBackElmt.bind('click', function(){
            goBackFrom(this);
        });

        var confirmElmt = viewJQElmt.find('[data-answer-confirm]');
        confirmElmt.bind('click', function(){
            //var configs = getAndSetConfirmedOptions(configs, confirmElmt);
            goToNextFrom(this, configs);
        });

        function getAndSetConfirmedOptions(configs, jQElmt){
            var viewElmt = jQElmt.closest('[data-view]');

// text

// dropdown

// radio


            return configs;
        }

        function goBackFrom(elmt){
            if ($('[data-view]').length > 1) {
                $(elmt).closest('[data-view]').remove();
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
            if (serviceCode && calcParams) {
                $(document).trigger('trigger-addService', {serviceCode: serviceCode, calcParams: calcParams});
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

        function prepareAnswerElement(jQElmt, item){
            //var elmt = jQElmt;
            $.each(jQElmt.children(), function(i, e){
                if (typeof $(e).attr('data-answer-type-' + item.type) === 'undefined') {
                    $(e).detach();
                }
            });

            var itemElmt, itemParentElmt, defaultValue;

            switch (item.type) {
                case 'dropdown':
                    itemElmt = jQElmt.find('[data-answer-option-text]:eq(0)');
                    itemParentElmt = itemElmt.parent();
                    itemElmt = itemElmt.clone();
                    $.each(item.options, function(i, option){
                        if (i > 0) {
                            itemParentElmt.append(itemElmt.clone());
                        }
                        var thisItemElmt = itemParentElmt.find('[data-answer-option-text]:last');
                        var value = option.value;
                        thisItemElmt.html(value).attr('value', value);
                    });
                    break;
                case 'radio':
                    itemElmt = jQElmt.find('[data-answer-option-radio]:eq(0)');
                    itemParentElmt = itemElmt.parent();
                    itemElmt = itemElmt.clone();
                    defaultValue = item.defaultValue;
                    $.each(item.options, function(i, option){
                        if (i > 0) {
                            itemParentElmt.append(itemElmt.clone());
                        }
                        var thisItemElmt = itemParentElmt.find('[data-answer-option-radio]:last');
                        var valueElmt = thisItemElmt.find('[data-answer-option-text]');
                        var value = option.value;
                        valueElmt.html(value);

                        if (value === defaultValue) {
                            thisItemElmt.find('[data-answer-view-id]').prop('checked', true);
                        }
                    });
                    break;
            }
            return jQElmt;
        }
    };

    self.highlight = function(elmt){
        $(elmt).closest('[data-view]').find('[data-answer]').removeClass('selected');
        $(elmt).closest('[data-answer]').addClass('selected');

        $(elmt).closest('[data-view]').find('[data-question]').removeClass('close').trigger('click');
    };

    self.keepViews = function(numberOfViews){
        $('[data-view]').each(function(i, view){
            if (i >= numberOfViews) {
                view.remove();
            }
        });
    };

    function logError(){
        console.log(logError);
    }
};
