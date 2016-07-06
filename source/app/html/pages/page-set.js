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

