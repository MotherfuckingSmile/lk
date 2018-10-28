// Объявление компонентов:
// Авторизация
const Login = () => import('~/pages/auth/login').then(m => m.default || m)

// Кабинет
const Cabinet = () => import('~/pages/cabinet').then(m => m.default || m)
const CabinetAccount = () => import('~/pages/cabinet/account').then(m => m.default || m)
const CabinetService = () => import('~/pages/cabinet/service').then(m => m.default || m)
const CabinetServiceBlock = () => import('~/pages/cabinet/serviceBlock').then(m => m.default || m)
const CabinetServiceSwitch = () => import('~/pages/cabinet/serviceSwitch').then(m => m.default || m)
const CabinetContacts = () => import('~/pages/cabinet/contacts').then(m => m.default || m)
const CabinetCards = () => import('~/pages/cabinet/cards').then(m => m.default || m)
const CabinetBalances = () => import('~/pages/cabinet/balances').then(m => m.default || m)
const CabinetLog = () => import('~/pages/cabinet/log').then(m => m.default || m)

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
      { path: '/cabinet/service', name: 'cabinet.service', component: CabinetService },
      { path: '/cabinet/service/block', name: 'cabinet.serviceBlock', component: CabinetServiceBlock },
      { path: '/cabinet/service/switch', name: 'cabinet.serviceSwitch', component: CabinetServiceSwitch },
      { path: '/cabinet/contacts', name: 'cabinet.contacts', component: CabinetContacts },
      { path: '/cabinet/cards', name: 'cabinet.cards', component: CabinetCards },
      { path: '/cabinet/balances', name: 'cabinet.balances', component: CabinetBalances },
      { path: '/cabinet/log', name: 'cabinet.log', component: CabinetLog }
    ]
  },

  // Настройки
  { path: '/settings', name: 'settings', component: Settings },

  // Страница не найдена
  { path: '*', component: require('~/pages/errors/404.vue') }

]
