    import calc from './modules/calc';
    import card from './modules/card';
    import form from './modules/form';
    import modal from './modules/modal';
    import slider from './modules/slider';
    import tabs from './modules/tabs';
    import timer from './modules/timer';
    import {modalOpen} from './modules/modal'; 

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => modalOpen('.modal', modalTimerId), 50000);

    calc();
    card();
    form(modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    slider({
        containet: '.offer__slider',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', "2021-09-18");

});
   











   
































