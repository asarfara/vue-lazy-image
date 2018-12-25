/**
 * @asarfara/vue-lazy-image v0.0.2
 * (c) 2018 Ali Sarfaraz <ali.sarfaraz88@gmail.com>
 * @license MIT
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['vue-lazy-image'] = factory());
}(this, (function () { 'use strict';

var observer = {
    data: function data() {
        return {
            inViewPort: false,
        };
    },
    mounted: function mounted() {
        var this$1 = this;

        var observer = new IntersectionObserver(function (entries) {
            var image = entries[0];
            if (image.isIntersecting) {
                this$1.inViewPort = true;
                observer.disconnect();
            }
        }, {});

        observer.observe(this.$el);
    }
};

var VueLazyImage = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{attrs:{"src":_vm.imageSrc}})},staticRenderFns: [],
    name: 'VueLazyImage',
    mixins: [observer],
    props: {
        src: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        }
    },
    computed: {
        imageSrc: function imageSrc() {
            return this.inViewPort ? this.src : this.placeholder;
        }
    }
};

return VueLazyImage;

})));
