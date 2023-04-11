<script>
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    const dogImgs = this.$gsap.utils.toArray(this.$refs.dogImg);
    dogImgs.forEach((dogImg) => {
      ScrollTrigger.create({
        trigger: dogImg,
        start: 'top 80%',
        end: 'bottom',
        animation: this.$gsap.timeline({ repeat: 2 })
          .to('.dogImg', { y: '-=30', ease: Power2.easeOut })
          .to('.dogImg', {
            y: '+=30', transformOrigin: 'bottm', scaleY: 0.9, ease: Power2.easeIn,
          }),
      });
    });
  },
};
</script>
<template>
  <img src="../assets/images/dog.svg" alt="" class="dogImg w-24 md:w-64" ref="dogImg">
</template>
