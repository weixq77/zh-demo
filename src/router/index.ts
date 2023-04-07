import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import store from '../store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/column/:id',
    name: 'column',
    component: () => import('../views/ColumnDetail.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreatePost.vue'),
    meta: { requiredLogin: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: { redirectAlreadyLogin: true }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// 全局路由处理
router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: 'login' });
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next('/');
  } else {
    next();
  }
});

export default router;
