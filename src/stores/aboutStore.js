import { defineStore } from "pinia";

import { gsap } from 'gsap'

export default defineStore("aboutStore", {
    state: () => ({
        // state here
      }),
    actions: {
        
        showDog(){
           gsap.to(".dog", {y: 50, duration:0.5, ease: "bounce"})
        }
    }
})