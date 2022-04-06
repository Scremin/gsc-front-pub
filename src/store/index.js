import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    // overlay main app
    main_overlay: true,
    footer_overlay: true,
    liberar_menu: false,

    termos_overlay: false,
    politica_overlay: false,

    // CARRINHO DE COMPRAS
    listCar: [],
    elem_aux_inteiro: 0,
    tx_entrega: 0,
    tx_entrega2: 15,
    tx_entrega_final: 0,
    qntProds: 0, // int
    valorTotal: 0.0, // float sob filter
    pedidoOn: false,
    info_user_pdd: {}, // JSON com nome, adress, phone e (pass ou new_pass)
    entregaTipo1: true, // Entrega em covilhã
    entregaTipo2: false, // Entrega nacional
    valorTotalFinal: '', // float sob filter

    // MAIN MENU DROP
    active_tab: 0,
    changeMenuDrop: false,
    exibirTabs: true,
    geralLiCateg: [], // recebe a lista de categorias ao entrar na home page
    auth_router: true, // autorização de abertura de drop menu principal.

    // PAG CATEGORIA
    categSelected: null,
    categ_flag: true, // true -> exibe categs, false -> exibir lista de prods específica.
    categ_index: 0,
    AlreadyOnPage: false, // contra duplicação de chamada (página categorias)
    gatBebidas: 0,
    numCategBebida: 10000, // 10000 => não existe categoria bebida entre as categorias no db.

    // PAG PRODUTOS
    // -- pág descrição dos produtos
    prodDesc: '', // descrição do produto
    tmpIDP: 0,
    tmpIDC: 0,
    tmpNomeProd: '',
    tmpPrecoProd: '',
    tmpImgProd: '',

    // MAIN FRONT PAGE
    initContador: true,
    pararCarousel: false,
    visibleSlide: 0,
    item_escolhido: 0, // item da lista carousel ao chamar a aux page.
    items: null, // Lista com o conteúdo carousel front. (large)
    items_tx_Small: null, // Lista com o conteúdo carousel front. (small)
    shadowCarousel: '0 2px 10px rgba(0, 0, 0, 0.65)',

    // Página do cliente.
    cadastro_ativo: false, // init false
    login_ativo: true, // init true
    client_ativo: false, // init false
    //
    MeuCadastro: false,
    MeusPedidos: true,
    //
    snackbar: false, // box info para a edição do cadastro.
    //
    Aucc: false, // auth c.
    c_name: '', // nome único por cliente.
    tmpAdress: '',
    tmpPhone: '',
    tmpPwd: '',
    tmpConfirm: '',
    tmpLiPddsClient: [],
    flag_cad: 0, // flag == 1 indica cadastro.

    showNotPdds: true,
  },
  getters: {
    // getter 1.
    valorTotal(state) {

      state.elem_aux_inteiro = state.listCar.map(p => p.precoP * 1).reduce((total, atual) => total + atual, 0)
      
      if(state.entregaTipo1){
        return state.elem_aux_inteiro + state.tx_entrega
      }

      if(state.entregaTipo2){
        return state.elem_aux_inteiro + state.tx_entrega2
      }
      
      return state.elem_aux_inteiro + state.tx_entrega // Segurança de retorno.

    },
    // getter 2.
    qntProds(state) {
      return state.listCar.length
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
