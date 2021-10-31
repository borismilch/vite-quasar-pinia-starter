import { createRouter, createWebHistory, RouteRecordRaw  } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/channel',
    name: 'Channel',
    component: () => import('../views/channel.vue')
  },
  {
    path: '/library',
    name: 'Lib',
    component: () => import('../views/library.vue')
  },

  {
    path: '/playlist',
    name: 'playList',
    component: () => import('../views/playlist.vue')
  },
  {
    path: '/subs',
    name: 'Subs',
    component: () => import('../views/subs.vue')
  },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router