import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueFire from "vuefire"

//开启debug模式
Vue.config.debug = true

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Element)
Vue.use(VueFire)

import home from './components/home.vue'
import firebase from './components/firebase.vue'
import markdown from './components/markdown.vue'
import useModal from './components/useModal.vue'
import elasticview from './components/elasticview.vue'
import github from './components/github.vue'
import grid from './components/gridview.vue'
import tree from './components/treeview.vue'
import svg from './components/svg.vue'
import todo from './components/todo.vue'
import select2 from './components/select2.vue'

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes:[
		{
			path: '/',
			component: home,
		},
		{
			path: '/firebase',
			component: firebase
		},
		{
			path: '/markdown',
			component: markdown
		},
		{
			path: '/modal',
			component: useModal
		},
		{
			path: '/elastic',
			component: elasticview
		},
		{
			path: '/github',
			component: github
		},
		{
			path: '/grid',
			component: grid
		},
		{
			path: '/tree',
			component: tree
		},
		{
			path: '/svg',
			component: svg
		},
		{
			path: '/todo',
			component: todo
		},
		{
			path: '/select2',
			component: select2
		}

	]
})

const app = new Vue({
  router: router,	
  render: h => h(App)
}).$mount("#app")

