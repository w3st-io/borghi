// [IMPORT] //
import aos from 'aos'
import { BootstrapVue } from 'bootstrap-vue'
import Viewer from 'v-viewer'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Vue from 'vue'
import Editor from 'vue-editor-js/src/index'
import VideoBg from 'vue-videobg'
import VueHeadful from 'vue-headful'
import JsonCSV from 'vue-json-csv'
import VueLazyload from 'vue-lazyload'
import VueYouTubeEmbed from 'vue-youtube-embed'
import ZoomOnHover from 'vue-zoom-on-hover'
import 'aos/dist/aos.css'
import 'viewerjs/dist/viewer.css'
import 'tiny-slider/src/tiny-slider.scss'


// [IMPORT] Personal //
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/styles/bootstrap-override.scss'
import '@/assets/styles/style.scss'
import '@/vee-validation-rules'


// [USE] //
Vue.use(ZoomOnHover)
Vue.use(BootstrapVue)
Vue.use(Editor)
Vue.use(Viewer)
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: require('./assets/media/err.png'),
	loading: require('./assets/media/loading.gif'),
	attempt: 1
})
Vue.use(VueYouTubeEmbed)


// [GLOBAL-COMPONENTS] //
Vue.component('downloadCsv', JsonCSV)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('VideoBG', VideoBg)
Vue.component('VueHeadful', VueHeadful)


// [EXPORT] Event Bus //
export const EventBus = new Vue()


// [CONFIG + RENDER] //
Vue.config.productionTip = false
new Vue({
	router,
	store,
	created() { aos.init() },
	render: h => h(App),
}).$mount('#app')