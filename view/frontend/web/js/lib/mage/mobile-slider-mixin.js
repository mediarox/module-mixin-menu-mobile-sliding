/**
 * Copyright 2022 (c) mediarox UG (haftungsbeschraenkt) (http://www.mediarox.de)
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'hcOffcanvasNav'
], function ($) {
    'use strict';

    var mixin = {
        options: {
            currentCategoryActive: false
        },
        
        /**
         * 
         * @private
         */
        _toggleMobileMode: function () {
            $(this.element).off('mouseenter mouseleave');

            var $navigation = $(this.element).hcOffcanvasNav({
                disableAt: 768,
                levelTitles: true,
                levelTitleAsBack: true,
                labelBack: 'Back',
                width: '100%'
            });
            window.navigation = $navigation.data('hcOffcanvasNav'); // cache for toggle button
        }
    };

    return function (targetWidget) {
        $.widget('mage.menu', targetWidget.menu, mixin);

        return {
            menu: $.mage.menu,
            navigation: $.mage.navigation
        };
    };
});
