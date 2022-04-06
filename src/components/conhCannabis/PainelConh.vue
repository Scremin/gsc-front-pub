<style scoped>
    @import url("../../styles/conhCannabisStyle/painelConh.scss");
</style>

<template>

    <div class="box_painelConh">

        <ElConh v-for="(el,i) in $store.state.elConh" :key="i" :elConh="el" :indexConh="i" />

    </div>

</template>

<script>
import ElConh from './ElConh.vue'

export default {

    components: { ElConh },

    data() {
        return {
            elConh: [
                {
                    flagActivaInfoConh:false,
                    imgElConh:require('../../assets/imgs/histcan.jpg'),
                    titElConh:'História da Cannabis',
                },
                {
                    flagActivaInfoConh:false,
                    imgElConh:require('../../assets/imgs/induscan.jpg'),
                    titElConh:'Indústria da Cannabis',
                },
                {
                    flagActivaInfoConh:false,
                    imgElConh:require('../../assets/imgs/medcan.jpeg'),
                    titElConh:'Cannabis na medicina',
                },
                {
                    flagActivaInfoConh:false,
                    imgElConh:require('../../assets/imgs/recrecan.jpg'),
                    titElConh:'Cannabis recreativa',
                },
            ]
        }
    }
}
</script>