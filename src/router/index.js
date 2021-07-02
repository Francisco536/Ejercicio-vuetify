import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registro from '../views/Registro.vue'
import inicio from '../views/inicio.vue'
import firebase from 'firebase'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: inicio,
    meta: {
       requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.matched.some(ruta =>ruta.meta.requireAuth)){
    const user= firebase.auth().currentUser;
    if(user){
      next();
    }else{
      next({
        name: 'Home'
      })
    }
  }else{
    next()
  }
})
export default router
