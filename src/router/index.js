import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Formulaire from '@/components/Formulaire'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/form',
      name: 'Formulaire',
      component: Formulaire
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
