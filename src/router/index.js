import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Formulaire from '@/components/Formulaire'
import About from '@/components/About'
import List from '@/components/List'

import List1 from '@/components/Lists/List1'
import List2 from '@/components/Lists/List2'
import List3 from '@/components/Lists/List3'

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
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      children: [
        {
          path: '/list1',
          name: 'List1',
          component: List1
        },
        {
          path: '/list2',
          name: 'List2',
          component: List2
        },
        {
          path: '/list3',
          name: 'List3',
          component: List3
        }
      ]
    }
  ]
})
