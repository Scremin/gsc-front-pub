<style scoped>
    @import url("../../styles/quemSomosStyle/el_quemSomos.scss");
</style>

<template>

    <div class="box_el_quemSomos">

        <!-- SMALL -->
        <img 
        :style="{'max-width':'80%','border-radius': '90px'}"
        class="img_el_quem_somos_S hidden-md-and-up" 
        :src="el_quemSomos_img"
        />

        <!-- SMALL -->
        <div class="txt_el_quem_somos_S hidden-md-and-up">
            <span class="tit_txt_el_quem_somos_S hidden-md-and-up">{{ el_quemSomos_tit }}</span>

            <span class="body_txt_el_quem_somos_S hidden-md-and-up">{{ el_quemSomos_texto }}</span>
        </div>

        <!-- LARGE -->
        <img 
        :style="{'max-width':'300px','border-radius': '90px'}"
        class="img_el_quem_somos_L hidden-sm-and-down" 
        :src="el_quemSomos_img"
        />

        <!-- LARGE -->
        <div class="txt_el_quem_somos_L hidden-sm-and-down">
            <span class="tit_txt_el_quem_somos_L hidden-sm-and-down">{{ el_quemSomos_tit }}</span>

            <span class="body_txt_el_quem_somos_L hidden-sm-and-down">{{ el_quemSomos_texto }}</span>
        </div>

    </div>

</template>

<script>
export default {

    props: ['el_quemSomos_img','el_quemSomos_tit','el_quemSomos_texto'],

    created () {

        window.scrollTo(0,0)
        
        //console.log('el_quemSomos: ', this.el_quemSomos)
    }

}
</script>