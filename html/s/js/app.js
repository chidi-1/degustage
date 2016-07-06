/**
 * appName - http://chidi-frontend.esy.es/
 * @version v0.1.0
 * @author bev-olga@yandex.ru
 */
(function() {


}).call(this);


(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);

$(document).ready(function(){

    var timeout_link; // задержка при вводе в поле

    var menuLeft = $('.cbp-spmenu-left'),
            menuRight = $('.cbp-spmenu-right'),
            menuTop = $('.cbp-spmenu-top'),
            showLeftPush = '',
            showRightPush = '',
            closePush = $('.wrapper-close'),
            iconclosePush = $('.wrapper-close-icon'),
            showTop = document.getElementById( 'showTop' ),
            body = $('body');

    if( $('.showLeftPush').length ){
        showLeftPush = document.getElementById( 'showLeftPush' )
    }

    if( $('.showRight').length ){
        showRightPush = document.getElementById( 'showRightPush' )
    }

    showRightPush.onclick = function() {
        body.toggleClass('cbp-spmenu-push-toleft' );
        menuRight.toggleClass('cbp-spmenu-open' );
        return false;

    };
    showTop.onclick = function() {
        body.toggleClass('cbp-spmenu-push-totop' );
        menuTop.toggleClass('cbp-spmenu-open' );
        return false;
    };
    showLeftPush.onclick = function() {
        body.toggleClass('cbp-spmenu-push-toright' );
        menuLeft.toggleClass('cbp-spmenu-open' );
        return false;
    };
    closePush.click(function(){
        $('.cbp-spmenu-open').toggleClass('cbp-spmenu-open' );
        body.removeClass('cbp-spmenu-push-toleft cbp-spmenu-push-toright cbp-spmenu-push-totop')
    });
    iconclosePush.click(function(){
        $('.cbp-spmenu-open').toggleClass('cbp-spmenu-open' );
        body.removeClass('cbp-spmenu-push-toleft cbp-spmenu-push-toright cbp-spmenu-push-totop');
        return false;
    });

    $(document).on('click', '.disabled', function(){return false;})

    // fancy
    $('.fancy').fancybox();

    $('.js--load-more').click(function () {
        var block = $(this);
        var container = $('.load-container');
        var length = container.find('li').length;
        var category = block.attr('data-category');
        var url = block.attr('data-url');
        var method = block.attr('data-method');

        $.ajax({
            type: method,
            url: url,
            data: {'length': length, "category": category},
            success: function(data) {
                var parse_data = jQuery.parseJSON(data);
                container.append(parse_data.load);
                if(parse_data.flag == 'true'){
                    block.addClass('hidden-block');
                }
            }
        });

        return false;
    })

    //map
    if ($('#map').length) {
       var myMap;
        function init() {
            myMap = new ymaps.Map('map', {
                center: [59.926932,30.307636],
                zoom: 16,
                controls: ['zoomControl', 'searchControl']
            });
            myPlacemark = new ymaps.Placemark([59.926932,30.307636], {}, {
                iconLayout: 'default#image',
                iconImageHref: '../../../s/img/icon--map.jpg',
                iconImageSize: [15, 21],
                iconImageOffset: [-2, -23]
            });
            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
        }
        ymaps.ready(init);
    }

    // маска телефона
    if($('.inp-phone').length){
        $('.inp-phone').mask('+7(999)999-99-99');
    }

    // стилизация селекта
    if($('.select-styled').length){
        $('.select-styled').styler();
    }

    // проверка чекбокса оферты = dis/en кнопки
    $('.js--check-lic').click(function(){
        var block = $(this);
        setTimeout(function(){
            if(block.find('input').prop('checked') == true){
                block.next('.btn').removeClass('disabled')
            }else{
                block.next('.btn').addClass('disabled')
            }
            return false;
        }, 10)

    })

    // табс
      $('ul.tabs__caption').each(function() {
        $(this).find('li').each(function(i) {
          $(this).click(function(){
            $(this).addClass('active').siblings().removeClass('active')
              .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(i).addClass('active');
          });
        });
      });

    if ($('#fb-root').length) {
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.5";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };
    if ($('#vk_comments').length) {
        VK.init({apiId: 5352969, onlyWidgets: true});
        VK.Widgets.Comments("vk_comments", {limit: 5, width: "920", attach: "*"});
    };

    //форма
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    // фокус поля
    $(document).on('focus', '.inp', function(){
        $(this).removeClass('error');
    });

    // отправка стандартной формы
    $(document).on('click', '.js-form-submit', function () {

        var form =  $(this).parents('.main-form');
        var errors = false;

        $(form).find('.required').each(function(){
            var val=$(this).prop('value');
            if(val==''){
                $(this).addClass('error');
                errors=true;
            }
            else{
                if($(this).hasClass('inp-mail')){
                    if(validateEmail(val) == false){
                        $(this).addClass('error');
                        errors=true;
                    }
                }
            }
        });

        if(errors == false){
            var button_value = $(form).find('.js-form-submit').text();
            $(form).find('.js-form-submit').text('Подождите...');

            var method = form.attr('method');
            var action = form.attr('action');
            var data = form.serialize();
            $.ajax({
                type: method,
                url: action,
                data: data,
                success: function(data) {
                    form.find('.form-input').each(function(){
                        $(this).prop('value','')
                    });
                    $(form).find('.js-form-submit').text(button_value);
                    $('.js--form-ok').trigger('click')
                },
                error: function(data) {
                    $(form).find('.js-form-submit').text('Ошибка');
                    setTimeout(function() {
                        $(form).find('.js-form-submit').text(button_value);
                    }, 2000);
                }
            });
        }

        return false;
    });

    // ввод только цифр в поле количетво
	$(document).on('keydown', '.js--inp-num', function(e){input_number();});

    // ввод количества с клавиатуры
    $(document).on('input','.js--inp-num', function(){
        block = $(this);
        if(block.data("lastval")!= $(this).val()) {
            var value = $(this).val();
            if(value == ''){
                $(this).prop('value',1)
            }
            else{
                value = Number(value);
                value = value.toString();
                if(value == 'NaN'){
                    block.prop('value',1)
                }else{
                    block.prop('value',value);
                }
            };
            block.data("lastval", $(this).val());

            if (timeout_link) {
                clearTimeout(timeout_link)
            }
            timeout_link = setTimeout(function () {
                count(block);
            }, 250)

        };
    });

    $('.js--inp-num').focusout(function(){
      if($(this).val() == '' || $(this).val() == '0' ){
        $(this).prop('value',1)
      }
    });

    // клик на +
    $(document).on('click', '.js--button-amount', function(){
        var block = $(this);
        var current_value = $(this).parents('.form-buttons').find('.js--inp-num').prop('value');
        if((block.hasClass('js--button-min') == true && current_value == 1) ||
           (block.hasClass('js--button-plus') == true && current_value == 99)
        ){
            return false
        }else{
            current_value = Number(current_value);
            (block.hasClass('js--button-min') == true) ? (current_value--) : (current_value++);
            block.parents('.form-buttons').find('.js--inp-num').prop('value', current_value);
            count(block);
        }
        return false;
    });

    // ввод только цифр в поле
    var input_number = function(){
        var allow_meta_keys=[86, 67, 65];
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            ($.inArray(event.keyCode,allow_meta_keys) > -1 && (event.ctrlKey === true ||  event.metaKey === true)) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // Ничего не делаем
            return;
        }
        else {
            // Обеждаемся, что это цифра, и останавливаем событие keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    };

    // измение значения при клике на + и -
    function count(block){
        var parents = block.parents('.counter-wrap');
        if(parents.hasClass('counter-wrap-forms')){
            var val = parents.find('.js--inp-num').prop('value');
            parents.find('.hidden-form .amount').prop('value', val);
        }
        if(parents.hasClass('basket-list__el')){
            var method = parents.parents('ul').attr('data-method');
            var action = parents.parents('ul').attr('data-url');
            var data_id = parents.attr('data-id');
            var data_amount = parents.find('.js--inp-num').prop('value');
            $.ajax({
                type: method,
                url: action,
                data: {id: data_id, amount: data_amount},
                success: function(data) {
                    var parse_data = jQuery.parseJSON(data);
                    parents.find('.basket-list__el-total span').text(parse_data.total_position);
                    $('.basket-total span i').text(parse_data.total_basket);
                }
            });
        }
    }

    if($('.inp-phone').length){
        $('.inp-phone').mask('+7(999)999-99-99');
    }

    if($('select-styled').length){
        $('.select-styled').each(function(){
            $(this).styled();
        });
    }

    $(document).on('click', '.popup label', function(){
        var block = $(this);
         setTimeout(function(){
            if(block.find('input').prop('checked') == true){
                block.next('.btn').removeClass('disabled')
            }else{
                block.next('.btn').addClass('disabled')
            }
            return false;
        }, 10)
    })
});


$(document).ready(function(){
    $('.js--remove-position').click(function(){

        var block = $(this).parents('.basket-list__el-remove');
        var container = block.parents('li');

        var method = block.attr('data-method');
        var action = block.attr('data-url');
        var data = container.attr('data-id');

        console.log(action);
        $.ajax({
            type: method,
            url: action,
            data: {id: data},
            success: function(data) {
                var parse_data = jQuery.parseJSON(data);
                console.log(parse_data);
                container.remove();

                if($('.basket-list__el').length){
                    $('.basket-total span i').text(parse_data.total);
                }
                else{
                    $('.basket-full').addClass('hidden-block');
                    $('.basket-empty').removeClass('hidden-block');
                }
            }
        });

        return false;
    });

    // отправка стандартной формы
    $(document).on('click', '.js-checkout-submit', function () {

        var form =  $(this).parents('.checkout-form');
        var errors = false;

        $(form).find('.required').each(function(){
            var val=$(this).prop('value');
            if(val==''){
                $(this).addClass('error');
                errors=true;
            }
            else{
                if($(this).hasClass('inp-mail')){
                    if(validateEmail(val) == false){
                        $(this).addClass('error');
                        errors=true;
                    }
                }
            }
        });

        if(errors == false){
            form.trigger('submit');
        }

        return false;
    });

    if($('.js--calendar').length){
        var parent = $(this).parents('.delivery-date');
        $(this).find('.inp-date').Zebra_DatePicker({
            direction: 1,
            format: 'M d',
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'May', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            days: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
            zero_pad: true,
            onClose: function(view, elements) {
                var date_m = $('.js--calendar .inp-date').prop('value');
                var date_d = $('.js--calendar .inp-date').prop('value');
                var month = date_m.substring(0,3);
                var date = date_d.substring(4);
                if(month == "Янв"){month = "январь"}
                if(month == "Фев"){month = "февраль"}
                if(month == "Мар"){month = "март"}
                if(month == "Апр"){month = "апрель"}
                if(month == "Май"){month = "май"}
                if(month == "Июн"){month = "июнь"}
                if(month == "Июл"){month = "июль"}
                if(month == "Авг"){month = "август"}
                if(month == "Сен"){month = "сентябрь"}
                if(month == "Окт"){month = "октябрь"}
                if(month == "Ноя"){month = "ноябрь"}
                if(month == "Дек"){month = "декабрь"}

                $('.delivery-date p').html("Дата доставки <strong>" + month + " " + date + "</strong>")
            }
        });
    }
});

$(document).ready(function() {

    // аккордеон
    $(document).on('click', '.sub > a:not(.active)', function() {

        $(this).addClass('active');
        var ul = $(this).next(),
                clone = ul.clone().css({"height":"auto"}).appendTo(".mini-menu"),
                height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
        clone.remove();
        ul.animate({"height":height},300);
        return false;
    });

    $(document).on('click', '.sub > a.active', function() {
        $(this).removeClass('active');
        var ul = $(this).next();
        ul.animate({"height":0},300);
        return false;
    })
});

$(document).ready(function() {

    // слайдер на главной
    if ($('.taste-slider').length){
        $('.taste-slider').owlCarousel({
            margin: 0,
            loop: true,
            nav: false,
            dots:true,
            autoplay: false,
            items: 1,
            autoHeight:true
        })
    }

});

$(document).ready(function() {

    // слайдер на главной
    if ($('.item-accessory').length){
        $('.item-accessory').owlCarousel({
            margin: 0,
            loop: true,
            nav: true,
            dots:false,
            autoplay: false,
            items: 4,
            autoHeight:true,
            navText: [ , ]
        })
    }

});

$(document).ready(function() {

    $(document).on('click' ,'.js--change-lk-data', function(){
        var btn = $(this);
        var input_block = btn.parent().prev('.lk-data--content');
        btn.toggleClass('js-form-submit js--change-lk-data');
        input_block.toggleClass('disabled');
        if(btn.hasClass('disabled')){
            btn.text('Изменить данные')
        }else{
            btn.text('Сохранить данные')
        }
        input_block.find('.inp-text').each(function(){
            var input = $(this);
            if(btn.hasClass('disabled')){
                input.prop( "disabled", true );
            }else{
                input.prop( "disabled", false );
            }
        });
        return false;
    });

    //форма
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    $(document).on('click' ,'.lk-data .js-form-submit', function(){
        var form =  $(this).parents('form');
        var errors = false;

        $(form).find('.inp-mail').each(function(){
            var val=$(this).prop('value');
            console.log(val == '')
            if(val != '') {
                if(validateEmail(val) == false) {
                    $(this).addClass('error');
                    errors = true;
                }
            }
        });

        if(errors == false){
            var button_value = $(form).find('.js-form-submit').text();
            $(form).find('.js-form-submit span').text('Подождите...');

            var method = form.attr('method');
            var action = form.attr('action');
            var data = form.serialize();

            $.ajax({
                type: method,
                url: action,
                data: data,
                success: function(data) {
                    var btn = $(form).find('.js-form-submit');
                    btn.toggleClass('js-form-submit js--change-lk-data');
                    var input_block = $('.lk-data--content');
                    input_block.toggleClass('disabled');
                    if(input_block.hasClass('disabled')){
                        btn.text('Изменить данные')
                    }else{
                        btn.text('Сохранить данные')
                    }
                    input_block.find('.inp-text').each(function(){
                        var input = $(this);
                        if(btn.hasClass('disabled')){
                            input.prop( "disabled", true );
                        }else{
                            input.prop( "disabled", false );
                        }
                    });
                },
                error: function(data) {
                    $(form).find('.js-form-submit span').text('Ошибка');
                    setTimeout(function() {
                        $(form).find('.js-form-submit span').text(button_value);
                    }, 2000);
                }
            });
        }

        return false;
    });
    //$("#stars-green").rating('create',{coloron:'green',onClick:function(){ alert('rating is ' + this.attr('data-rating')); }});

    if($('.total-rating')){
        $('.total-rating').each(function(){
            $(this).rating('create',{coloron: 'black', coloroff: 'white'});
        })
    }

    if($('.item-rating')){
        $('.item-rating').each(function(){
            $(this).rating('create',{coloron: '#898989', coloroff: '#f5f5f5',onClick:function(){
                var rating = this.attr('data-rating');
                var block = $(this);
                var form = block.parents('form');
                var total = block.parents('tr').prev('tr').find('.total-rating');

                block.prev('input').prop('value', rating);
                var method = form.attr('method');
                var action = form.attr('action');
                var data = form.serialize();

                $.ajax({
                    type: method,
                    url: action,
                    data: data,
                    success: function(data) {
                        var parse_data = jQuery.parseJSON(data);
                        total.empty().attr('data-rating', parse_data.total_rating);
                        total.rating('create',{coloron: 'black', coloroff: 'white'});
                    }
                });

            }});
        })
    }

    $('.js--add-expert-comment').click(function(){
        var form = $(this).parents('form');
        var val = form.find('.inp').prop('val');
        var container = form.parents('td.comment');

        if(val != ''){
            var method = form.attr('method');
            var action = form.attr('action');
            var data = form.serialize();

            $.ajax({
                type: method,
                url: action,
                data: data,
                success: function(data) {
                    var parse_data = jQuery.parseJSON(data);
                    form.remove();
                    container.append(parse_data.text);
                }
            });

        }
        return false;
    })

});

$(document).ready(function() {

    // слайдер в рецептах
    if ($('.recipe-slider').length){
        $('.recipe-slider').owlCarousel({
            margin: 0,
            loop: true,
            nav: true,
            dots:false,
            autoplay: false,
            items: 2,
            autoHeight:true,
            navText: [ , ]
        })
    }

    // слайдер в рецепте
    if ($('.recipe-item-slider').length){
        $('.recipe-item-slider').owlCarousel({
            margin: 20,
            loop: true,
            nav: true,
            dots:false,
            autoplay: false,
            items: 4,
            autoHeight:false,
            navText: [ , ]
        })
    }

});

$(document).ready(function() {
    $('.set-wine').each(function() {
        var wrapper = $(this);

        // добавить вино
        $('.js--add-wine').click(function () {
            var button = $(this);
            var index = wrapper.find('.inp').length;
            var layout = $('.layout-input').html();

            wrapper.append(layout);

            var index = wrapper.find('label:last-child .inp').prop('name');
            wrapper.find('label:last-child .inp').prop('name', index + wrapper.find('.inp').length);

            if (button.hasClass('set-self')) {
                wrapper.find('label').append('<a href="" class="js--remove-wine remove-wine"></a>')
            }

            if (wrapper.find('label').length != 0) {
                wrapper.next('.add-wine').text(wrapper.next('.add-wine').attr('data-text-full'));
            }
            return false;
        });

        // удалить вино
        $('.set-wine').on('click', '.js--remove-wine', function () {

            $(this).closest('label').remove();
            if (wrapper.find('label').length === 0) {

                wrapper.next('.add-wine').text(wrapper.next('.add-wine').attr('data-text-empty'));
            }
            return false;
        });

        var inp_file = $('label.file .inp');

        inp_file.change(function () {
            var ele = document.getElementById($(this).attr('id'));
            var result = ele.files;
            var text = "";
            for (var x = 0; x < result.length; x++) {
                var fle = result[x];
                text = text + '<span>'+ fle.name +'</span>';
            }
            inp_file.parents('.file').find('.text').append(text)
        });
    })
});

