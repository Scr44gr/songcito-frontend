import Vue from 'vue'
import App from './App.vue'
import Chakra from '@chakra-ui/vue'
import { faCog, faPlay, faPause, faHeart, faList, faHistory} from '@fortawesome/free-solid-svg-icons';

Vue.use(Chakra, {
  icons: {
    // Here we state that we use `fa`
    // icons library for Chakra's
    // internal icon parser
    iconPack: 'fa',
    iconSet: {
      faCog,
      faPlay,
      faPause,
      faHeart,
      faList,
      faHistory
    }
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
