import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pathAxios: `https://gsc-api.vercel.app/`,

    // -- Operações gerais do app
    statusLoja:'off',
    statusOverLay:true, // init on overlay.
    // ---- rcv lista de produtos completa from db. (fazer chamada ao db ao iniciar o app)
    // CADA ITEM DA LISTA É UMA CATEGORIA.
    prodLiGlobal: [],
    // ---- obter idC pertencente à categoria de bebidas, se houver.
    // ----- simulação de rcv categorias from db, isoladamente para facilitar.
    elemsCateg: [],
    /*
      {idC:0,img:require('../assets/imgs/bock.png'),titCateg:'Bebidas'},
      {idC:1,img:require('../assets/imgs/cn.jpg'),titCateg:'Flores'}

    ],*/ // lista contendo as categorias. Cada categoria com seu conteudo.
    // ---- receber atual histórico.
    li_pdds_his: [],

    // -- Carousel home.
    // ---- obter idC e idP do elemento clicado no carousel home --> página de descrição --> venda
    idC_descricao: 0,
    idP_descricao: 0,
    img_descricao: null,
    tit_descricao: '',
    desc_descricao: '',
    pr_descricao: 0,
    statusProd_descricao:'indisponível',
    // ---- variáveis que trafegam com título e txt de divulgação vindo do carousel home.
    titDivulg: '',
    txtDivulg: '',
    imgDivulg: '',
    // EXTRA: parallax promocional da página inicial.
    img_parallax:require('../assets/imgs/balcaoG2.png'),

    // -- Operação Menu Drop
    flagDrop: false, // on off menu drop
    dinamicClassDrop: 'box_menuDropAfter animate__animated animate__fadeIn', // fade in out menu drop

    // -- flag de exibição do component ExtraLine
    authForShow: false, // flag chamada em uma função global dentro de router.js

    // -- Operações da página de cliente.
    // ---- flag de usuário ativo.
    flagUserAtivo: false,
    // ---- flags de tráfego entre as páginas de usuário.
    flagShowLogin: true,
    flagShowCadastro: false,
    flagShowClientPage: false,
    // ---- vars com os dados do usuário.
    nomeUsuario: '',
    enderecoUsuario: '',
    foneUsuario: '',
    // ---- flags de exibição selecionadas pelo menu client.
    flagClientPddShow: true,
    flagClientContaShow: false,

    // -- Operações de venda
    // ---- Carrinho
    listCar: [],
    valorTotalCarrinho: 0,
    // nota: 'not_rcved' => flag indicando que uma nova busca no db deve ser realizada.
    tx_entrega: 'not_rcved', // deve receber a taxa ao entrar no carrinho. receber do db antes.
    tx_entrega_fora: 'not_rcved',
    tx_entrega_final:0,
    msgDestinoEntregaCarrinho: 'Entrega na covilhã',
    flagTx: 'covi',
    valorTotalCompra: 0,
    // ---- tráfego entre a página categ e página prod
    numCategSelected: 0, // index da categoria selecionada
    prodLiDepois:[],
    nomeCategSelected: '',
    // ---- dados do cliente para o fechamento (alterado pois havia conflito com a client page)
    flagShowLogin_carrinho: true,
    flagShowCadastro_carrinho: false,
    // ---- tráfedo entre as etapas do carrinho
    flagStepCarrinho1: true,
    flagStepCarrinho2: false,
    flagStepCarrinho3: false,
    numStepperCarrinho: 2, // inicia na inserção de dados do cliente, após fechar o pdd no carrinho (step=1).

    // -- conheça a cannabis
    // ---- título dinâmico.
    tit_card_conh:'Conheça um pouco mais sobre a cannabis',
    // ---- controle de páginas.
    // ------ FIXO.
    elConh: [
      {
        flagActivaConh:true, // exibição geral.
        flagActivaInfoConh:false, // exibição conteúdo.
        imgElConh:require('../assets/imgs/histcan.jpg'),
        titElConh:'História da Cannabis',
        li_txt: [
          'A cannabis foi uma das primeiras plantas cultivadas pelo Homem. A planta do cânhamo, Cannabis sativa, oriunda das regiões temperadas e tropicais, foi utilizada há 12000 anos como fonte de fibras para a fabricação de tecidos e cordoaria, pelos povos gregos, chineses e romanos, a partir do seu caule, dada a sua grande resistência. Além disso, os benefícios medicinais, nutricionais e combustíveis da planta já eram conhecidos por sociedades antigas da Índia e da Arábia.',
          'Entre os anos de 1000 a.C. até meados do século XIX, a maconha e o cânhamo produziam a maior parte dos papéis, combustíveis e artigos têxteis. Sua grande importância histórica se deve não apenas ao fato do cânhamo ter a fibra natural mais resistente e forte do que todas as outras, mas por sua facilidade de cultivo em praticamente qualquer tipo de solo.',
          'A primeira referência encontrada relativa à utilização terapêutica da planta data de 2700 a.C. e está presente na farmacopeia do Imperador chinês Shen-Nung, em que era recomendada no tratamento da malária, de dores reumáticas e nos ciclos menstruais irregulares e dolorosos.',
          'O livro “De Matéria Médica”, escrito pelo médico Pedânio Dioscórides, considerado o fundador da farmacologia, traz a Cannabis como uma das substâncias naturais com propriedades analgésicas. Na obra, ela é atribuída à melhora de dores articulares e inflamações.',
          'Na Grécia, Hipócrates (460 a.C- 377 a.C) adotou a planta como terapia associada a dietas, bebidas alcoólicas e medicamentos. A partir deste ponto, o imperador Romano Nero passou a admirar a planta por suas propriedades medicinais, e estipular padrões de pesquisa da Cannabis sativa.',
          'Na atualidade, a cannabis foi classificada, no ano de 1961, como uma substância com ”propriedades particularmente perigosas e praticamente sem valor terapêutico pela Convenção Única de Entorpecentes. Desde então, cada vez mais países têm mostrado seu desconforto com as restrições do regime do tratado e recorrido à deserção suave ao estender sua flexibilidade jurídica a limites, por vezes, questionáveis. A realidade política de hoje, com os mercados regulares de maconha no Uruguai, em Washington e no Colorado, está em conflito com as convenções da ONU e coloca em discussão as opções para reformar o regime mundial de controle de drogas. Agora que as rachaduras no consenso de Viena chegaram ao extremo da violação do tratado, este debate não é mais uma mera fantasia reformista. Opções fáceis, entretanto, não existem; todos os caminhos envolvem dificuldades processuais e obstáculos políticos.',
          'Existem boas razões para questionar o modelo de proibição que os tratados impõem ao controle da cannabis. A inclusão original da cannabis no quadro atual não é apenas o resultado de procedimentos duvidosos, mas aumentou muito o conhecimento sobre a própria droga, sobre a dinâmica dos mercados ilícitos e as consequências não intencionais de estratégias repressivas de controle de substâncias. O modelo proibitivo falhou em ter um impacto sustentado na redução do mercado, mas colocou uma carga significativa nos sistemas de justiça criminal, causou reflexos profundamente negativos na sociedade e na saúde pública e criou redes criminosas formentadoras do crime organizado, da violência e da corrupção.',
        ],
      },
      {
        flagActivaConh:true,
        flagActivaInfoConh:false,
        imgElConh:require('../assets/imgs/induscan.jpg'),
        titElConh:'Indústria da Cannabis',
        li_txt: [
          'A preocupação com o futuro do nosso planeta tem aumentado devido à maior consciência dos efeitos que as atividades humanas têm sobre o meio ambiente. Esta consciencialização surgiu após a compreensão que os impactos eram resultado de um processo produtivo a um ritmo elevado de exploração e degradação dos recursos naturais.',
          'Esse aumento descontrolado do consumo dos recursos e materiais disponíveis na natureza está relacionado com o rápido crescimento da população e com a procura de melhor qualidade de vida. A indústria da construção é um dos maiores consumidores de recursos naturais. Este setor é responsável por vários impactos ambientais, alguns deles resultantes do consumo excessivo de água, das elevadas emissões de CO2, da produção de resíduos e do consumo não controlado de recursos naturais não renováveis, o que culmina na contaminação das águas, do solo e do ar, desflorestação e desaparecimento de espécies animais e vegetais.',
          'Posto isto, segundo estudos feitos no artigo “O Cânhamo como material de construção: Viabilidade e Oportunidade”, o cânhamo poderá, perfeitamente, ser uma alternativa ecológica a diversos materiai, utilizados hoje em dia em vários setores industriais, como, por exemplo, na indústria têxtil, para a produção de tecidos, na indústria alimentar, com o preparo de diferentes partes da planta, na indústria automobilística, na parte de construção, como biodiesel e, por fim, pode ainda ser aplicado na construção civil de variadas maneiras.',
          'Portugal está a dar os seus primeiros passos na investigação de novos materiais não convencionais que habitualmente não são aplicados na construção corrente, sendo o cânhamo um destes materiais já estudados neste âmbito.',
          'O cânhamo possui menos de 0,3% de delta 9-tetrahidrocanabinol (THC), substância responsável pelo efeito psicotrópico da planta, tornando a mesma ineficiente para uso recreativo, mas muito rica para outras aplicações industriais.',
          'A planta é altamente resistente a pragas, necessitando de mínimo ou nenhum agrotóxico para seu cultivo, além de ter propriedades regenerativas do solo, sendo utilizada como cultura de rotação para recuperação de solos defasados.',
          'A indústria do óleo de Cannabis (CBD) é atualmente a mais lucrativa por ter amplo uso farmacêutico, alimentício e cosmético segundo a Hemp Business Journal, em 2019. Todavia, o potencial ecológico estende-se para a confeção de bioplásticos e biocombustíveis. Da extração do caule da planta são exploradas aplicações, principalmente, nas indústrias de papel, construção civil (hurd) e têxtil (fibra).',
          'Na indústria automobilística, Ford - considerado o pai da escola clássica da administração - teria utilizado fibras de cânhamo na confeção de um dos carros da marca em 1941. O cânhamo produz cerca de 200% a mais de fibras na mesma quantidade de terra em comparação com o algodão e está pronto para a colheita em apenas 120 dias após ter sido plantado. Além disso, requer 20% menos água que a cultura do algodão. Na China, foi na maior produtora de cânhamo do mundo, responsável por ⅕ da produção global, onde surgiram as primeiras aplicações têxteis datadas ao ano de 207 a.C',
          'Por sua associação com a marijuana recreativa, no ano de 1937 o cânhamo foi proibido nos Estados Unidos da América e sua estigmatização proliferou no ocidente. Acontece que, apesar de serem da mesma família de plantas, o cânhamo não possui propriedades psicoativas, como é o caso da marijuana. Atualmente muitos países tem regredido nesta proibição.',
        ],
      },
      {
        flagActivaConh:true,
        flagActivaInfoConh:false,
        imgElConh:require('../assets/imgs/medcan.jpeg'),
        titElConh:'Cannabis na medicina',
        li_txt: [
          'Um dos grandes desafios da Química Farmacêutica prende-se à obtenção de estruturas químicas novas que servirão como base para novos agentes terapêuticos. Durante muito tempo, as plantas foram quase exclusivas na terapia disponível para o homem. A utilização terapêutica da Cannabis sativa ou dos seus derivados é conhecida há muitos anos; no entanto, o estudo das suas propriedades, dos seus análogos, dos recetores canabinóides (CB1 e CB2) e das enzimas envolvidas no seu metabolismo é muito recente. Após a descoberta dos canabinóides endógenos, os estudos científicos focaram-se na investigação do seu potencial clínico.',
          'Segundo estudos feitos no artigo CANNABIS SATIVA: POTENCIAL TERAPÊUTICO, a cannabis pode ser usada para:',
          'ESQUIZOFRENIA',
          'O termo psicose é o nome dado a um estado mental patológico caracterizado pela perda de contato do indivíduo com a realidade, o qual passa a apresentar um comportamento antissocial. Dentre as psicoses funcionais, a mais importante é a esquizofrenia, a qual é definida como uma psicopatologia crônica de origem desconhecida e que se apresenta como um misto de sintomas de doenças diferentes se manifestando concomitantemente. São eles: mudança de comportamento abrupto (comportamento ambíguo), isolamento social e alteração de afeto.',
          'Crippa e colaboradores (2010) realizaram o estudo de seis pacientes com diagnóstico de esquizofrenia, durante três meses, onde foi administrada a dose de canabidiol (CBD) de 150 mg/dia durante quatro semanas, além do tratamento diário de cada paciente. Foi observado que com o uso do canabidiol (CBD) os sintomas psicóticos e motores foram reduzidos significativamente.',
          'EPILEPSIA',
          'A epilepsia é um distúrbio neurológico caracterizado pela atividade neuronal excessiva e hipersincrônica, o qual tem como característica principal a convulsão ou crise convulsiva.',
          'Nos últimos anos, o interesse científico sobre o uso terapêutico da Cannabis no tratamento de epilepsia em crianças vem crescendo. Pesquisadores acreditam que os efeitos adversos são quase nulos. Estudos realizados in vitro e em animais mostram que o canabidiol (CBD) é um antiepilético eficaz. Além disso, estudos clínicos feitos por Carlini et al (2001) também comprovam a eficácia do canabidiol no tratamento da convulsão.',
          'ARTRITE REUMATÓIDE',
          'É uma doença autoimune com etiologia desconhecida caracterizada pela deformidade e a destruição das articulações e das cartilagens. Afeta mulheres duas vezes mais do que homens e sua prevalência aumenta com a idade. Tem como sintomas a rigidez da articulação acometida, fadiga e emagrecimento.',
          'Foi realizado um estudo no Reino Unido em pacientes com artrite reumatóide comparando o medicamento Sativex (∆ 9 -THC+CBD) e placebo (sem efeito farmacológico), em forma de spray, aplicado pelo próprio paciente, durante 5 a 6 vez ao dia. Notou-se que as dores causadas pela doença tinham diminuído de forma significativa com a administração do Sativex quando comparado com o placebo. Numa escala de 0 a 100 para a dor, o placebo ficou na média de 60 e com o Sativex ficou na média de 33 e 48 e sem efeitos colaterais . Este estudo demonstra que o canabidiol tem efeito sobre a resposta imune celular e a produção de mediadores da inflamação e, portanto, pode ser uma alternativa importante no tratamento de doenças inflamatórias, que incluem a artrite reumatóide.',
          'DOENÇA DE PARKINSON',
          'É uma doença neurodegenerativa que geralmente afeta pessoas com mais de 55 anos. Esta doença está relacionada com a morte dos neurônios dopaminérgicos da substância negra, a qual está localizada no mesencéfalo e regula o circuito dos núcleos da base, importante no controle do movimento. Os sintomas típicos da doença incluem tremores, rigidez da musculatura esquelética, postura inclinada, expressão facial como uma máscara e outros sinais neurológicos.',
          'Apesar de haver pouco estudo na literatura sobre o tratamento da doença de Parkinson, pesquisas recentes revelam um efeito terapêutico do canabidiol nesta patologia. Estudos realizados por Simões (2011) e Torrão e colaboradores (2013) constatam que a relação da doença de Parkinson com os canabinóides está na neuroproteção, ou seja, as propriedades antioxidantes do canabidiol podem fornecer proteção contra a degeneração progressiva dos neurônios dopaminérgicos da região nigro-estriatal, característica da doença de Parkinson.',
          'DOENÇA DE ALZHEIMER',
          'É uma patologia que causa demência e está relacionada com o envelhecimento cerebral, causando a perda de neurônios, principalmente do hipocampo e do prosencéfalo basal, devido ao depósito de placas senis (formadas por peptídeo β-amiloide (βA)) e de emaranhados neurofibrilares no cérebro.',
          'Atualmente, é reconhecido que o canabidiol (CBD) é um potente antioxidante, característica que, de acordo com estudos, confere à substância efeitos protetores. No Mal de Alzheimer, o canabidiol desempenha função neuroprotetora, assim como na doença de Parkinson.',
          'ANSIEDADE E DEPRESSÃO',
          'A ansiedade é considerada uma emoção semelhante ao medo. Porém, o medo é uma consequência de uma situação definida; na ansiedade, a fonte do perigo é incerta ou desconhecida. Foi realizado um estudo em humanos saudáveis com o CBD (via oral, inalatória ou endovenosa), em um procedimento de simulação do falar em público (SFP), onde foram comparados o canabidiol (300mg), o placebo e dois ansiolíticos, o diazepem (10mg) e a ipsapirona (5mg), num procedimento duplo cego. A pesquisa relatou que tanto o canabidiol (CBD) como os dois ansiolíticos diminuíram a ansiedade induzida pela simulação do falar em público (SFP) sem efeitos colaterais significativos.',
          'Alguns debates no meio acadêmico também sugerem que o substrato da Cannabis sativa tem potencial terapêutico sintomático em doenças consultivas como AIDS, câncer, glaucoma e diabetes.',
        ],
      },
      {
        flagActivaConh:true,
        flagActivaInfoConh:false,
        imgElConh:require('../assets/imgs/recrecan.jpg'),
        titElConh:'Cannabis recreativa',
        li_txt: [
          'As substâncias psicoativas da cannabis, os canabinóides, estão localizadas por toda a planta, sendo que o principal princípio ativo da cannabis é o ?-9-tetra-hidrocannabinol (THC).',
          'A concentração de THC varia de acordo com a sua localização na planta, ou seja:',
          'a) as flores, as folhas secas ou os pequenos talos apresentam uma concentração entre 1% a 5% de THC;',
          'b) a resina, ou haxixe, produzida pelas glândulas das vilosidades apresenta uma concentração de THC entre 5% a 10%, e é obtido através da prensagem da resina;',
          'c) o óleo resultante da extração da resina contém uma alta concentração de THC de 50% ou superior (Morel et al, 1998, Velasco, 2003).',
          'Historicamente, o uso de drogas esteve sempre atrelado às perguntas com respostas complexas- ou sem resposta alguma- que surgiam entre a humanidade acerca de seus medos costumeiros e preocupações perenes. Nesse sentido, as drogas desenvolveram, por vezes, a função de mediadoras dessas questões. Culturalmente, as substâncias psicoativas estão presentes em muitos aspetos importantes da vida e da sociedade, como, por exemplo, em rituais para senti rum maior contato com a espiritualidade, em momentos de observação e reflexão acerca do cosmos e para diferentes formas de aliviar o peso do cotidiano contemporâneo.',
          'Atualmente, na Índia, a cannabis é usada pelos devotos do Deus Shiva, o Deus responsável pela destruição e renovação do universo. A planta é considerada um presente do Deus para o homem. Todos os anos, acontecem festividades no país, como o Mahâshivarâtri, a “Grande noite de Shiva”, e o festival de Holi, a “guerra de cores”, em que os devotos consomem o Bhang, uma bebida feita à base de leite e maconha, e bolinhos degustados como oferenda a Shiva.',
          'Em outros países, também existe a legislação para o uso recreativo como:',
          'URUGUAI',
          'Primeiro país a legalizar a venda, o cultivo e a distribuição de maconha. O Uruguai aprovou uma lei sobre drogas em dezembro de 2013 que prevê que qualquer pessoa com mais de 18 anos poderá comprar até 40 gramas de maconha por mês, diretamente com o governo, em farmácias autorizadas.',
          'ESTADOS UNIDOS',
          'Enquanto a lei federal nos Estados Unidos ainda proíbe a maconha em grande parte do território norte-americano, 23 Estados – como Oregon, Nova Jersey e Califórnia – permitem o uso medicinal da cannabis. Além disso, em Washington e no Colorado, o uso e o cultivo da droga para consumo próprio está liberado. Com permissão estadual, vale até comercializar a droga.',
          'BANGLADESH',
          'Além da maconha, que é uma das poucas drogas permitidas nos demais países do globo, Bangladesh permite o uso de ópio – um suco espesso extraído dos frutos imaturos de várias espécies de papoulas soníferas, utilizado como narcótico. O consumo de tal droga é uma tradição no país e nunca houve nenhuma lei que o proibisse.  Inclusive, não existem leis que sejam relacionadas a essas drogas, o que revela que a posse, o uso e a venda são vistos com total indiferença pelo governo.',
          'COREIA DO NORTE',
          'Na Coreia do Norte, a maconha não é considerada uma droga. Por isso mesmo, não há punição para o cultivo, consumo ou para o comércio da erva.  A maconha é popularmente usada entre os soldados para mantê-los prontos para batalhas.',
          'HOLANDA',
          'Embora a Holanda seja um país associado à maconha devido a informações da mídia internacional, todas as drogas são proibidas nos Países Baixos. É ilegal produzir, possuir, vender, importar e exportar drogas. Mas o governo tolera o uso da maconha em locais – e sob algumas condições – específicos. Existem os chamados “coffee shops”, espalhados por toda a capital, Amsterdã, onde é permitido vender até cinco gramas da erva por pessoa por dia. Portanto, a posse dessa quantidade de maconha é permitida. No entanto, turistas não têm permissão para comprar.',
          'JAMAICA',
          'A lei jamaicana proíbe o uso, o cultivo e a venda da maconha. No entanto, tudo isso continua acontecendo no país com frequência.  ser aprovada. O país, no entanto, não reprime com muita veemência quem a utiliza.',
          'PORTUGAL',
          'Em 2001, Portugal foi um dos primeiros países europeus a descriminalizar a maconha. Hoje, apesar de ainda não ser legalizado, o consumo da droga não resulta em cadeia. O que pode ocorrer com o usuário é uma internação obrigatória em uma clínica de reabilitação, mas isso só acontece se ele for reincidente, ou seja, se for encontrado com a droga várias vezes pela polícia local. O plantio e o tráfico de qualquer tipo de droga ainda são penalizados pelo governo português.',
          'No ano de 2019, o governo português estabeleceu, de forma oficial, para a preparação, utilização e comercialização da erva para fins medicinais, como descrito no Decreto-Lei nº 8/2019.',
          'SUIÇA',
          'Na Suíça, o consumo da maconha foi descriminalizado em outubro de 2013. De acordo com a nova lei, qualquer pessoa que tenha mais de 18 anos pode portar até 10 gramas da subistância. Ninguém é preso, apenas multado. Assim como em Portugal, plantar e vender maconha são proibidos pela lei federal.',
          'ESPANHA',
          'Na Espanha, a descrição é essencial. O governo considera fora da lei o consumo da maconha em lugares públicos e pune os usuários com altas multas. No entanto, em ambientes privados, o consumo é permitido. Além disso, o plantio privado da droga também já é aceito pela Justiça.',
          'Aproveitando a lei espanhola, diversos clubes para usuários foram criados em diferentes cidades a fim de marcar reuniões e encontros de usuários em lugares fechados. Mesmo com tal legislação, a comercialização da droga é um crime passível de prisão.',
          'CANADÁ',
          'Desde 2001, o uso de cannabis para fins medicinais é permitido no país. O Canadá tornou-se o primeiro país do G7 onde o consumo recreativo da erva também é legal. A posse é limitada a 30 gramas por pessoa.',
        ],
      },
    ],

    flagAuxExtra:null, // apenas auxiliar. Sem finalidade!
  },
  getters: {
    indexCategBebida(state) { // this.$store.getters.indexCategBebida
      let c = 0
      let indexCategBebida
      while (c < state.elemsCateg.length) {
        if (state.elemsCateg[c].titCateg == ('Bebidas' || 'bebidas' || 'Bebida' || 'bebida')) {

          indexCategBebida = c
          //console.log('index bebida:', indexCategBebida)
          return indexCategBebida
        }
        c = c + 1
      }
      return indexCategBebida
    },
    qntProdsOnCart(state) {
      let c = 0
      let acumulador = 0
      while (c < state.listCar.length) {

          acumulador = acumulador + parseInt(state.listCar[c].qnt)

          c = c + 1
      }
      return acumulador
    },
    valorTotalCarrinho(state) {
      return state.valorTotalCarrinho
    },
    valorTotalCompra(state) {
      if(state.flagTx == 'covi') {

        state.tx_entrega_final = state.tx_entrega
        return state.valorTotalCarrinho + state.tx_entrega

      } else {

        state.tx_entrega_final = state.tx_entrega_fora
        return state.valorTotalCarrinho + state.tx_entrega_fora
      }
      
    }
  },
  mutations: {
    updateContentApp(state) {

      // INITIAL REQUEST FROM DB TO APP. HOME, CATEGORIAS AND CARRINHO-INIT.

      //console.log('app <-- (mutation get db)')

      var params = {

          token:'testToken',
          func:'home',
          data:'' /* GET request */
      }

      const self = this
      
      //Posting the data converted to FormData using Axios to Flask.
      axios.post(state.pathAxios, params).then(function (res) {

          //console.log(res)

          //console.log('[lista de elems categ]: ', res.data.result[0])
          //console.log('[lista de produtos]: ', res.data.result[1])
          
          self.state.prodLiGlobal = res.data.result[1] //this.prodLi
          self.state.elemsCateg = res.data.result[0] //this.elemsCateg
          
          var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

          var update_trafegoLocal = {

              storedUserLogado: trafegoLocal.storedUserLogado, // bool <--hold
              storedDateUser: trafegoLocal.storedDateUser, // {} <--------hold
              storedPddListUser: trafegoLocal.storedPddListUser, // [] <--hold
              storedCarrinho: trafegoLocal.storedCarrinho, // [] <--------hold
              storageElemsCateg: res.data.result[0], // {} <--------------------- update (init from db)
              storedPddListGeral: res.data.result[1] // [] <--------------------- update (init from db)
          }

          localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

          //console.log('after update rcv get home at store')
      })
    },
    updatetxEntrega() { // CARRINHO-INIT.

      //console.log('carrinho <-- txs entrega (mutation get db)')

      var params = {

        token:'testToken',
        func:'txentrega',
        data:'' /* GET request */
    }

    const self = this
    
    axios.post(self.state.pathAxios, params).then(function (res) {

        //console.log(res.data.result[0].tx_entrega)
        //console.log(res.data.result[0].tx_entrega_fora)
        
        self.state.tx_entrega = parseFloat(res.data.result[0].tx_entrega)
        self.state.tx_entrega_fora = parseFloat(res.data.result[0].tx_entrega_fora)

        //console.log('after update rcv tx')
    })
    },
    updateCartList(state) { // é a mesma func local verifListCar()

      var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

      state.listCar= trafegoLocal.storedCarrinho

      // RECALCULAR VALOR TOTAL NO CARRINHO.

      // verificar listCar
      const tamListCar = state.listCar.length
      let listCar = state.listCar
      // calcular valor da compra (válido a partir do 2o produto adicionado)
      let soma = 0
      let c = 0
      while (c < tamListCar) {

          // incrementar também o valor mult pela qnt de cada produto contido no carrinho.
          soma = soma + ( parseFloat(listCar[c].pr) * parseFloat(listCar[c].qnt) )

          c = c + 1
      }

      state.valorTotalCarrinho = soma

      //getters.valorTotalCarrinho(state)
      //getters.qntProdsOnCart(state)

    },
    updateCartListStorage(state, newListCart) {

      state.listCar = newListCart // update

      var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

      var update_trafegoLocal = {

        storedUserLogado: trafegoLocal.storedUserLogado, // bool <--- hold
        storedDateUser: trafegoLocal.storedDateUser, // {} <--------- hold
        storedPddListUser: trafegoLocal.storedPddListUser, // [] <--- hold
        storedCarrinho: newListCart, // [] <------------------------------- update
        storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <--- hold
        storedPddListGeral: trafegoLocal.storedPddListGeral // [] <-- hold
      }

      localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

      //console.log('newListCart: ', newListCart)
    },
    updateStatusLoja(state) {
      var params = {

        token:'testToken',
        func:'getStatusLoja',
        data:'' /* GET request */
      }

      const self = this
      
      axios.post(state.pathAxios, params).then(function (res) {

          //console.log(res.data.result.statusLoja)
          //console.log(res.data.result[0].tx_entrega_fora)
          
          self.state.statusLoja = res.data.result.statusLoja

          //console.log('after update rcv tx')
      })
    },
    updateClient(state,nomeCl) {
      var params = {

        token:'testToken',
        func:'getPddsCl',
        nome:nomeCl /* POST request */
      }

      //const self = this
      
      axios.post(state.pathAxios, params).then(function (res) {

        //console.log(res.data.result)
        
        // -- STORAGE
        var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

        var update_trafegoLocal = {

          storedUserLogado: trafegoLocal.storedUserLogado, // bool <--- hold
          storedDateUser: trafegoLocal.storedDateUser, // {} <--------- hold
          storedPddListUser: res.data.result, // [] <----------------------- update
          storedCarrinho: trafegoLocal.storedCarrinho, // [] <--------- hold
          storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <--- hold
          storedPddListGeral: trafegoLocal.storedPddListGeral // [] <-- hold
        }

        localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))
        
        //console.log('after update pdds for a client')
      })
    },
    getHisCms(state) {

      var params = {

        token:'testToken',
        func:'getHis',
        data:'' /* GET request */
      }

      //const self = this
      
      axios.post(state.pathAxios, params).then(function (res) {

          console.log(res.data.result)

          state.li_pdds_his = res.data.result
          //self.li_pdds = res.data.result

          /*var trafegoCms = JSON.parse(localStorage.getItem('trafegoCms'))

          var update_trafegoCms = {

              storedFlagCms: trafegoCms.storedFlagCms, // bool <--------- hold
              storedElemsCateg: trafegoCms.storedElemsCateg, // [] <----- hold
              storedLiTitCateg: trafegoCms.storedLiTitCateg, // [] <----- hold
              storedProdLiGlobal: trafegoCms.storedProdLiGlobal, // [] <- hold
              storedLiClientes: res.data.result, // [] <------------------- update
              storedLiInfoGeral: trafegoCms.storedLiInfoGeral // [] <----- hold
          }

          localStorage.setItem('trafegoCms', JSON.stringify(update_trafegoCms))*/

          console.log('after rcv his from axios')
      })
    },
    // POST
    updatePddsUserDB(state, infoInsert) { // new pdd

      //console.log('db <-- new pdd (mutation post db)')
      console.log(state.flagUserAtivo) // manter state util.

      var params = {

        token:'testToken',
        func:'addpdd',
        data:infoInsert /* POST request */
      }
    
      axios.post(state.pathAxios, params).then(function () {
          //console.log(res.data.result)
      })
    },
    change_qnt_prod(state,el_editQntProd) {
      state.flagAuxExtra = true // apenas para utilizar o state. true não utilizado.

      var params = {

          token:'testToken',
          func:'changeqntprod',
          data:el_editQntProd /* POST request */
      }

      //const self = this
      
      axios.post(state.pathAxios, params).then(function (res) {

          console.log(res.data.result)
      })
    },
    postElHis(state, el_his) {
      state.flagAuxExtra = true // apenas para utilizar o state. true não utilizado.

      var params = {

          token:'testToken',
          func:'postElHis',
          data:el_his /* POST request */
      }

      //const self = this
      
      axios.post(state.pathAxios, params).then(function (res) {

          console.log(res.data.result)
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
