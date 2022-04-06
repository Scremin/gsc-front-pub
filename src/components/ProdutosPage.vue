<style scoped>
    @import url("../cardForm.scss");
</style>

<template>
    <div>
        <div class="products">
            <v-container>
                <div v-for="carac in elementos" :key="carac.index" class="panelProducts">

                    <div class="task-grid">

                        <img src="carac.pic" style="width:50%" class="task-in" />

                        <div class="task-in">

                            <div class="into-task">
                                <p class="primeiro-i-t">titulo</p>
                            </div>

                            <div class="into-task">

                                <span class="segundo-i-t">
                                    <label>
                                       descricao
                                    </label>
                                </span>
                            </div>

                            <div class="into-task">

                                <span class="terceiro-i-t">
                                    <span class="preco">1.00 €</span>
                                </span>

                                <v-btn class="green white--text terceiro-i-t">
                                    <span class="">ADD</span>
                                </v-btn>

                            </div>
                        </div>
                    </div>

                </div>
            </v-container>
        </div>
    </div>
</template>

<script>
//v-for="carac in conteudo" :key="carac.index"
//{{ carac.preco }}{{ carac.descricao }}{{ carac.titulo }}
export default {
    data() {
        return {
            elementos: [
            {
                titulo: 'JÁ DEBATEU CONOSCO?',
                descricao: "Esse é o primeiro produto",
                preco: "19.99 €",
                pic: require('@/assets/cov1.jpg')
            },
            {
                titulo: 'CONHECE ESTE?',
                descricao: "Esse é o primeiro produto, porém, esse 3º texto é maior. Se eu continuar aumentando talvez fique ainda maior. Talvez eu possa aumentar ainda mais.",
                preco: "19.99 €",
                pic: require('@/assets/cov1.jpg')
            },
            {
                titulo: 'JÁ DEBATEU CONOSCO?',
                descricao: "Esse é o primeiro produto",
                preco: "19.99 €",
                pic: require('@/assets/cov1.jpg')
            },
            {
                titulo: 'JÁ DEBATEU CONOSCO?',
                descricao: "Esse é o primeiro produto",
                preco: "19.99 €",
                pic: require('@/assets/cov1.jpg')
            },
            {
                titulo: 'DEBATE NA COVILHÃ?',
                descricao: "Esse é o primeiro produto",
                preco: "19.99 €",
                pic: require('@/assets/cov1.jpg')
            }]
        }
    }
}
</script>