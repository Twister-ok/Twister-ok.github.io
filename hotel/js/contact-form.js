jQuery(document).ready(function ($) {

    $.validator.addMethod("capcha", function (value, element, params) {
        if (value.length==6){
            var xhr = $.ajax({
                async:false,
                url: '/core/components/simpleCapcha/check.php',
                data:{'code':value}
            });
            return JSON.parse(xhr.responseText).result;
        }  else return false;
    });

    $("#contactForm").validate({
        rules:{
            'contact_name':{required:true, minlength:2},
            'contact_email':{required:true, email:true},
            'simpleCapcha':{required:true, capcha:true}
        },
        messages:{
            'contact_name':{
                required:"Введите ваше имя",
                minlength:"Это поле должно быть не меньше 2 символов"
            },
            'contact_email':{
                required:"Введите ваш e-mail",
                email:"Пожалуйста, введите правильный адрес электронной почты"
            },
            'simpleCapcha':{
                required:"Поле необходимо заполнить",
                capcha:"Код введен не верно"
            }
        }
    });

    $('#myModal').reveal({
        animation: 'fadeAndPop',
        animationspeed: 300,
        closeonbackgroundclick: true,
        dismissmodalclass: 'close-reveal-modal'
    });

});


