import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Autenticacao.vue'),
      children: [
        {
          path: '/',
          name: 'AdminPage',
          component: () => import(/* webpackChunkName: "about" */ './views/AdminPage.vue'),
        },
        {
          path: '/',
          name: 'dashboard',
          component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
        },
        {
          path: 'sobre-nos',
          name: 'Sobre nós',
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
          props: true
        },
        {
          path: 'parceiros',
          name: 'Parceiros',
          component: () => import(/* webpackChunkName: "about" */ './views/Partners.vue'),
          props: true
        },
        {
          path: 'servicos',
          name: 'Carta de Serviços',
          component: () => import(/* webpackChunkName: "about" */ './views/Services.vue'),
          props: true
        },
        {
          path: 'portfolio',
          name: 'Portfólio',
          component: () => import(/* webpackChunkName: "about" */ './views/Portfolio.vue'),
          props: true
        },
        {
          path: 'membros',
          name: 'Membros',
          component: () => import(/* webpackChunkName: "about" */ './views/Members.vue'),
          props: true
        },
        {
          path: 'contato',
          name: 'Contato',
          component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue'),
          props: true
        },
      ]
    },
  ]
})
