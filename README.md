### Magento Menu widget mixin - slide instead of collapse.
#### Facts
* It is designed as a javascript mixin for [Magento Menu widget](https://devdocs.magento.com/guides/v2.4/javascript-dev-guide/widgets/widget_menu.html).
* It overrides the behavior of the mobile menu.
* It replaces the "collapse" of submenus with a "slide" effect. 
* "Slide" effect based on
  * https://github.com/somewebmedia/hc-offcanvas-nav (native lib)
  * https://github.com/mediarox/module-js-hc-offcanvas-nav (magento 2 wrapper)

#### Installation

```bash
composer require mediarox/module-mixin-menu-mobile-sliding
bin/magento setup:upgrade
```
