// Модальное окно

//1 картинка
// открыть по кнопке
$('.js-button-campaign1').click(function () {

    $('.js-overlay-campaign1').fadeIn();
    $('.js-overlay-campaign1').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign1').click(function () {
    $('.js-overlay-campaign1').fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign1');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign1').fadeOut();

    }
});


//2 картинка
$('.js-button-campaign2').click(function () {

    $('.js-overlay-campaign2').fadeIn();
    $('.js-overlay-campaign2').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign2').click(function () {
    $('.js-overlay-campaign2').fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign2');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign2').fadeOut();

    }
});

//3 картинка
$('.js-button-campaign3').click(function () {

    $('.js-overlay-campaign3').fadeIn();
    $('.js-overlay-campaign3').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign3').click(function () {
    $('.js-overlay-campaign3').fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign3');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign3').fadeOut();

    }
});

//4 картинка
$('.js-button-campaign4').click(function () {

    $('.js-overlay-campaign4').fadeIn();
    $('.js-overlay-campaign4').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign4').click(function () {
    $('.js-overlay-campaign4').fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign4');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign4').fadeOut();

    }
});

//5 картинка
$('.js-button-campaign5').click(function () {

    $('.js-overlay-campaign5').fadeIn();
    $('.js-overlay-campaign5').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign5').click(function () {
    $('.js-overlay-campaign5').fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign5');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign5').fadeOut();

    }
});

//6 картинка
$('.js-button-campaign6').click(function () {

    $('.js-overlay-campaign6').fadeIn();
    $('.js-overlay-campaign6').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign6').click(function () {
    $('.js-overlay-campaign6').fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign6');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign6').fadeOut();

    }
});
