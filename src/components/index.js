import Vue from 'vue'
import Child from './Child'
import ListItem from './ListItem'
import ListItemLink from './ListItemLink'
import LogoHeader from './LogoHeader'
import BackHeader from './BackHeader'
import InfiniteLoading from 'vue-infinite-loading'
import { HasError, AlertError, AlertSuccess } from 'vform'

// Components that are registered globaly.
[
  Child,
  InfiniteLoading,
  ListItem,
  ListItemLink,
  LogoHeader,
  BackHeader,
  HasError,
  AlertError,
  AlertSuccess
].forEach(Component => {
  Vue.component(Component.name, Component)
})
