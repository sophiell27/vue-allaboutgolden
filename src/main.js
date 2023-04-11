import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { initFlowbite } from 'flowbite';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import App from './App.vue';
import './assets/index.css';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
localize({ zh_TW: zhTW });
configure({
  generateMessage: localize({
    zh_TW: zhTW,
  }),
});
setLocale('zh_TW');
gsap.registerPlugin(ScrollTrigger);
AOS.init();
initFlowbite();

const app = createApp(App);
app.component('VForm', Form);
app.component('VField', Field);
app.component('VErrorMessage', ErrorMessage);
app.component('LoadingComponent', Loading);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(gsap);
app.use(VueAxios, axios);
app.use(VueSweetalert2);
pinia.use(({ store }) => {
  const newStore = store;
  newStore.router = markRaw(router);
  newStore.Swal = markRaw(VueSweetalert2);
});
app.config.globalProperties.$gsap = gsap;
app.config.globalProperties.$ScrollTrigger = ScrollTrigger;
app.config.globalProperties.$aos = AOS;
app.mount('#app');
