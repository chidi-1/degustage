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
