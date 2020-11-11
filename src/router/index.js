import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout/layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',

    component: layout,
    children: [
      {
        path: '/',
        name: 'home',
        
        component:()=>import('../views/Home.vue') ,
        meta:{
          title: '首页'
        },

      } ,{
        path: '/class',
        name: 'class',
        component:()=>import('../views/layout/class/class.vue'),
        meta:{
          title: '分类'
        },

      },
      ,{
        path: '/cart',
        name: 'cart',
        component:()=>import('../views/layout/cart/cart.vue'),
        meta:{
          title: '购物车'
        },

      },
      ,{
        path: '/mine',
        name: 'mine',
        component:()=>import('../views/layout/mine/mine.vue'),
        meta:{
          title: '我的'
        },

      }
     
    ]
  },
  //zhuce
  {
    path: '/register',
    name: 'register',
    component:()=>import('../views/register/register'),
    meta:{
      title: '注册'
    },

  },
  {
    path: '/login',
    name: 'login',
    component:()=>import('../views/register/login'),
    meta:{
      title: '登录'
    },

  },
  {
    path: '/detail',
    name: 'detail',
    component:()=>import('../views/detail/detail'),
    meta:{
      title: '商品详情'
    },

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,form,next) =>{
//   //动态改变浏览器的标题
//   document.title = to.meta.title
//   next()
//   let user = localStorage.getItem('user')
//   if(to.path === '/login' || to.path === '/register'){next()}else{
//     console.log(user);
//     user ? next():(next('/login') || next('/register'))
//   }

// })
  

export default router
