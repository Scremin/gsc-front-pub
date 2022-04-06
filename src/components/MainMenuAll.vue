<style scoped>
    @import url("../allMainMenu-style.scss");
</style>

<template>
    <div v-scroll="handleScroll_main">

        <div class="allMainMenu">

            <div class="encaixeSup">
                <MainMenuDrop class="elem_sup"/>
            </div>
            
            <transition name="fade">

                <div v-if="changeMenuDrop && auth_router" class="encaixeInf">
                    <EncaixeMainMenuDrop v-on:scroll.native="handleScroll" />
                </div>

            </transition>

        </div>

    </div>
</template>

<script>
//        <HoverAboveMenu/><CarouselMain />
//        <v-img
//        :src="require('./assets/test_img_back.jpg')"
//        >
//       </v-img>
import MainMenuDrop from './MainMenuDrop'
import EncaixeMainMenuDrop from './EncaixeMainMenuDrop'

//import CarouselMain from './CarouselMain'

//import HoverAboveMenu from './HoverAboveMenu'

export default {
    name: 'MainMenuAll',

    components: {

        MainMenuDrop,
        EncaixeMainMenuDrop,
        //CarouselMain,
    },

    computed: {
        changeMenuDrop() {
            return this.$store.state.changeMenuDrop // exibir menu drop
        },
        auth_router() {
            return this.$store.state.auth_router // auth drop menu
        },
        main_overlay(){
            return this.$store.state.main_overlay
        }
    },

    methods: {
        RecolherMenu() {
            //console.log('estou no recolhedor')

            this.$store.state.changeMenuDrop = false
        },
        handleScroll_main() {

            if(window.scrollY > 50) {
                this.$store.state.exibirTabs = false // desativar tabs
            }
            else {
                this.$store.state.exibirTabs = true // ativar tabs
            }
        },
        handleScroll() {
            //console.log('scroll move on')

            this.RecolherMenu()
        },
    },

    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },

    data: () => ({
        exibir: false,
    }),
};
</script>
