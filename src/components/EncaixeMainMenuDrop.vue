<style scoped>
    @import url("../encaixeMenu-style.scss");
</style>

<template>

    <div class="main_encaixe">

        <div @mouseleave="RecolherMenu()" class="main_linha">

            <!-- Lista de categorias no menu, caso comece na main page -->
            <div class="col_encaixe" v-if="geralLiCateg.length > 0">

                <div class="elem1_col">
                    <span class="elem1_col_int">LOJA COVILHÃ</span>
                </div>

                <div
                    class="elem2_col luzHover" 
                    v-for="categ in geralLiCateg" :key="categ.index">

                    <span 
                    class="elem2_col_int"
                    @click="chamarListaProdA(categ.id_categ)"
                    >
                        {{ categ.nome_categ }}
                    </span>

                </div>
            </div>

            <!-- Lista de categorias no menu, caso NÃO comece na main page -->
            <div class="col_encaixe" v-if="geralLiCateg.length == 0">

                <div class="elem1_col">
                    <span class="elem1_col_int">LOJA COVILHÃ</span>
                </div>

                <div class="elem2_col luzHover">

                    <span class="elem2_col_int"
                    @click="chamarLCategPage(0)"
                    >
                        Ver
                    </span>
                </div>
            </div>

            <div class="col2_encaixe">
                <div class="elem1_col2">
                    <span class="elem1_col2_int">ENVIO NACIONAL</span>
                </div>

                <div class="elem2_col2">
                    <span 
                    class="elem2_col2_int"
                    @mouseover="hoverC2a = true"
                    @mouseleave="hoverC2a = false"
                    :class="{ active: hoverC2a }"
                    @click="chamarLCategPage(1)"
                    >
                    Ver</span>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
//import axios from 'axios'

export default {
    data() {
        return {
            // COLUNA 1
            hoverM1: false,
            hoverM2: false,
            hoverM3: false,
            hoverM4: false,
            hoverC1a: false,
            hoverC1b: false,
            hoverC1c: false,
            // COLUNA 2
            hoverC2a: false,
        }
    },
    computed: {
        AlreadyOnPage() {
            return this.$store.state.AlreadyOnPage // flag de contra duplicação de chamada.
        },
        geralLiCateg() {
            return this.$store.state.geralLiCateg // lista de categorias para o drop menu
        },
        auth_router() {
            return this.$store.state.auth_router // auth drop menu
        },
    },
    methods: {
        RecolherMenu() {
            //console.log('estou no recolhedor')

            this.menuChange = true

            this.$store.state.changeMenuDrop = false
        },
        chamarListaProdA(idCategoria) { // única func sendo utilizada 26/6/21

            this.RecolherMenu()

            //console.log(idCategoria)

            this.$store.state.categSelected = idCategoria
            this.$store.state.active_tab = 1 // Habilitar tab "compras"

            this.$store.state.auth_router = false // se estiver => block auth
            this.$store.state.changeMenuDrop = false // forçar recolha do menu
            this.$router.push('/ProdutoPage')

            /*const self = this

            // Compartilhar id da categ selecionada.
            axios.post(`https://castarcms.club/api/post_call_categ_by_id`, {

                idC: idCategoria
            
            }).then(() => {

                self.$store.state.active_tab = 1 // Habilitar tab "compras"

                //console.log(res);
                self.$store.state.auth_router = false // se estiver => block auth
                self.$store.state.changeMenuDrop = false // forçar recolha do menu
                self.$router.push('/ProdutoPage')
                //
            });*/

        },
        verifAuthRouter() { // chamada quando inicia.

            //console.log(this.$router)
            //console.log(this.$router.history.current.path)
            //console.log(this.$store.state.auth_router)

            // Verificar se está na página de produtos.
            if(this.$router.history.current.path == '/ProdutoPage') {
                
                this.$store.state.auth_router = false // se estiver => block auth
            }
            else{
                this.$store.state.auth_router = true
            }
        },
        chamarLCategPage(bin_gat) {

            this.RecolherMenu()

            this.$store.state.gatBebidas = bin_gat // 1, SE vier do envio nacional.

            this.$store.state.active_tab = 1 // Habilitar tab "compras"
            
            this.$router.push('/MinhasCompras')
        },
    },
    created() {
        this.verifAuthRouter();
    }
}
</script>