$(document).ready(function () {
        $('.menu-burger__header').click(function () {
                $('.menu-burger__header').toggleClass('open-menu');
                $('.header__nav--mobile').toggleClass('open-menu');
                $('body').toggleClass('lock');
                $('.container').toggleClass('blur');
        });

        // Обработчик клика на элементы меню
        $('.header__nav--mobile a').click(function () {
                // Закрываем бургер-меню
                $('.menu-burger__header').removeClass('open-menu');
                $('.header__nav--mobile').removeClass('open-menu');
                $('body').removeClass('lock');
                $('.container').removeClass('blur');
            });
});