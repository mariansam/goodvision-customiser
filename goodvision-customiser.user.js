// ==UserScript==
// @name         GoodVision Customizer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes your GoodVision annotating simplier
// @author       MarianS
// @match        https://annotations.goodvisionlive.com
// @grant        none
// @downloadURL  https://github.com/mariansam/goodvision-customizer/raw/master/goodvision-customiser.user.js
// @updateURL    https://github.com/mariansam/goodvision-customizer/raw/master/goodvision-customiser.user.js
// @supportURL   https://github.com/mariansam/goodvision-customizer/issues
// @homepage     https://github.com/mariansam/goodvision-customizer/
// ==/UserScript==

(function() {
    'use strict';

    // init sheet
    var sheet = document.styleSheets[2];

    // disable snackbar
    sheet.insertRule('#snackbar.show { display: none; }', sheet.cssRules.length);

    // disable tags
    sheet.insertRule('.tag-area { display: none; }', sheet.cssRules.length);

    // keyboard shortcuts
    var car = document.querySelector('.btn-object-class[data-object-class="CAR"]');
    var person = document.querySelector('.btn-object-class[data-object-class="PERSON"]');
    document.onkeypress = function(env) {
        if (env.key === 'c')
            car.click();
        else if (env.key === 'v')
            person.click();
    };
})();
