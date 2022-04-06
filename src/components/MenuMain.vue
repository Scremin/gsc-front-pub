<style scoped>
    @import url("../styles/menuMain.scss");
</style>

<template>

    <div class="box_menuMain">

        <!-- versão SMALL -->
        <div class="el_mainMenu_A hidden-md-and-up">

            <!--<v-btn icon>

                <v-icon color="rgb(168, 243, 15)">mdi-menu</v-icon>

            </v-btn>-->

            <MenuMainSmall />

        </div>

        <!-- versão LARGE -->
        <div class="el_mainMenu_A hidden-sm-and-down">

            <span @click="chamarPage('/')"
            class="el_txt_mainMenu shadowElTxtMenuMain"
            @mouseover="esconderMenuDrop(10)"
            >
                Início
            </span>

            <span @click="chamarPage('/categorias')"
            class="el_txt_mainMenu shadowElTxtMenuMain"
            @mouseover="chamarMenuDrop()"
            >
                Produtos
            </span>

            <span @click="chamarPage('/quemsomos')"
            class="el_txt_mainMenu shadowElTxtMenuMain"
            @mouseover="esconderMenuDrop(10)"
            >
                Quem somos
            </span>

            <span @click="chamarPage('/conhCannabis')"
            class="el_txt_mainMenu shadowElTxtMenuMain"
            @mouseover="esconderMenuDrop(10)"
            >
                Conheça a cannabis
            </span>

        </div>

        <!-- LADO DIREITO DO MENU MAIN -->
        <div class="el_mainMenu_B">
            
            <!-- IMG Menu -->
            <div class="img_logo">

                <!-- :style="{'border-radius':'32px'}" -->
                <v-img
                    :src="require('../assets/imgs/gh-transp.png')"
                />

            </div>

            <!-- icons menu main -->
            <div class="extrema_esquerda_menuMain hidden-sm-and-down">
                <v-btn icon class="el_esquerda_menuMainUSER">
                    <v-icon @click="chamarPage('/clienthome')" color="rgb(168, 243, 15)">mdi-account</v-icon>
                </v-btn>
                <v-btn icon class="el_esquerda_menuMain">
                    <v-icon color="rgb(168, 243, 15)" @click="chamarPage('/carrinho')">mdi-cart</v-icon>
                </v-btn>
                <span 
                class="el_esquerda_menuMain"
                >
                    {{ this.$store.getters.qntProdsOnCart }} | {{ this.$store.getters.valorTotalCarrinho | dinheiro }}
                </span>
            </div>
        
        </div>

    </div>

</template>

<script>
import MenuMainSmall from './home/MenuMainSmall.vue'

export default {
    
    components: { MenuMainSmall },

    computed: {

        valorTotalCarrinho() {

            return this.$store.getters.valorTotalCarrinho
        },
        qntProdsOnCart() {
            return this.$store.getters.qntProdsOnCart
        }
    },

    methods: {
        chamarMenuDrop() {

            this.$store.state.dinamicClassDrop = 'box_menuDropAfter animate__animated animate__fadeIn'

            this.$store.state.flagDrop = true
            //console.log('drop:',this.$store.state.flagDrop)
        },
        esconderMenuDrop(tempo_ms) {

            //this.dinamicDrop = 'box_menuDropAfter animate__animated animate__fadeOut'
            // o fadeOut é atribuído logo após o fadeIn, no component MenuMain
            
            this.$store.state.dinamicClassDrop = 'box_menuDropAfter animate__animated animate__fadeOut'

            setTimeout( () => {

                this.$store.state.flagDrop = false
                //console.log('drop:',this.$store.state.flagDrop)

            }, tempo_ms);
        },
        chamarPage(rota) {

            this.$router.push(rota)
        },
    }
}
</script>