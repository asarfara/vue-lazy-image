<template>
    <img :src="imageSrc"/>
</template>

<script>
    import Observer from '../mixins/Observer';

    export default {
        name: 'VueLazyImage',
        mixins: [Observer],
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
            imageSrc() {
                return this.inViewPort ? this.src : this.placeholder;
            }
        }
    }
</script>
