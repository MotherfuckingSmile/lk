const Home = () => import('~/pages/home').then(m => m.default || m)

const Login = () => import('~/pages/auth/login').then(m => m.default || m)

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },

  { path: '*', component: require('~/pages/errors/404.vue') }
]
