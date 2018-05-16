import Vue from 'vue'
import Router from 'vue-router'

import '../assets/css/header.css'
import '../assets/css/reset.css'
import '../assets/css/footer.css'

Vue.use(Router)

import index from '../views/index'
import home from '../views/home'
import shop from '../views/Shop'
import mPhone from '../views/mPhone'
import pageOne from '../views/page_one'
import pageTwo from '../views/page_two'
import pageThree from '../views/page_three'
import pageFour from '../views/page_four'
import pageFive from '../views/page_five'
import Item from '../views/Item'
import Cart from '../views/Cart'
import CheckOut from '../views/checkOut'


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[ {
        path: '/home',
        name: 'home',
        component: home
      },
      {
        path: '/shop',
        name: 'shop',
        component: shop
      },
      {
        path: '/mPhone',
        name: 'mPhone',
        component: mPhone
      },
      {
        path: '/pageOne',
        name: 'pageOne',
        component: pageOne
      },
      {
        path: '/pageTwo',
        name: 'pageTwo',
        component: pageTwo
      },
      {
        path: '/pageThree',
        name: 'pageThree',
        component: pageThree
      },
      {
        path: '/pageFour',
        name: 'pageFour',
        component: pageFour
      },
      {
        path: '/pageFive',
        name: 'pageFive',
        component: pageFive
      },
      {
        path: '/Item',
        name: 'Item',
        component: Item
      },
      {
        path: '/Cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: '/CheckOut',
        name: 'CheckOut',
        component: CheckOut
      }
    ]
    }

  ]
})
