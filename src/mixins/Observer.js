let observer = {
    data() {
        return {
            inViewPort: false,
        };
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
};

export default observer;
