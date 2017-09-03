// Выпадающее меню
$(slide).ready(function(){
    $('.header-bottom ul li').hover(
        function() {
            $(this).find('ul').stop( true, true ).slideDown(450);
        },
        function() {
            $(this).find('ul').stop( true, true ).slideUp(200);
        }
    );
});

