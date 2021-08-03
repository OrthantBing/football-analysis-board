<template>
<div class="baseground" id="baseground">
    <div class="bg-image-container">
        <slot></slot>
    </div>
</div>
    
</template>

<style scoped>

@media screen and (min-height: 640px), (min-width: 720px) {
    .bg-image-container {
        height: 90vh;
        width: 100%;
        background-image: url("../../assets/field/ground.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        /* margin-left: 10%;
        margin-right: 10%;
        position: relative; */
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .baseground {
        display: flex;
        height: 90vh;
        width: 100%;
        background-color: sienna;
        /* display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        align-content: flex-start;
        justify-content: center;
        flex: none; */

    }
}

@media screen and (max-height: 640px), (max-width: 720px) {

    .bg-image-container {
        height: 90vw;
        width: 100%;
        background-image: url("../../assets/field/ground.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        /* margin-left: 10%;
        margin-right: 10%;
        position: relative; */
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .baseground {
        display: flex;
        height: 90vw;
        width: 100%;
        background-color: sienna;
        /* display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        align-content: flex-start;
        justify-content: center;
        flex: none; */

    }
}


</style>