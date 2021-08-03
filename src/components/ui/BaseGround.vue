<template>
    <div class="baseground" id="baseground">
        <slot></slot>
    </div>
</template>

<style scoped>
div {
    height: 90vh;
    width: 100%;
    background-image: url("../../assets/field/ground.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: sienna;
    /* display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    align-content: flex-start;
    justify-content: center;
    flex: none; */

}
</style>