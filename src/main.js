import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

//开启debug模式
Vue.config.debug = true

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Element)

import home from './components/home.vue'
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes:[
		{
			path: '/',
			component: home,
		},
	]
})

const app = new Vue({
  router: router,	
  render: h => h(App)
}).$mount("#app")

