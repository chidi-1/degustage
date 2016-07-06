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
