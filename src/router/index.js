import Vue from 'vue'
import VueRouter from 'vue-router'
import MainFront from '../components/MainFront.vue'
import FaqGsc from '../components/FaqGsc.vue'
import CategoriasPage from '../components/CategoriasPage.vue'
import QuemSomos from '../components/QuemSomos.vue'
import SaibaMais from '../components/SaibaMais.vue'
import Carrinho from '../components/Carrinho.vue'
import FinalPedido from '../components/FinalPedido.vue'
import ProdutoPage from '../components/ProdutoPage.vue'
import DescricProd from '../components/DescricProd.vue'
import RcvCarousel from '../components/RcvCarousel.vue'
import ClientMain from '../components/ClientMain.vue'

import Termos from '../components/Termos.vue'
//import AddProdCateg from '../components/AddProdCateg.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainFront',
    component: MainFront
  },
  {
    path: '/faq',
    name: 'Faq',
    component: FaqGsc
  },
  {
    path: '/MaisInformações',
    name: 'RcvCarousel',
    component: RcvCarousel
  },
  {
    path: '/MinhaGreen',
    name: 'ClientMain',
    component: ClientMain
  },
  {
    path: '/MinhasCompras',
    name: 'CategoriasPage',
    component: CategoriasPage
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/QuemSomos',
    name: 'QuemSomos',
    component: QuemSomos
  },
  {
    path: '/SaibaMais',
    name: 'SaibaMais',
    component: SaibaMais
  },
  {
    path: '/Carrinho',
    name: 'Carrinho',
    component: Carrinho
  },
  {
    path: '/ProdutoPage',
    name: 'ProdutoPage',
    component: ProdutoPage
  },
  {
    path: '/DescricaoDoProduto',
    name: 'DescricProd',
    component: DescricProd
  },
  {
    path: '/FinalPedido',
    name: 'FinalPedido',
    component: FinalPedido
  },
  /*{
    path: '/AddProdCateg',
    name: 'AddProdCateg',
    component: AddProdCateg
  },*/
  {
    path: '/exibtermosepoliticas',
    name: 'Termos',
    component: Termos
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
