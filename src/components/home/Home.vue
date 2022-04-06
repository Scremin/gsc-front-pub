<style scoped>
    @import url("../../styles/homeStyle/home.scss");
</style>

<template>

    <div class="box_home">

        <MenuDropAfter />
        
        <LineCarousel />

        <ParallaxHome />

        <!--<VideoHome />-->
        
        <LastLineHome />

    </div>

</template>

<script>
import MenuDropAfter from './MenuDropAfter.vue'
import LineCarousel from './LineCarousel.vue'
import ParallaxHome from './ParallaxHome.vue'
//import VideoHome from './VideoHome.vue'
import LastLineHome from './LastLineHome.vue'

export default {

    components: { MenuDropAfter, LineCarousel, ParallaxHome,/* VideoHome,*/ LastLineHome },

    data() {
        return {

            elemsCateg: [

            {idC:0,img:require('../../assets/imgs/bock.png'),titCateg:'Bebidas'},
            {idC:1,img:require('../../assets/imgs/cn.jpg'),titCateg:'Flores'}

            ],

            // test lista de produtos (simulação de db)
            /*prodLi: [[
                {
                    idC: 0,
                    idP: 0,
                    img:require('../../assets/imgs/bock.png'),
                    tit:'Super Bock 33cl',
                    desc:'A cerveja mais gelada da cidade.',
                    optionsLi: [''],
                    setoptionsProd: '',
                    pr: 0.99,
                }
            ],
            [
                {
                    idC: 1,
                    idP: 0,
                    img:require('../../assets/imgs/c3.jpg'),
                    tit:'Flor AA',
                    desc:'Teste de descrição para a flor AA da categoria flores. Existem 2 opções, 1g e 3g.',
                    optionsLi: ['1g','3g'],
                    setoptionsProd: '',
                    pr: 3.5,
                },
                {
                    idC: 1,
                    idP: 1,
                    img:require('../../assets/imgs/cf.jpg'),
                    tit:'Flor BB',
                    desc:'Teste de descrição para a flor BB da categoria flores.',
                    optionsLi: [''],
                    setoptionsProd: '',
                    pr: 5,
                },
                {
                    idC: 1,
                    idP: 2,
                    img:require('../../assets/imgs/cn.jpg'),
                    tit:'Flor CC - teste de nome grande esticadoo',
                    desc:'Teste de descrição para a flor CC da categoria flores. Existem 2 opções, azul e vermelho.',
                    optionsLi: ['Azul','Vermelho'],
                    setoptionsProd: '',
                    pr: 10.99,
                }
            ]
            ]*/
        }
    },

    mounted () {

        this.$store.commit('updateContentApp') // without param. Initial main GET Req.
        this.$store.commit('updateStatusLoja') // without param. Initial main GET Req.
        
        // pré-preenchimento das taxas de entrega.
        this.$store.commit('updatetxEntrega') // sem param GET Req.
    },
    created () {
        
        window.scrollTo(0,0)

        // -- STORAGE
        var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))
        //console.log(trafegoLocal)
        // ---- STORAGE INIT
        if (trafegoLocal == null) {

            var update_trafegoLocal = {

                storedOverLay:this.$store.state.statusOverLay,
                storedUserLogado: false, // bool <--- update
                storedDateUser: {}, // {} <---------- update
                storedPddListUser: [], // [] <------- update
                storedCarrinho: [], // [] <---------- update
                storageElemsCateg: {}, // {} <------- update (init from db)
                storedPddListGeral: {} // [] <------- update (init from db)
            }

            localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))
        }
    }
}
</script>