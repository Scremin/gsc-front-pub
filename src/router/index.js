import Vue from 'vue'
import VueRouter from 'vue-router'

import Termos from '@/components/Termos.vue'

import Home from '@/components/home/Home.vue'
import DivulgacaoCarousel from '@/components/home/DivulgacaoCarousel.vue'
import ClientHome from '@/components/cliente/ClientHome.vue'

import QuemSomos from '@/components/quemSomos/QuemSomos.vue'
import ConhCannabis from '@/components/conhCannabis/ConhCannabis.vue'

import Categorias from '@/components/venda/Categorias.vue'
import Produtos from '@/components/venda/Produtos.vue'
import DescricaoProduto from '@/components/venda/DescricaoProduto.vue'

import Carrinho from '@/components/carrinho/Carrinho.vue'
import CarrinhoPageB from '@/components/carrinho/CarrinhoPageB.vue'
import CarrinhoPageC from '@/components/carrinho/CarrinhoPageC.vue'
import CarrinhoPageD from '@/components/carrinho/CarrinhoPageD.vue'

import store from '@/store/index.js'

import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/termos',
    name: 'Termos',
    component: Termos
  },
  {
    path: '/divulg',
    name: 'DivulgacaoCarousel',
    component: DivulgacaoCarousel
  },
  {
    path: '/clienthome',
    name: 'ClientHome',
    component: ClientHome
  },
  {
    path: '/quemsomos',
    name: 'QuemSomos',
    component: QuemSomos
  },
  {
    path: '/conhCannabis',
    name: 'ConhCannabis',
    component: ConhCannabis
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: Categorias
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: Produtos
  },
  {
    path: '/descricao',
    name: 'DescricaoProduto',
    component: DescricaoProduto
  },
  {
    path: '/carrinho',
    name: 'Carrinho',
    component: Carrinho
  },
  {
    path: '/fechamento',
    name: 'CarrinhoPageB',
    component: CarrinhoPageB
  },
  {
    path: '/fechamentoC',
    name: 'CarrinhoPageC',
    component: CarrinhoPageC
  },
  {
    path: '/fechamentoD',
    name: 'CarrinhoPageD',
    component: CarrinhoPageD
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/* Antes de cada navega????o a fun????o ?? chamada */
router.beforeEach((to, from , next) => {

  //console.log('Em rota...')

  if(to.path == '/') {
                
    store.state.authForShow = true
  }
  else{

    store.state.authForShow = false // se n??o estiver => auth blocked
  }

  //console.log('Estou na home:', store.state.authForShow)
  
  store.commit('updateCartList') // sem param

  next() // sem a chamada next() a rota ?? travada.

})

export default router
