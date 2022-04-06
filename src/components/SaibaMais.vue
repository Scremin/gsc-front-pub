<style scoped>
    @import url("../saiba-mais-style.scss");
</style>

<template>
    <div :style="{'height': altura}" class="main_mais">

        <!-- página 1 -->
        <div v-if="clicada1" class="clicada">

            <div class="sup">

                <div class="ft">
                    <v-img
                        :style="{'border-radius':'18px'}"
                        :src="require('../assets/histcan.jpg')"
                    />
                    <v-btn @click="voltarSaibaMais()" class=""
                    :style="{
                            
                        'box-shadow': '0 2px 10px rgba(121, 174, 64, 1)',
                        'border-radius': '18px',
                        'padding': '2%',
                        'width': '10%',
                        'height':'50px',
                        'font-size':'1.5rem',
                        'margin-left':'10%',
                        'color': 'rgb(168, 243, 15)'
                        }"
                    >
                        >
                    </v-btn>
                </div>

                <div class="titulo">
                    História da Cannabis
                </div>

                <!-- Região do texto -->
                <div class="tx">

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_hist_1 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_hist_2 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_hist_3 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_hist_4 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_hist_5 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_hist_6 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_hist_7 }}
                    </div>

                    <v-btn @click="voltarSaibaMais()" class="elem_tx"
                    :style="{
                            
                        'box-shadow': '0 2px 10px rgba(121, 174, 64, 1)',
                        'border-radius': '18px',
                        'padding': '2%',
                        'width': '20%',
                        'height':'50px',
                        'color': 'rgb(168, 243, 15)'
                        }"
                    >
                        Voltar
                    </v-btn>
                </div>

            </div>

        </div>
        
        <!-- página 2 -->
        <div v-if="clicada2" class="clicada">

            <div class="sup">

                <div class="ft">
                    <v-img
                        :style="{'border-radius':'18px'}"
                        :src="require('../assets/medcan.jpeg')"
                    />
                    <v-btn @click="voltarSaibaMais()" class=""
                    :style="{
                            
                        'box-shadow': '0 2px 10px rgba(121, 174, 64, 1)',
                        'border-radius': '18px',
                        'padding': '2%',
                        'width': '10%',
                        'height':'50px',
                        'font-size':'1.5rem',
                        'margin-left':'10%',
                        'color': 'rgb(168, 243, 15)'
                        }"
                    >
                        >
                    </v-btn>
                </div>

                <div class="titulo">
                    Cannabis no uso medicinal
                </div>
                
                <div class="tx">

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_1 }}
                    </div>

                    <!-- , 'margin-left': '-12%' encaixa à esquerda -->
                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_2 }}
                    </div>

                    <div :style="{'font-weight':'bold'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_3 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_4 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_5 }}
                    </div>

                    <div :style="{'font-weight':'bold'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_6 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_7 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_8 }}
                    </div>

                    <div :style="{'font-weight':'bold'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_9 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_10 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_11 }}
                    </div>

                    <div :style="{ 'font-weight':'bold'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_12 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_13 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_14 }}
                    </div>

                    <div :style="{'font-weight':'bold'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_15 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_16 }}
                    </div>

                    <div  class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_17 }}
                    </div>

                    <div :style="{ 'font-weight':'bold'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_18 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_19 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_med_20 }}
                    </div>

                    <v-btn @click="voltarSaibaMais()" class="elem_tx"
                    :style="{
                            
                        'box-shadow': '0 2px 10px rgba(121, 174, 64, 1)',
                        'border-radius': '18px',
                        'padding': '2%',
                        'width': '20%',
                        'height':'50px',
                        'color': 'rgb(168, 243, 15)'
                        }"
                    >
                        Voltar
                    </v-btn>

                </div>

            </div>

        </div>
 
        <!-- página 3 -->
        <div v-if="clicada3" class="clicada">

            <div class="sup">

                <div class="ft">
                    <v-img
                        :style="{'border-radius':'18px', 'max-height':'250px'}"
                        :src="require('../assets/induscan.jpg')"
                    />
                    <v-btn @click="voltarSaibaMais()" class=""
                    :style="{
                            
                        'box-shadow': '0 2px 10px rgba(121, 174, 64, 1)',
                        'border-radius': '18px',
                        'padding': '2%',
                        'width': '10%',
                        'height':'50px',
                        'font-size':'1.5rem',
                        'margin-left':'10%',
                        'color': 'rgb(168, 243, 15)'
                        }"
                    >
                        >
                    </v-btn>
                </div>

                <div class="titulo">
                    Cannabis no uso Industrial
                </div>
                
                <div class="tx">

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_indus_1 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_indus_2 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_indus_3 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_indus_4 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_indus_5 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_indus_6 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_indus_7 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_indus_8 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_indus_9 }}
                    </div>

                    <v-btn @click="voltarSaibaMais()" class="elem_tx"
                    :style="{
                            
                        'box-shadow': '0 2px 10px rgba(121, 174, 64, 1)',
                        'border-radius': '18px',
                        'padding': '2%',
                        'width': '20%',
                        'height':'50px',
                        'color': 'rgb(168, 243, 15)'
                        }"
                    >
                        Voltar
                    </v-btn>
                </div>

            </div>

        </div>

        <!-- página 4 -->
        <div v-if="clicada4" class="clicada">

            <div class="sup">

                <div class="ft">
                    <v-img
                        :style="{'border-radius':'18px', 'max-height':'250px'}"
                        :src="require('../assets/recrecan.jpg')"
                    />
                    <v-btn @click="voltarSaibaMais()" class=""
                    :style="{
                            
                        'box-shadow': '0 2px 10px rgba(121, 174, 64, 1)',
                        'border-radius': '18px',
                        'padding': '2%',
                        'width': '10%',
                        'height':'50px',
                        'font-size':'1.5rem',
                        'margin-left':'10%',
                        'color': 'rgb(168, 243, 15)'
                        }"
                    >
                        >
                    </v-btn>
                </div>

                <div class="titulo">
                    <span>Cannabis no uso Recreativo</span>
                </div>

                <div class="tx">

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_1 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_2 }}
                    </div>

                    <div :style="{ width: '50%'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_3 }}
                    </div>

                    <div :style="{ width: '50%'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_4 }}
                    </div>

                    <div :style="{ width: '50%'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_5 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_6 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_7 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_8 }}
                    </div>

                    <div :style="{ 'font-weight':'bold'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_9 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_10 }}
                    </div>

                    <div :style="{'font-weight':'bold'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_11 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_12 }}
                    </div>

                    <div :style="{ 'font-weight':'bold'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_13 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_14 }}
                    </div>

                    <div :style="{ 'font-weight':'bold'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_15 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_16 }}
                    </div>

                    <div :style="{  'font-weight':'bold'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_17 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_18 }}
                    </div>

                    <div :style="{'font-weight':'bold'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_19 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_20 }}
                    </div>

                    <div :style="{ 'font-weight':'bold'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_21 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_22 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_23 }}
                    </div>

                    <div :style="{ 'font-weight':'bold'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_24 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_25 }}
                    </div>

                    <div :style="{ 'font-weight':'bold'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_26 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_27 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_28 }}
                    </div>

                    <div :style="{ 'font-weight':'bold'}" class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_29 }}
                    </div>

                    <div class="elem_tx txHover animate__animated animate__flash">
                        {{ tx_recr_30 }}
                    </div>

                    <v-btn @click="voltarSaibaMais()" class="elem_tx"
                    :style="{
                            
                        'box-shadow': '0 2px 10px rgba(121, 174, 64, 1)',
                        'border-radius': '18px',
                        'padding': '2%',
                        'width': '20%',
                        'height':'50px',
                        'color': 'rgb(168, 243, 15)'
                        }"
                    >
                        Voltar
                    </v-btn>
                </div>

            </div>

        </div>

        <!-- componente items saiba mais -->
        <div v-if="gatSaibaPeq" class="hidden-md-and-up">
            <SaibaPeq @funcCall="selcTroca($event)" />
        </div>

        <div v-if="entradaInicial1" class="colunas hidden-sm-and-down">
            
            <div class="elem_por_coluna">
                
                <div class="por_cima_do_elem shadowHover animate__animated animate__flash">

                    <v-img @click="troca1()"
                        :style="{'border-radius':'200px'}"
                        :src="require('../assets/histcan.jpg')"
                    />

                </div>

                <div class="abaixo_do_elem">
                    <span class="text_abaixo">História da Cannabis</span>
                </div>

            </div>

        </div>

        <div v-if="entradaInicial2" class="colunas hidden-sm-and-down">
            
            <div class="elem_por_coluna">
                
                <div class="por_cima_do_elem shadowHover animate__animated animate__flash">

                    <v-img @click="troca2()"
                        :style="{'border-radius':'200px'}"
                        :src="require('../assets/medcan.jpeg')"
                    />

                </div>

                <div class="abaixo_do_elem">
                    <span class="text_abaixo">Uso medicinal</span>
                </div>

            </div>

        </div>

        <div v-if="entradaInicial3" class="colunas hidden-sm-and-down">
            
            <div class="elem_por_coluna">
                
                <div class="por_cima_do_elem shadowHover animate__animated animate__flash">

                    <v-img @click="troca3()"
                        :style="{'border-radius':'200px'}"
                        :src="require('../assets/induscan.jpg')"
                    />

                </div>

                <div class="abaixo_do_elem">
                    <span class="text_abaixo">Uso industrial</span>
                </div>

            </div>

        </div>

        <div v-if="entradaInicial4" class="colunas hidden-sm-and-down">
            
            <div class="elem_por_coluna">
                
                <div class="por_cima_do_elem shadowHover animate__animated animate__flash">

                    <v-img @click="troca4()"
                        :style="{'border-radius':'200px'}"
                        :src="require('../assets/recrecan.jpg')"
                    />

                </div>

                <div class="abaixo_do_elem">
                    <span class="text_abaixo">Uso recreativo</span>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import SaibaPeq from './SaibaPeq.vue'

export default {
    components: { SaibaPeq },
    data(){
        return {
            // tamanho da página.
            altura: '1000px',
            //
            clicada1: false, // historia da cannabis
            clicada2: false, //
            clicada3: false, // 
            clicada4: false, //
            // "gambiarra" de sincronia.
            entradaInicial1: true,
            entradaInicial2: true,
            entradaInicial3: true,
            entradaInicial4: true,
            // Ativador página pequena.
            gatSaibaPeq: true,
            //
            tx_hist_1: 'A cannabis foi uma das primeiras plantas cultivadas pelo Homem. A planta do cânhamo, Cannabis sativa, oriunda das regiões temperadas e tropicais, foi utilizada há 12000 anos como fonte de fibras para a fabricação de tecidos e cordoaria, pelos povos gregos, chineses e romanos, a partir do seu caule, dada a sua grande resistência. Além disso, os benefícios medicinais, nutricionais e combustíveis da planta já eram conhecidos por sociedades antigas da Índia e da Arábia.',
            tx_hist_2: 'Entre os anos de 1000 a.C. até meados do século XIX, a maconha e o cânhamo produziam a maior parte dos papéis, combustíveis e artigos têxteis. Sua grande importância histórica se deve não apenas ao fato do cânhamo ter a fibra natural mais resistente e forte do que todas as outras, mas por sua facilidade de cultivo em praticamente qualquer tipo de solo.',
            tx_hist_3: 'A primeira referência encontrada relativa à utilização terapêutica da planta data de 2700 a.C. e está presente na farmacopeia do Imperador chinês Shen-Nung, em que era recomendada no tratamento da malária, de dores reumáticas e nos ciclos menstruais irregulares e dolorosos.',
            tx_hist_4: 'O livro “De Matéria Médica”, escrito pelo médico Pedânio Dioscórides, considerado o fundador da farmacologia, traz a Cannabis como uma das substâncias naturais com propriedades analgésicas. Na obra, ela é atribuída à melhora de dores articulares e inflamações.',
            tx_hist_5: 'Na Grécia, Hipócrates (460 a.C- 377 a.C) adotou a planta como terapia associada a dietas, bebidas alcoólicas e medicamentos. A partir deste ponto, o imperador Romano Nero passou a admirar a planta por suas propriedades medicinais, e estipular padrões de pesquisa da Cannabis sativa.',
            tx_hist_6: 'Na atualidade, a cannabis foi classificada, no ano de 1961, como uma substância com ”propriedades particularmente perigosas e praticamente sem valor terapêutico pela Convenção Única de Entorpecentes. Desde então, cada vez mais países têm mostrado seu desconforto com as restrições do regime do tratado e recorrido à deserção suave ao estender sua flexibilidade jurídica a limites, por vezes, questionáveis. A realidade política de hoje, com os mercados regulares de maconha no Uruguai, em Washington e no Colorado, está em conflito com as convenções da ONU e coloca em discussão as opções para reformar o regime mundial de controle de drogas. Agora que as rachaduras no consenso de Viena chegaram ao extremo da violação do tratado, este debate não é mais uma mera fantasia reformista. Opções fáceis, entretanto, não existem; todos os caminhos envolvem dificuldades processuais e obstáculos políticos.',
            tx_hist_7: 'Existem boas razões para questionar o modelo de proibição que os tratados impõem ao controle da cannabis. A inclusão original da cannabis no quadro atual não é apenas o resultado de procedimentos duvidosos, mas aumentou muito o conhecimento sobre a própria droga, sobre a dinâmica dos mercados ilícitos e as consequências não intencionais de estratégias repressivas de controle de substâncias. O modelo proibitivo falhou em ter um impacto sustentado na redução do mercado, mas colocou uma carga significativa nos sistemas de justiça criminal, causou reflexos profundamente negativos na sociedade e na saúde pública e criou redes criminosas formentadoras do crime organizado, da violência e da corrupção.',
            //
            tx_med_1: 'Um dos grandes desafios da Química Farmacêutica prende-se à obtenção de estruturas químicas novas que servirão como base para novos agentes terapêuticos. Durante muito tempo, as plantas foram quase exclusivas na terapia disponível para o homem. A utilização terapêutica da Cannabis sativa ou dos seus derivados é conhecida há muitos anos; no entanto, o estudo das suas propriedades, dos seus análogos, dos recetores canabinóides (CB1 e CB2) e das enzimas envolvidas no seu metabolismo é muito recente. Após a descoberta dos canabinóides endógenos, os estudos científicos focaram-se na investigação do seu potencial clínico.',
            tx_med_2: 'Segundo estudos feitos no artigo CANNABIS SATIVA: POTENCIAL TERAPÊUTICO, a cannabis pode ser usada para:',
            tx_med_3: 'ESQUIZOFRENIA',
            tx_med_4: 'O termo psicose é o nome dado a um estado mental patológico caracterizado pela perda de contato do indivíduo com a realidade, o qual passa a apresentar um comportamento antissocial. Dentre as psicoses funcionais, a mais importante é a esquizofrenia, a qual é definida como uma psicopatologia crônica de origem desconhecida e que se apresenta como um misto de sintomas de doenças diferentes se manifestando concomitantemente. São eles: mudança de comportamento abrupto (comportamento ambíguo), isolamento social e alteração de afeto.',
            tx_med_5: 'Crippa e colaboradores (2010) realizaram o estudo de seis pacientes com diagnóstico de esquizofrenia, durante três meses, onde foi administrada a dose de canabidiol (CBD) de 150 mg/dia durante quatro semanas, além do tratamento diário de cada paciente. Foi observado que com o uso do canabidiol (CBD) os sintomas psicóticos e motores foram reduzidos significativamente.',
            tx_med_6: 'EPILEPSIA',
            tx_med_7: 'A epilepsia é um distúrbio neurológico caracterizado pela atividade neuronal excessiva e hipersincrônica, o qual tem como característica principal a convulsão ou crise convulsiva.',
            tx_med_8: 'Nos últimos anos, o interesse científico sobre o uso terapêutico da Cannabis no tratamento de epilepsia em crianças vem crescendo. Pesquisadores acreditam que os efeitos adversos são quase nulos. Estudos realizados in vitro e em animais mostram que o canabidiol (CBD) é um antiepilético eficaz. Além disso, estudos clínicos feitos por Carlini et al (2001) também comprovam a eficácia do canabidiol no tratamento da convulsão.',
            tx_med_9: 'ARTRITE REUMATÓIDE',
            tx_med_10: 'É uma doença autoimune com etiologia desconhecida caracterizada pela deformidade e a destruição das articulações e das cartilagens. Afeta mulheres duas vezes mais do que homens e sua prevalência aumenta com a idade. Tem como sintomas a rigidez da articulação acometida, fadiga e emagrecimento.',
            tx_med_11: 'Foi realizado um estudo no Reino Unido em pacientes com artrite reumatóide comparando o medicamento Sativex (∆ 9 -THC+CBD) e placebo (sem efeito farmacológico), em forma de spray, aplicado pelo próprio paciente, durante 5 a 6 vez ao dia. Notou-se que as dores causadas pela doença tinham diminuído de forma significativa com a administração do Sativex quando comparado com o placebo. Numa escala de 0 a 100 para a dor, o placebo ficou na média de 60 e com o Sativex ficou na média de 33 e 48 e sem efeitos colaterais . Este estudo demonstra que o canabidiol tem efeito sobre a resposta imune celular e a produção de mediadores da inflamação e, portanto, pode ser uma alternativa importante no tratamento de doenças inflamatórias, que incluem a artrite reumatóide.',
            tx_med_12: 'DOENÇA DE PARKINSON',
            tx_med_13: 'É uma doença neurodegenerativa que geralmente afeta pessoas com mais de 55 anos. Esta doença está relacionada com a morte dos neurônios dopaminérgicos da substância negra, a qual está localizada no mesencéfalo e regula o circuito dos núcleos da base, importante no controle do movimento. Os sintomas típicos da doença incluem tremores, rigidez da musculatura esquelética, postura inclinada, expressão facial como uma máscara e outros sinais neurológicos.',
            tx_med_14: 'Apesar de haver pouco estudo na literatura sobre o tratamento da doença de Parkinson, pesquisas recentes revelam um efeito terapêutico do canabidiol nesta patologia. Estudos realizados por Simões (2011) e Torrão e colaboradores (2013) constatam que a relação da doença de Parkinson com os canabinóides está na neuroproteção, ou seja, as propriedades antioxidantes do canabidiol podem fornecer proteção contra a degeneração progressiva dos neurônios dopaminérgicos da região nigro-estriatal, característica da doença de Parkinson.',
            tx_med_15: 'DOENÇA DE ALZHEIMER',
            tx_med_16: 'É uma patologia que causa demência e está relacionada com o envelhecimento cerebral, causando a perda de neurônios, principalmente do hipocampo e do prosencéfalo basal, devido ao depósito de placas senis (formadas por peptídeo β-amiloide (βA)) e de emaranhados neurofibrilares no cérebro.',
            tx_med_17: 'Atualmente, é reconhecido que o canabidiol (CBD) é um potente antioxidante, característica que, de acordo com estudos, confere à substância efeitos protetores. No Mal de Alzheimer, o canabidiol desempenha função neuroprotetora, assim como na doença de Parkinson.',
            tx_med_18: 'ANSIEDADE E DEPRESSÃO',
            tx_med_19: 'A ansiedade é considerada uma emoção semelhante ao medo. Porém, o medo é uma consequência de uma situação definida; na ansiedade, a fonte do perigo é incerta ou desconhecida. Foi realizado um estudo em humanos saudáveis com o CBD (via oral, inalatória ou endovenosa), em um procedimento de simulação do falar em público (SFP), onde foram comparados o canabidiol (300mg), o placebo e dois ansiolíticos, o diazepem (10mg) e a ipsapirona (5mg), num procedimento duplo cego. A pesquisa relatou que tanto o canabidiol (CBD) como os dois ansiolíticos diminuíram a ansiedade induzida pela simulação do falar em público (SFP) sem efeitos colaterais significativos.',
            tx_med_20: 'Alguns debates no meio acadêmico também sugerem que o substrato da Cannabis sativa tem potencial terapêutico sintomático em doenças consultivas como AIDS, câncer, glaucoma e diabetes.',
            //
            tx_indus_1: 'A preocupação com o futuro do nosso planeta tem aumentado devido à maior consciência dos efeitos que as atividades humanas têm sobre o meio ambiente. Esta consciencialização surgiu após a compreensão que os impactos eram resultado de um processo produtivo a um ritmo elevado de exploração e degradação dos recursos naturais.',
            tx_indus_2: 'Esse aumento descontrolado do consumo dos recursos e materiais disponíveis na natureza está relacionado com o rápido crescimento da população e com a procura de melhor qualidade de vida. A indústria da construção é um dos maiores consumidores de recursos naturais. Este setor é responsável por vários impactos ambientais, alguns deles resultantes do consumo excessivo de água, das elevadas emissões de CO2, da produção de resíduos e do consumo não controlado de recursos naturais não renováveis, o que culmina na contaminação das águas, do solo e do ar, desflorestação e desaparecimento de espécies animais e vegetais.',
            tx_indus_3: 'Posto isto, segundo estudos feitos no artigo “O Cânhamo como material de construção: Viabilidade e Oportunidade”, o cânhamo poderá, perfeitamente, ser uma alternativa ecológica a diversos materiai, utilizados hoje em dia em vários setores industriais, como, por exemplo, na indústria têxtil, para a produção de tecidos, na indústria alimentar, com o preparo de diferentes partes da planta, na indústria automobilística, na parte de construção, como biodiesel e, por fim, pode ainda ser aplicado na construção civil de variadas maneiras.',
            tx_indus_4: 'Portugal está a dar os seus primeiros passos na investigação de novos materiais não convencionais que habitualmente não são aplicados na construção corrente, sendo o cânhamo um destes materiais já estudados neste âmbito.',
            tx_indus_5: 'O cânhamo possui menos de 0,3% de delta 9-tetrahidrocanabinol (THC), substância responsável pelo efeito psicotrópico da planta, tornando a mesma ineficiente para uso recreativo, mas muito rica para outras aplicações industriais.',
            tx_indus_6: 'A planta é altamente resistente a pragas, necessitando de mínimo ou nenhum agrotóxico para seu cultivo, além de ter propriedades regenerativas do solo, sendo utilizada como cultura de rotação para recuperação de solos defasados.',
            tx_indus_7: 'A indústria do óleo de Cannabis (CBD) é atualmente a mais lucrativa por ter amplo uso farmacêutico, alimentício e cosmético segundo a Hemp Business Journal, em 2019. Todavia, o potencial ecológico estende-se para a confeção de bioplásticos e biocombustíveis. Da extração do caule da planta são exploradas aplicações, principalmente, nas indústrias de papel, construção civil (hurd) e têxtil (fibra).',
            tx_indus_8: 'Na indústria automobilística, Ford - considerado o pai da escola clássica da administração - teria utilizado fibras de cânhamo na confeção de um dos carros da marca em 1941. O cânhamo produz cerca de 200% a mais de fibras na mesma quantidade de terra em comparação com o algodão e está pronto para a colheita em apenas 120 dias após ter sido plantado. Além disso, requer 20% menos água que a cultura do algodão. Na China, foi na maior produtora de cânhamo do mundo, responsável por ⅕ da produção global, onde surgiram as primeiras aplicações têxteis datadas ao ano de 207 a.C',
            tx_indus_9: 'Por sua associação com a marijuana recreativa, no ano de 1937 o cânhamo foi proibido nos Estados Unidos da América e sua estigmatização proliferou no ocidente. Acontece que, apesar de serem da mesma família de plantas, o cânhamo não possui propriedades psicoativas, como é o caso da marijuana. Atualmente muitos países tem regredido nesta proibição.',
            //
            tx_recr_1: 'As substâncias psicoativas da cannabis, os canabinóides, estão localizadas por toda a planta, sendo que o principal princípio ativo da cannabis é o ?-9-tetra-hidrocannabinol (THC).',
            tx_recr_2: 'A concentração de THC varia de acordo com a sua localização na planta, ou seja:',
            tx_recr_3: 'a) as flores, as folhas secas ou os pequenos talos apresentam uma concentração entre 1% a 5% de THC,',
            tx_recr_4: 'b) a resina, ou haxixe, produzida pelas glândulas das vilosidades apresenta uma concentração de THC entre 5% a 10%, e é obtido através da prensagem da resina,',
            tx_recr_5: 'c) o óleo resultante da extração da resina contém uma alta concentração de THC de 50% ou superior (Morel et al, 1998, Velasco, 2003).',
            tx_recr_6: 'Historicamente, o uso de drogas esteve sempre atrelado às perguntas com respostas complexas- ou sem resposta alguma- que surgiam entre a humanidade acerca de seus medos costumeiros e preocupações perenes. Nesse sentido, as drogas desenvolveram, por vezes, a função de mediadoras dessas questões. Culturalmente, as substâncias psicoativas estão presentes em muitos aspetos importantes da vida e da sociedade, como, por exemplo, em rituais para senti rum maior contato com a espiritualidade, em momentos de observação e reflexão acerca do cosmos e para diferentes formas de aliviar o peso do cotidiano contemporâneo.',
            tx_recr_7: 'Atualmente, na Índia, a cannabis é usada pelos devotos do Deus Shiva, o Deus responsável pela destruição e renovação do universo. A planta é considerada um presente do Deus para o homem. Todos os anos, acontecem festividades no país, como o Mahâshivarâtri, a “Grande noite de Shiva”, e o festival de Holi, a “guerra de cores”, em que os devotos consomem o Bhang, uma bebida feita à base de leite e maconha, e bolinhos degustados como oferenda a Shiva.',
            tx_recr_8: 'Em outros países, também existe a legislação para o uso recreativo como:',
            tx_recr_9: 'URUGUAI',
            tx_recr_10: 'Primeiro país a legalizar a venda, o cultivo e a distribuição de maconha. O Uruguai aprovou uma lei sobre drogas em dezembro de 2013 que prevê que qualquer pessoa com mais de 18 anos poderá comprar até 40 gramas de maconha por mês, diretamente com o governo, em farmácias autorizadas.',
            tx_recr_11: 'ESTADOS UNIDOS',
            tx_recr_12: 'Enquanto a lei federal nos Estados Unidos ainda proíbe a maconha em grande parte do território norte-americano, 23 Estados – como Oregon, Nova Jersey e Califórnia – permitem o uso medicinal da cannabis. Além disso, em Washington e no Colorado, o uso e o cultivo da droga para consumo próprio está liberado. Com permissão estadual, vale até comercializar a droga.',
            tx_recr_13: 'BANGLADESH',
            tx_recr_14: 'Além da maconha, que é uma das poucas drogas permitidas nos demais países do globo, Bangladesh permite o uso de ópio – um suco espesso extraído dos frutos imaturos de várias espécies de papoulas soníferas, utilizado como narcótico. O consumo de tal droga é uma tradição no país e nunca houve nenhuma lei que o proibisse.  Inclusive, não existem leis que sejam relacionadas a essas drogas, o que revela que a posse, o uso e a venda são vistos com total indiferença pelo governo.',
            tx_recr_15: 'COREIA DO NORTE',
            tx_recr_16: 'Na Coreia do Norte, a maconha não é considerada uma droga. Por isso mesmo, não há punição para o cultivo, consumo ou para o comércio da erva.  A maconha é popularmente usada entre os soldados para mantê-los prontos para batalhas.',
            tx_recr_17: 'HOLANDA',
            tx_recr_18: 'Embora a Holanda seja um país associado à maconha devido a informações da mídia internacional, todas as drogas são proibidas nos Países Baixos. É ilegal produzir, possuir, vender, importar e exportar drogas. Mas o governo tolera o uso da maconha em locais – e sob algumas condições – específicos. Existem os chamados “coffee shops”, espalhados por toda a capital, Amsterdã, onde é permitido vender até cinco gramas da erva por pessoa por dia. Portanto, a posse dessa quantidade de maconha é permitida. No entanto, turistas não têm permissão para comprar.',
            tx_recr_19: 'JAMAICA',
            tx_recr_20: 'A lei jamaicana proíbe o uso, o cultivo e a venda da maconha. No entanto, tudo isso continua acontecendo no país com frequência.  ser aprovada. O país, no entanto, não reprime com muita veemência quem a utiliza.',
            tx_recr_21: 'PORTUGAL',
            tx_recr_22: 'Em 2001, Portugal foi um dos primeiros países europeus a descriminalizar a maconha. Hoje, apesar de ainda não ser legalizado, o consumo da droga não resulta em cadeia. O que pode ocorrer com o usuário é uma internação obrigatória em uma clínica de reabilitação, mas isso só acontece se ele for reincidente, ou seja, se for encontrado com a droga várias vezes pela polícia local. O plantio e o tráfico de qualquer tipo de droga ainda são penalizados pelo governo português.',
            tx_recr_23: 'No ano de 2019, o governo português estabeleceu, de forma oficial, para a preparação, utilização e comercialização da erva para fins medicinais, como descrito no Decreto-Lei nº 8/2019.',
            tx_recr_24: 'SUIÇA',
            tx_recr_25: 'Na Suíça, o consumo da maconha foi descriminalizado em outubro de 2013. De acordo com a nova lei, qualquer pessoa que tenha mais de 18 anos pode portar até 10 gramas da subistância. Ninguém é preso, apenas multado. Assim como em Portugal, plantar e vender maconha são proibidos pela lei federal.',
            tx_recr_26: 'ESPANHA',
            tx_recr_27: 'Na Espanha, a descrição é essencial. O governo considera fora da lei o consumo da maconha em lugares públicos e pune os usuários com altas multas. No entanto, em ambientes privados, o consumo é permitido. Além disso, o plantio privado da droga também já é aceito pela Justiça.',
            tx_recr_28: 'Aproveitando a lei espanhola, diversos clubes para usuários foram criados em diferentes cidades a fim de marcar reuniões e encontros de usuários em lugares fechados. Mesmo com tal legislação, a comercialização da droga é um crime passível de prisão.',
            tx_recr_29: 'CANADÁ',
            tx_recr_30: 'Desde 2001, o uso de cannabis para fins medicinais é permitido no país. O Canadá tornou-se o primeiro país do G7 onde o consumo recreativo da erva também é legal. A posse é limitada a 30 gramas por pessoa.',
        }
    },
    methods: {
        verifMenuDrop() {
            this.$store.state.auth_router = true // liberar menu drop.

            window.scrollTo(0,0)
        },
        voltarSaibaMais(){

            window.scrollTo(0,0)

            this.altura = '1000px' // main pag

            // Desabilitar qualquer que seja a falta.
            this.clicada1 = false
            this.clicada2 = false
            this.clicada3 = false
            this.clicada4 = false

            // Habilitar página inicial.
            this.entradaInicial1 = true
            this.entradaInicial2 = true
            this.entradaInicial3 = true
            this.entradaInicial4 = true

            this.gatSaibaPeq = true
        },
        troca1(){

            this.altura = '4500px'

            // Desabilitar página inicial.
            this.entradaInicial1 = false
            this.entradaInicial2 = false
            this.entradaInicial3 = false
            this.entradaInicial4 = false

            // Habilitar página da história da cannabis.
            this.clicada1 = true

            window.scrollTo(0,0)
        },
        troca2(){

            this.altura = '7700px'

            // Desabilitar página inicial.
            this.entradaInicial1 = false
            this.entradaInicial2 = false
            this.entradaInicial3 = false
            this.entradaInicial4 = false

            // Habilitar página da história da cannabis.
            this.clicada2 = true

            window.scrollTo(0,0)
        },
        troca3(){

            this.altura = '4800px'

            // Desabilitar página inicial.
            this.entradaInicial1 = false
            this.entradaInicial2 = false
            this.entradaInicial3 = false
            this.entradaInicial4 = false

            // Habilitar página da história da cannabis.
            this.clicada3 = true

            window.scrollTo(0,0)
        },
        troca4(){

            this.altura = '8000px'

            // Desabilitar página inicial.
            this.entradaInicial1 = false
            this.entradaInicial2 = false
            this.entradaInicial3 = false
            this.entradaInicial4 = false

            // Habilitar página da história da cannabis.
            this.clicada4 = true

            window.scrollTo(0,0)
        },
        selcTroca(escolhido){

            this.gatSaibaPeq = false // desabilitar página saiba mais pequena

            // Selecionar a func sob event personalizado.
            if(escolhido == '1'){
                this.troca1()
            }
            if(escolhido == '2'){
                this.troca2()
            }
            if(escolhido == '3'){
                this.troca3()
            }
            if(escolhido == '4'){
                this.troca4()
            }

        },
    },
    created() {
        this.verifMenuDrop();
    }
}
</script>