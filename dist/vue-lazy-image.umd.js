(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('src/components/VueLazyImage')) :
    typeof define === 'function' && define.amd ? define(['exports', 'src/components/VueLazyImage'], factory) :
    (global = global || self, factory(global.VueLazyImage = {}, global.VueLazyImage));
}(this, (function (exports, VueLazyImage) { 'use strict';

    VueLazyImage = VueLazyImage && Object.prototype.hasOwnProperty.call(VueLazyImage, 'default') ? VueLazyImage['default'] : VueLazyImage;

    // Import vue component

    // Declare install function executed by Vue.use()
    function install(Vue) {
        if (install.installed) { return; }
        install.installed = true;
        Vue.component('VueLazyImage', VueLazyImage);
    }

    // Create module definition for Vue.use()
    var plugin = {
        install: install,
    };

    // Auto-install when vue is found (eg. in browser via <script> tag)
    var GlobalVue = null;
    if (typeof window !== 'undefined') {
        GlobalVue = window.Vue;
    } else if (typeof global !== 'undefined') {
        GlobalVue = global.Vue;
    }
    if (GlobalVue) {
        GlobalVue.use(plugin);
    }

    exports.default = VueLazyImage;
    exports.install = install;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
