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
import LinkedinIcon from "vue-material-design-icons/Linkedin.vue"
import GithubIcon from "vue-material-design-icons/GithubBox.vue"
import FacebookIcon from "vue-material-design-icons/Facebook.vue"
import SoccerIcon from "vue-material-design-icons/Soccer.vue"
import LibraryIcon from "vue-material-design-icons/Library.vue"
import AirplaneIcon from "vue-material-design-icons/AirplaneTakeoff.vue"
import BeachIcon from "vue-material-design-icons/Beach.vue"
import HeadphonesIcon from "vue-material-design-icons/Headphones.vue"
import RunIcon from "vue-material-design-icons/Run.vue"
import MovieIcon from "vue-material-design-icons/Movie.vue"
Vue.component("js-icon", JsIcon)
Vue.component("php-icon", PhpIcon)
Vue.component("vuejs-icon", VuejsIcon)
Vue.component("angular-icon", AngularIcon)
Vue.component("database-icon", DatabaseIcon)
Vue.component("git-icon", GitIcon)
Vue.component("json-icon", JsonIcon)
Vue.component("laravel-icon", LaravelIcon)
Vue.component("linkedin-icon", LinkedinIcon)
Vue.component("github-icon", GithubIcon)
Vue.component("facebook-icon", FacebookIcon)
Vue.component("soccer-icon", SoccerIcon)
Vue.component("library-icon", LibraryIcon)
Vue.component("airplane-icon", AirplaneIcon)
Vue.component("beach-icon", BeachIcon)
Vue.component("headphones-icon", HeadphonesIcon)
Vue.component("run-icon", RunIcon)
Vue.component("movie-icon", MovieIcon)

new Vue({
  render: h => h(App)
}).$mount('#app')
