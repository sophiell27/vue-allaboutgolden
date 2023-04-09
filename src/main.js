import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
//axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// css
import './assets/index.css';
// vee-validate
import { Form, Field, ErrorMessage } from 'vee-validate';
import { defineRule, configure } from 'vee-validate';
// import customIcon from "@assets/images/customLoader.svg"
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import AllRules from '@vee-validate/rules';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
import { localize, setLocale } from '@vee-validate/i18n';
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json';

localize({ zh_TW });
configure({
  generateMessage: localize({
    zh_TW,
  }),
});
setLocale('zh_TW');
//gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
//aos
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { initFlowbite } from 'flowbite';
initFlowbite();
// sweet alert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);
app.component('VForm', Form);
app.component('VField', Field);
app.component('VErrorMessage', ErrorMessage);
app.component('loading', Loading);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(gsap);
app.use(VueAxios, axios);
app.use(VueSweetalert2);
pinia.use(({ store }) => {
  store.router = markRaw(router);
  store.Swal = markRaw(VueSweetalert2);
});
app.config.globalProperties.$gsap = gsap;
app.config.globalProperties.$ScrollTrigger = ScrollTrigger;
app.config.globalProperties.$aos = AOS;
app.mount('#app');
