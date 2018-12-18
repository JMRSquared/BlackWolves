import Home from '../components/Home.vue'
import Login from '../components/Login.vue'

var router = {};

router.routes = {
  /** 
   * Main Routes
   */
  '/home': {
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
      title: 'Home',
      authLevel: 0
    },
  },
  '/login': {
    name: 'login',
    path: '/login',
    component: Login,
    meta: {
      title: 'Login',
      authLevel: 0
    },
  }
};

export default router;