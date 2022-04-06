<!--<style scoped>
    @import url("../../styles/homeStyle/home.scss");
</style>-->

<template>

    <div class="box_parallaxHome">

        <!-- height="100" -->
        <v-parallax :style="{'margin-top':'50px','box-shadow': '10px 0px 6px rgba(1, 1, 1, 1)'}"
        :src="$store.state.img_parallax"
        height="400"
        >
        </v-parallax>

    </div>

</template>