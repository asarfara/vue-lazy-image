<template>
    <img :src="imageSrc"/>
</template>

<script>
    export default {
        name: 'VueLazyImage',
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
        data() {
            return {
                inViewPort: false,
            };
        },
        computed: {
            imageSrc() {
                return this.inViewPort ? this.src : this.placeholder;
            }
        },
        mounted() {
            let observer = new IntersectionObserver(entries => {
                let image = entries[0];
                if (image.isIntersecting) {
                    this.inViewPort = true;
                    observer.disconnect();
                }
            }, {});

            observer.observe(this.$el);
        }
    }
</script>
