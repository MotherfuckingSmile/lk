// Объявление компонентов:
// Авторизация
const Login = () => import('~/pages/auth/login').then(m => m.default || m)

// Кабинет
const Cabinet = () => import('~/pages/cabinet').then(m => m.default || m)
const CabinetAccount = () => import('~/pages/cabinet/account').then(m => m.default || m)
const CabinetService = () => import('~/pages/cabinet/service').then(m => m.default || m)

// Настройки
const Settings = () => import('~/pages/settings').then(m => m.default || m)

// Построение маршрутов
export default [

  // Авторизация
  { path: '/login', name: 'login', component: Login },

  // Кабинет
  { path: '/', redirect: 'cabinet/account' },
  { path: '/cabinet',
    component: Cabinet,
    children: [
      { path: '', redirect: { name: 'cabinet.account' } },
      { path: '/cabinet/account', name: 'cabinet.account', component: CabinetAccount },
      { path: '/cabinet/service', name: 'cabinet.service', component: CabinetService }
    ]
  },

  // Настройки
  { path: '/settings', name: 'settings', component: Settings },

  // Страница не найдена
  { path: '*', component: require('~/pages/errors/404.vue') }

]
