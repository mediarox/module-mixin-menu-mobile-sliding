/**
 * Copyright 2022 (c) mediarox UG (haftungsbeschraenkt) (http://www.mediarox.de)
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'mage/translate',
    'hcOffcanvasNav',
], function ($, $t) {
    'use strict';

    var mixin = {
        options: {
            mobileSliderLabelBack: $t('Back'),
            mobileSliderWidth: '100%'
        },
        
        /**
         * @private
         */
        _toggleMobileMode: function () {
            $(this.element).off('mouseenter mouseleave');
            $('li.active').first().attr('data-nav-active', ''); // active class mapping
            var $navigation = $(this.element).hcOffcanvasNav({
                labelBack: this.options.mobileSliderLabelBack,
                width: this.options.mobileSliderWidth
            });
            window.navigation = $navigation.data('hcOffcanvasNav'); // cache for toggle button
        },

        /**
         * @return {Object}
         * @private
         */
        _assignControls: function () {
            this.controls = {
                toggleBtn: $('[data-action="toggle-nav"]')
            };

            return this;
        },

        /**
         * Only observe click. Not swipe.
         * @private
         */
        _listen: function () {
            var controls = this.controls,
                toggle = this.toggle;

            controls.toggleBtn.off('click');
            controls.toggleBtn.on('click', toggle.bind(this));
        },

        /**
         * Open new navigation.
         */
        toggle: function () {
            window.navigation.open();
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
