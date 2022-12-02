const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/tuto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'v2', component: () => import('pages/TutoPage.vue') },
      { path: 'v3', component: () => import('pages/TutoPageVue3.vue') }
    ]
  },
  {
    path: '/tp1',
    component: () => import('layouts/tp1/AppLayout.vue'),
    children: [
      { path: 'dashboard', component: () => import('src/pages/tp1/AccueilApp.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
