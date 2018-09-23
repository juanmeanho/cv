import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

import JsIcon from "vue-material-design-icons/LanguageJavascript.vue"
import PhpIcon from "vue-material-design-icons/LanguagePhp.vue"
import VuejsIcon from "vue-material-design-icons/Vuejs.vue"
import AngularIcon from "vue-material-design-icons/Angular.vue"
import DatabaseIcon from "vue-material-design-icons/Database.vue"
import GitIcon from "vue-material-design-icons/Git.vue"
import JsonIcon from "vue-material-design-icons/Json.vue"
import LaravelIcon from "vue-material-design-icons/Laravel.vue"
Vue.component("js-icon", JsIcon)
Vue.component("php-icon", PhpIcon)
Vue.component("vuejs-icon", VuejsIcon)
Vue.component("angular-icon", AngularIcon)
Vue.component("database-icon", DatabaseIcon)
Vue.component("git-icon", GitIcon)
Vue.component("json-icon", JsonIcon)
Vue.component("laravel-icon", LaravelIcon)

new Vue({
  render: h => h(App)
}).$mount('#app')
