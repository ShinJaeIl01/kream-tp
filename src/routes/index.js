import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: () => import('~/views/Home.vue')
    },
    {
      path: '/my',
      component: () => import('~/components/MyPage/My.vue'),
      meta: {
        // 로그인헤야만 접속 할 수 있게 설정
        auth: true
      },
      children: [
        {
          path: '',
          component: () => import('~/components/MyPage/MyMain.vue')
        },
        {
          path: 'buying',
          component: () => import('~/components/MyPage/MyBuying.vue')
        },
        {
          path: 'profile',
          component: () => import('~/components/MyPage/MyProfile.vue')
        },
        {
          path: 'account',
          component: () => import('~/components/MyPage/MyAccount.vue')
        },
      ]
    },
    {
      path: '/login',
      component: () => import('~/views/SignIn.vue'),
    },
    {
      path: '/join',
      component: () => import('~/views/SignUp.vue'),
    },
    {
      path: '/search',
      component: () => import('~/components/Search.vue')
    },
    {
      path: '/admin',
      component: () => import('~/components/AdminPage.vue'),
    },
    {
      path: '/:notfound(.*)*',
      component: () => import('~/views/NotFound.vue')
    },
  ]
})
