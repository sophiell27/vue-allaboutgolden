import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';


import App from './App.vue';
import router from './router';

//axios 
import axios from 'axios'
import VueAxios from 'vue-axios'


// vee-validate
import { Form,Field,ErrorMessage } from 'vee-validate';
import { defineRule, configure } from 'vee-validate';


import AllRules from '@vee-validate/rules';
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});
import { localize, setLocale } from '@vee-validate/i18n';
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json';
localize({ zh_TW  });
configure({
    generateMessage: localize({
      zh_TW
    })
  });
  setLocale("zh_TW")


//gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

//aos
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

import { initFlowbite } from 'flowbite';
initFlowbite();
// import './assets/main.css'
import "./assets/index.css"

const app = createApp(App)

app.component("VForm", Form,)
app.component("VField", Field,)
app.component("VErrorMessage", ErrorMessage)

const pinia = createPinia();
// console.log(markRaw);
pinia.use(({ store }) => {
  store.router = markRaw(router)
  })
app.use(pinia)
app.use(router);
app.use(gsap);
app.use(VueAxios, axios)

pinia.use(({ store }) => {
    store.router = markRaw(router)
    })

app.config.globalProperties.$gsap = gsap;
app.config.globalProperties.$ScrollTrigger = ScrollTrigger;
app.config.globalProperties.$aos = AOS;
app.mount('#app')
