import Vue from 'nativescript-vue'
import App from './components/App'
import {
  TNSFontIcon,
  fonticon
} from "nativescript-fonticon"; // require the couchbase module

import "./app.scss";
import router from "./services/router";
import Navigator from "nativescript-vue-navigator";

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  mdi: "./assets/materialdesignicons.css"
};
TNSFontIcon.loadCss();

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
Vue.prototype.$router = router;
Vue.prototype.$route = null;

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)
Vue.filter("fonticon", fonticon);
Vue.use(Navigator, {
  routes: router.routes
});

Vue.mixin({
  data() {
    return {
      isLoading: false
    };
  },
  beforeCreate() {
    if (!this.$route) {
      this.$route = this.$navigator.route;
    }
  }
});

new Vue({
  render: h => h(App)
}).$start()