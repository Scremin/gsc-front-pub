<style scoped>
    @import url("../../styles/conhCannabisStyle/painelConhSup.scss");
</style>

<template>

    <div class="box_painelConhSup">

        <span class="tit_painelConhSup hidden-sm-and-down">
            {{ $store.state.tit_card_conh }}
        </span>

        <div class="tit_painelConhSup_s hidden-md-and-up">

            <span :style="{'margin-left':'6px'}">
                {{ $store.state.tit_card_conh }}
            </span>

        </div>

    </div>

</template>
