import { worksImg, glazingImgs, linksGlazing, blocksGlazing, linksDecoration, blocksDecoration, jsonCalc } from './variables.js';
import { timer } from './modules/timer.js';
import { createLightbox, closeLightbox, clickImg } from './modules/Lightbox.js';

import { initForms } from './modules/forms.js';
import { createObject, view, turningIntoArr, viewImg } from './modules/tokens.js';
import { initCalculator } from './modules/calc.js';
import { modalWork } from './modules/modal_order.js'

document.addEventListener('DOMContentLoaded', () => {

    modalWork();
    initForms(initCalculator(), jsonCalc);
    timer();
    createLightbox();
    clickImg(worksImg);

    const lightbox = document.querySelector('#lightbox');

    closeLightbox(lightbox);
    view(createObject(linksGlazing, blocksGlazing), blocksGlazing); // Токены (Остекление балконов и лоджий)
    viewImg(turningIntoArr(glazingImgs), blocksGlazing);
    view(createObject(linksDecoration, blocksDecoration), blocksDecoration); // Токены (ЗАКАЖИТЕ ОТДЕЛКУ БАЛКОНА СО СКИДКОЙ 60%!)
});