<style scoped>
    @import url("../../styles/quemSomosStyle/painelQuemSomos.scss");
</style>

<template>

    <div class="box_painelQuemSomos">

        <!--<v-parallax :style="{'margin-top':'50px'}"
        height="100"
        :src="require('../../assets/imgs/imgBackG2.png')">
        </v-parallax>-->
        
        <!-- SMALL sob v-for -->
        <ElQuemSomos v-for="(el_small,k) in el_quemSomos" :key="k"
        :el_quemSomos_img="el_small.img"
        :el_quemSomos_tit="el_small.tit"
        :el_quemSomos_texto="el_small.texto"
        class="hidden-md-and-up" 
        :style="{'flex-direction':'column'}" 
        />

        <!-- LARGE indv -->
        <ElQuemSomos
        class="hidden-sm-and-down" 
        :el_quemSomos_img="el_quemSomos[0].img"
        :el_quemSomos_tit="el_quemSomos[0].tit"
        :el_quemSomos_texto="el_quemSomos[0].texto"
        />
        <!-- LARGE indv -->
        <ElQuemSomos :style="{'flex-direction':'row-reverse'}" 
        class="hidden-sm-and-down" 
        :el_quemSomos_img="el_quemSomos[1].img"
        :el_quemSomos_tit="el_quemSomos[1].tit"
        :el_quemSomos_texto="el_quemSomos[1].texto"
        />
        <!-- LARGE indv -->
        <ElQuemSomos
        class="hidden-sm-and-down" 
        :el_quemSomos_img="el_quemSomos[2].img"
        :el_quemSomos_tit="el_quemSomos[2].tit"
        :el_quemSomos_texto="el_quemSomos[2].texto"
        />

    </div>

</template>

<script>
import ElQuemSomos from './ElQuemSomos.vue'

export default {

    components: { ElQuemSomos },

    data() {
        return {
            el_quemSomos: [
                {
                    img:require('../../assets/imgs/imgBackG2.png'),
                    tit:'Sobre nós',
                    texto: 'Somos a primeira hempshop de cannabis medicinal da cidade da Covilhã. Nascemos das dificuldades da pandemia, trazendo, com as novas mudanças, uma forma alternativa de pensamento e serviço, com produtos de base canábica e um ambiente que nos permite lembrar que ainda estamos juntos e podemos conviver felizes. A cultura underground ainda vive nos nossos corações!',
                },
                {
                    img:require('../../assets/imgs/ambG2.png'),
                    tit:'O que fazemos',
                    texto: 'Lutamos todos os dias para quebrar os tabus da sociedade moderna e trazer de volta a visão da antiga humanidade sobre os grandes benefícios da cannabis industrial, medicial e recreativa. Procuramos trazer todas as inovações em produtos disponíveis no nosso mercado, buscando sempre trocar ideias com clientes e amigos para proporcionar a melhor experiência possível na nossa loja. Queremos ser a inovação no interior e expandir as ideias da comunidade portuguesa. Apoiamos e incentivamos todos os tipos de eventos e exibições de arte e cultura, sem distinção de raça, cor, gênero ou qualquer outra forma de preconceito e discriminação.',
                },
                /*{
                    img:require('../../assets/imgs/imgBackG2.png'),
                    tit:'O que fazemos',
                    texto: 'Procuramos trazer todas as inovações em produtos disponíveis no nosso mercado, buscando sempre trocar ideias com clientes e amigos para proporcionar a melhor experiência possível na nossa loja. Queremos ser a inovação no interior e expandir as ideias da comunidade portuguesa. Apoiamos e incentivamos todos os tipos de eventos e exibições de arte e cultura, sem distinção de raça, cor, gênero ou qualquer outra forma de preconceito e discriminação.',
                },*/
                {
                    img:require('../../assets/imgs/balcaoG2.png'),
                    tit:'Como nos encontrar',
                    texto: 'Estamos localizados na cidade da Covilhã, na região do Pelourinho, na Rua da Olivença nº 54, 6200-156, Portugal. Também é possível pedir nossos produtos através do serviço de delivery, disponível para Covilhã, ou pelas opções de entregas, para Portugal continental e ilhas.',
                },
            ]
        }
    }
}
</script>