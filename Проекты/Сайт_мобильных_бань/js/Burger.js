$(document).ready(function () {
        // Обработчик клика на бургер-меню
        $('.menu-burger__header').click(function () {
            $('.menu-burger__header').toggleClass('open-menu');
            $('.header__nav').toggleClass('open-menu');
            $('body').toggleClass('lock');
            $('.container').toggleClass('blur');
        });
    
        // Обработчик клика на элементы меню
        $('.header__nav a').click(function () {
            // Закрываем бургер-меню
            $('.menu-burger__header').removeClass('open-menu');
            $('.header__nav').removeClass('open-menu');
            $('body').removeClass('lock');
            $('.container').removeClass('blur');
        });
    });