<style scoped>
    @import url("../sobreNos-style.scss");
</style>

<template>
    <div class="main_page_sobreNos">

        <!-- SMALL SCREEN -->
        <div class="linha1_quemSomos hidden-md-and-up">

            <!-- LINHA 1 (O QUE FAZEMOS)  -->
            <div class="col1_quemSomos-small">

                <div class="col1_int_quemSomos-small">

                    <img class=""
                        :src="require('@/assets/imgBackG2.png')"
                        :style="{
                            'width':'100%',
                            'height': '100%',
                            'border-radius': '250px',
                            'margin':'2%'}" 
                    />

                </div>

                <div class="col2_int_quemSomos-small">

                    <div :style="{'margin-left':'1%'}" class="linha1_int_quemSomos-small">
                        <h1>Quem Somos</h1>
                    </div>

                    <div class="linha2_int_quemSomos-small">
                        <span :style="{'margin-right':'80%', 'margin-left': '12%'}">{{ texto0 }}</span>
                    </div>
                    <div class="linha2_int_quemSomos-small">
                        <span :style="{'margin-left': '12%'}">{{ texto1 }}</span>
                    </div>
                    <div class="linha2_int_quemSomos-small">
                        <span :style="{'margin-left': '12%'}">{{ texto2 }}</span>
                    </div>

                </div>

            </div>

            <!-- LINHA 2 (COMO FAZEMOS)  -->
            <div class="col1_quemSomos-small">

                <div class="col1_int_quemSomos-small">

                    <img class=""
                        :src="require('@/assets/ambG2.png')"
                        :style="{
                            'width':'100%',
                            'height': '100%',
                            'border-radius': '250px',
                            'margin':'2%'}" 
                    />

                </div>

                <div class="col2_int_quemSomos-small">

                    <div :style="{'margin-left':'1%'}" class="linha1_int_quemSomos-small">
                        <h1>O que fazemos</h1>
                    </div>

                    <div class="linha2_int_quemSomos-small">
                        <span :style="{'margin-left': '4%'}">{{ texto3 }}</span>
                    </div>

                </div>

            </div>

            <!-- LINHA 3 (COMO PODEMOS AJUDAR)  -->
            <div class="col1_quemSomos-small">

                <div class="col1_int_quemSomos-small" :style="{'width':'30%'}">

                    <img class=""
                        :src="require('@/assets/balcaoG2.png')"
                        :style="{
                            'width':'100%',
                            'height': '100%',
                            'border-radius': '250px',
                            'margin':'2%'}" 
                    />

                </div>

                <div class="col2_int_quemSomos-small" :style="{'width':'60%'}">

                    <div class="linha1_int_quemSomos-small">
                        <h1 :style="{'margin-left': '8%'}">Como nos encontrar</h1>
                    </div>

                    <div class="linha2_int_quemSomos-small">
                        <span :style="{'margin-left': '1%'}">{{ texto4 }}</span>
                    </div>

                </div>

            </div>

        </div>

        <!-- LARGE SCREEN -->
        <div class="linha1_quemSomos hidden-sm-and-down">

            <!-- LINHA 1 (O QUE FAZEMOS)  -->
            <div class="col1_quemSomos">

                <div class="col1_int_quemSomos">

                    <img class=""
                        :src="require('@/assets/imgBackG2.png')"
                        :style="{
                            'width':'100%',
                            'height': '100%',
                            'border-radius': '250px',
                            'margin':'2%'}" 
                    />

                </div>

                <div class="col2_int_quemSomos hidden-sm-and-down">

                    <div :style="{'margin-left':'12%'}" class="linha1_int_quemSomos">
                        <h1>Quem Somos</h1>
                    </div>

                    <div class="linha2_int_quemSomos">
                        <span :style="{'margin-right':'80%', 'margin-left': '12%'}">{{ texto0 }}</span>
                    </div>
                    <div class="linha2_int_quemSomos">
                        <span :style="{'margin-left': '12%'}">{{ texto1 }}</span>
                    </div>
                    <div class="linha2_int_quemSomos">
                        <span :style="{'margin-left': '12%'}">{{ texto2 }}</span>
                    </div>

                </div>

            </div>

            <!-- LINHA 2 (COMO FAZEMOS)  -->
            <div class="col1_quemSomos">

                <div class="col2_int_quemSomos hidden-sm-and-down">

                    <div :style="{'margin-left':'4%'}" class="linha1_int_quemSomos">
                        <h1>O que fazemos</h1>
                    </div>

                    <div class="linha2_int_quemSomos">
                        <span :style="{'margin-left': '4%'}">{{ texto3 }}</span>
                    </div>

                </div>

                <div class="col1_int_quemSomos">

                    <img class=""
                        :src="require('@/assets/ambG2.png')"
                        :style="{
                            'width':'100%',
                            'height': '100%',
                            'border-radius': '250px',
                            'margin':'2%'}" 
                    />

                </div>

            </div>

            <!-- LINHA 3 (COMO PODEMOS AJUDAR)  -->
            <div class="col1_quemSomos">

                <div class="col1_int_quemSomos" :style="{'width':'30%'}">

                    <img class=""
                        :src="require('@/assets/balcaoG2.png')"
                        :style="{
                            'width':'100%',
                            'height': '100%',
                            'border-radius': '250px',
                            'margin':'2%'}" 
                    />

                </div>

                <div class="col2_int_quemSomos hidden-sm-and-down" :style="{'width':'60%'}">

                    <div class="linha1_int_quemSomos">
                        <h1>Como nos encontrar</h1>
                    </div>

                    <div class="linha2_int_quemSomos">
                        <span :style="{'margin-left': '4%'}">{{ texto4 }}</span>
                    </div>

                </div>

            </div>

        </div>

        <LastLineQuemSomos class="hidden-sm-and-down" />
    </div>
</template>

<script>
import LastLineQuemSomos from './LastLineQuemSomos'

export default {

    data(){
        return {
            texto0: 'Olá!',
            texto1: 'Somos a primeira hempshop de cannabis medicinal da cidade da Covilhã. Nascemos das dificuldades da pandemia, trazendo, com as novas mudanças, uma forma alternativa de pensamento e serviço, com produtos de base canábica e um ambiente que nos permite lembrar que ainda estamos juntos e podemos conviver felizes. A cultura underground ainda vive nos nossos corações!',
            texto2: 'Lutamos todos os dias para quebrar os tabus da sociedade moderna e trazer de volta a visão da antiga humanidade sobre os grandes benefícios da cannabis industrial, medicial e recreativa.',
            texto3: 'Procuramos trazer todas as inovações em produtos disponíveis no nosso mercado, buscando sempre trocar ideias com clientes e amigos para proporcionar a melhor experiência possível na nossa loja. Queremos ser a inovação no interior e expandir as ideias da comunidade portuguesa. Apoiamos e incentivamos todos os tipos de eventos e exibições de arte e cultura, sem distinção de raça, cor, gênero ou qualquer outra forma de preconceito e discriminação.',
            texto4: 'Estamos localizados na cidade da Covilhã, na região do Pelourinho, na Rua da Olivença nº 54, 6200-156, Portugal. Também é possível pedir nossos produtos através do serviço de delivery, disponível para Covilhã, ou pelas opções de entregas, para Portugal continental e ilhas.',
        }
    },

    components: {
        LastLineQuemSomos
    },

    methods: {
        
        verifMenuDrop() {

            this.$store.state.auth_router = true // liberar menu drop.

            //window.scrollY = 0 // reposicionar scroll
            window.scrollTo(0,0)
            //console.log(window.scrollY)
        }
    },

    created() {
        this.verifMenuDrop();
    }
}
</script>