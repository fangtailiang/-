import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageTransition from "../components/PageTransition"
import Info from "@/components/Info"
import Mine from "@/components/Mine"
import Fenlei from "@/components/Fenlei"
import Cart from "@/components/Cart"
import Detail from "@/components/Detail"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: PageTransition,
       children:[
       {
       	 path: '/',
		      name: 'Info',
		      component: Info
       },
       {
		      path: '/fenlei',
		      name: 'Fenlei',
		      component: Fenlei
		    },
		    {
		      path: '/cart',
		      name: 'Cart',
		      component: Cart
		    },
		    {
		      path: '/mine',
		      name: 'Mine',
		      component: Mine
		    },
		    {
		      path: '/detail',
		      name: 'Detail',
		      component: Detail
		    }
       ]
    }
  ]
})
