const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/tp1',
    children: [
      {
        path: 'dashboard',
        component: () => import('layouts/tp1/AppLayout.vue'),
        children: [
          { path: '', component: () => import('src/pages/tp1/AccueilApp.vue') }
        ]
      },
      {
        path: 'list/:id',
        component: () => import('layouts/tp1/AppLayoutList.vue'),
        children: [
          { path: '', component: () => import('src/pages/tp1/PageListApp.vue') }
        ]
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
