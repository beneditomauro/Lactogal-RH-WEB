import Vue from 'vue'
import Router from 'vue-router'
import Feed from './views/Feed.vue'
import MyTasks from './views/MyTasks.vue'
import MyTasksCompleted from './views/MyTasksCompleted.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import firebase from 'firebase';


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Feed',
      component: Feed,
      meta:
      {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:
      {
        requiresGuest: true
      }
  
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta:
      {
        requiresGuest: true
      }
      
    },
    {
      path: '/my',
      name: 'mywaiting',
      component: MyTasks,
      meta:
      {
        requiresAuth: true
      }
      
    },
    {
      path:'/my/completed',
      name: 'mycompleted',
      component: MyTasksCompleted,
      meta:
      {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next)=>{
  //check require
  if(to.matched.some(record => record.meta.requiresAuth)){
    
    if(!firebase.auth().currentUser){
      console.log('nao logado')
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }else{
      // proceed to the route
      next();
    }
  }else if(to.matched.some(record => record.meta.requiresGuest)){
     // proceed to the route
     if(firebase.auth().currentUser){
      console.log('Nopesdfgh')
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }else{
      // proceed to the route
      next();
    }
  }
});

export default router;
