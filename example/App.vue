<template>
    <div style="display: flex;flex-direction: column;">
        <div style="height: 500px; background: #cccccc; display: flex; align-items: center; justify-content: center;">
            Container Without Image. Keep Scrolling...
        </div>
        <div style="height: 150px; background: #ffb5b5; display: flex; align-items: center; justify-content: center;">
            Container With Image Below.
        </div>
        <div style="display: flex; align-items: center; justify-content: center;">
            <vue-lazy-image
                src="example/assets/images/map.jpg"
                placeholder="example/assets/images/placeholder.gif"
            />
        </div>
    </div>
</template>
