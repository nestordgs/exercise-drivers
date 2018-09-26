import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/DriversList.vue'
import Info from './views/DriversInfo.vue'
import Create from './views/DriversCreate.vue'
import Edit from './views/DriversEdit.vue'
import DriverForm from '@/components/DriverForm'

Vue.use(Router)

Vue.component('driver-form', DriverForm)

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
      path: '/drivers',
      name: 'drivers.index',
      component: List
    },
    {
      path: '/drivers/:id',
      name: 'drivers.info',
      component: Info,
      beforeEnter: (to, from, next) => {
				return (to.params.id === 'create') ? next({name: 'drivers.create'}) : next()
			}
    },
    {
      path: '/drivers/create',
      name: 'drivers.create',
      component: Create
    },
    {
      path: '/drivers/:id/edit',
      name: 'drivers.edit',
      component: Edit
    },
  ]
})