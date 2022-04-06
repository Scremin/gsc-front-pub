<style scoped>
    @import url("../../styles/conhCannabisStyle/conhCannabis.scss");
</style>

<template>

    <div class="box_conhCannabis">

        <PainelConhSup />

        <PainelConh />

    </div>

</template>

<script>
import PainelConhSup from './PainelConhSup.vue'
import PainelConh from './PainelConh.vue'

export default {

    components: { PainelConhSup, PainelConh }
}
</script>