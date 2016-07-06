
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
