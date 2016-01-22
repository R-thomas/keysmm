$(document).ready(function(){
    
    //Скрипт плавного перехода к нужному блоку
    
    
    $("#menu").on("click","a", function (event) { 
        event.preventDefault(); //отменяем стандартную обработку нажатия по ссылке
        var id  = $(this).attr('href'), //забираем идентификатор бока с атрибута href
            top = $(id).offset().top;  //узнаем высоту от начала страницы до блока на который ссылается якорь
        $('body,html').animate({scrollTop: top}, 800); //анимируем переход на расстояние - top за 800 мс
    });
    
    // Передача данных с первой формы
    
    function runAjaxForm1(){
        var inp_name = $('.inp_name').val(); // получаем значение поля name 
        var inp_tel = $('.inp_tel').val();  // получаем значение поля telephone
        $.ajax({                            // создаем ajax запрос, передаем данные методом post
            type:"POST",
            data:({
            'name':inp_name,
            'telephone':inp_tel
            }),
            url:"main",
            dataType: "json"
        })
     }
     
     function runAjaxForm2(){
        var inp_name = $('.inp_name2').val(); // получаем значение поля name 
        var inp_tel = $('.inp_tel2').val();  // получаем значение поля telephone
        $.ajax({                            // создаем ajax запрос, передаем данные методом post
            type:"POST",
            data:({
            'name':inp_name,
            'telephone':inp_tel
            }),
            url:"main",
            dataType: "json"
        })
     }
     
     function runAjaxForm3(){
        var inp_name = $('.inp_name3').val(); // получаем значение поля name 
        var inp_tel = $('.inp_tel3').val();  // получаем значение поля telephone
        $.ajax({                            // создаем ajax запрос, передаем данные методом post
            type:"POST",
            data:({
            'name':inp_name,
            'telephone':inp_tel
            }),
            url:"main",
            dataType: "json"
        })
        $('.contener2').hide(100)
     }
     
     // Окно успеха отправки данных
     
     
     $('.inp_sub').click(runAjaxForm1);   // запускаем функцию передачи данных по нажатию на кнопку на верхней форме
     $('.inp_sub2').click(runAjaxForm2);  //запускаем функцию передачи данных по нажатию на кнопку на нижней форме
     $('.inp_sub, .inp_sub2, .inp_sub3').click(function(){
        $('.window_success').addClass('bounceInDown animated')
        $('.contener').show(100)  // анимируем появление окна успеха при нажатии на кнопку "заказать"
     })
     $('.close').click(function(){
        $('.contener').hide(300)  // закрытие окна успеха при нажатии на кнопку "закрыть"
     })
     $('.window_black').click(function(){
        $('.contener').hide(300)  // Закрытие окна успеха при нажатии на темное поле вокруг окна успеха
     })
     
     // появление формы отправки данных при нажатии на кнопке "Заказать" в блоке "Цены"
     
     $('.button1, .button2, .button3, .button4').click(function(){
        $('.form3').addClass('bounceInUp animated')
        $('.contener2').show(100)
        $('.inp_sub3').click(runAjaxForm3)
        $('.window_black2').click(function(){
        $('.contener2').hide(300)  // Закрытие окна успеха при нажатии на темное поле вокруг окна успеха
     })
        $('.close2').click(function(){
        $('.contener2').hide(300)  // закрытие окна успеха при нажатии на кнопку "закрыть"
     })
     })
     
     
     // анимация этапов работ
    if(window.screen.width>=982){

 
    $('.img_anim').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    offset: 100
    })
        
    $('.p_anim').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    offset: 100
    })
    }
    //политика конфиденциальности
    
    $('.confid').click(function(){
        $('.confid_text').addClass('bounceInDown animated')
        $('.confid_wrap').show(100)
        $('.window_black2').click(function(){
        $('.confid_wrap').hide(300)  // Закрытие окна успеха при нажатии на темное поле вокруг окна успеха
     })
        $('.close3').click(function(){
        $('.confid_wrap').hide(300)  // закрытие окна успеха при нажатии на кнопку "закрыть"
     })
    })
    
    // Работы по дизайну 1
    
    $('.img1').click(function(){
        $('.my_images1').show(200)  // анимируем появление окна успеха при нажатии на кнопку "заказать"
     })
     $('.close4').click(function(){
        $('.my_images1').hide(100)  // закрытие окна успеха при нажатии на кнопку "закрыть"
     })
     $('.window_black2').click(function(){
        $('.my_images1').hide(100)  // Закрытие окна успеха при нажатии на темное поле вокруг окна успеха
     })
     
     // Работы по дизайну 2
    
    $('.img2').click(function(){
        $('.my_images2').show(200)  // анимируем появление окна успеха при нажатии на кнопку "заказать"
     })
     $('.close4').click(function(){
        $('.my_images2').hide(100)  // закрытие окна успеха при нажатии на кнопку "закрыть"
     })
     $('.window_black2').click(function(){
        $('.my_images2').hide(100)  // Закрытие окна успеха при нажатии на темное поле вокруг окна успеха
     })
     
     // Работы по дизайну 3
    
    $('.img3').click(function(){
        $('.my_images3').show(200)  // анимируем появление окна успеха при нажатии на кнопку "заказать"
     })
     $('.close4').click(function(){
        $('.my_images3').hide(100)  // закрытие окна успеха при нажатии на кнопку "закрыть"
     })
     $('.window_black2').click(function(){
        $('.my_images3').hide(100)  // Закрытие окна успеха при нажатии на темное поле вокруг окна успеха
     })
     
     // Работы по дизайну 2
    
    $('.img4').click(function(){
        $('.my_images4').show(200)  // анимируем появление окна успеха при нажатии на кнопку "заказать"
     })
     $('.close4').click(function(){
        $('.my_images4').hide(100)  // закрытие окна успеха при нажатии на кнопку "закрыть"
     })
     $('.window_black2').click(function(){
        $('.my_images4').hide(100)  // Закрытие окна успеха при нажатии на темное поле вокруг окна успеха
     })
     
     // Работы по дизайну 5
    
    $('.img5').click(function(){
        $('.my_images5').show(200)  // анимируем появление окна успеха при нажатии на кнопку "заказать"
     })
     $('.close4').click(function(){
        $('.my_images5').hide(100)  // закрытие окна успеха при нажатии на кнопку "закрыть"
     })
     $('.window_black2').click(function(){
        $('.my_images5').hide(100)  // Закрытие окна успеха при нажатии на темное поле вокруг окна успеха
     })
     
     // Работы по дизайну 6
    
    $('.img6').click(function(){
        
        $('.my_images6').show(200)  // анимируем появление окна успеха при нажатии на кнопку "заказать"
     })
     $('.close4').click(function(){
        $('.my_images6').hide(100)  // закрытие окна успеха при нажатии на кнопку "закрыть"
     })
     $('.window_black2').click(function(){
        $('.my_images6').hide(100)  // Закрытие окна успеха при нажатии на темное поле вокруг окна успеха
     })
     
     if(window.screen.width<1025){
        $('.r1, .r2, .r3, .r4, .r5, .r6').css(
        'left', '12%');
        $('.close4').css(
        'left', '90%')
        }
        
    //  форма 2 анимация
    if(window.screen.width>=982){
    $('.f2, .feedback').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: 100
    })
        
    $('.p_anim').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    offset: 100
    })
    }
        
        
});