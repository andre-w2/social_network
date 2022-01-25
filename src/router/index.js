import { createRouter, createWebHashHistory } from 'vue-router'
import Home from  '../views/Home.vue'
import Register from  '../views/Register.vue'
import Login from  '../views/Login.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/register',
		name: 'register',
		component: Register
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
