### Magento Menu widget mixin - slide instead of collapse.
#### Facts
* It is designed as a javascript mixin for [Magento Menu widget](https://devdocs.magento.com/guides/v2.4/javascript-dev-guide/widgets/widget_menu.html).
* It overrides the behavior of the mobile menu.
* It replaces the "collapse" of submenus with a "slide" effect. 
* "Slide" effect based on
  * https://github.com/somewebmedia/hc-offcanvas-nav (native lib)
  * https://github.com/mediarox/module-js-hc-offcanvas-nav (magento 2 wrapper)
* Support's active category jump ([data-nav-active](https://github.com/somewebmedia/hc-offcanvas-nav#data-attributes))
* Keep in mind: 
  * The connection to the library "hc-offcanvas-nav" is only rudimentary. At the moment only 2 options (labelBack, width) are supported/used.
  * The library also does not support "destroy". But this should not be a problem in most cases due to the "mediaCheck" in the core-menu widget.
  * The library does not have a neutral/colorless theme. The included theme (blue) has to be customized again via a theme in most cases.
* [Demo](https://somewebmedia.github.io/hc-offcanvas-nav/)

#### Installation

```bash
composer require mediarox/module-mixin-menu-mobile-sliding
bin/magento setup:upgrade
```
