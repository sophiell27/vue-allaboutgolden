<script>
import { gsap, Back, Bounce } from 'gsap';
import PillBtnComponent from '@/components/PillBtnComponent.vue';

export default {
  components: {
    PillBtnComponent,
  },
  methods: {
    dogAnimate() {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
      });
      tl.set('.dogAni, .ballAni', { opacity: 0 })
        // .from('.bannerLogo', { opacity: 'random(0.5, 1.5)', duration: 1 })
        .fromTo('.dogAni', {
          x: -200,
          rotation: 10,
        }, {
          x: 0,
          opacity: 100,
          rotation: 0,
          duration: 1.5,
        }, '<')
        .from(
          '.ballAni',
          {
            opacity: 0, x: 200, rotation: 360, duration: 1.5, ease: Back.easeOut,
          },
        )
        .from('.dogAni', { y: 20, ease: Bounce.easeOut }, '<');
    },
  },

  mounted() {
    this.dogAnimate();
  },
};
</script>
<template>
  <section
    class="bg-[url('@/assets/images/layout/mainBanner-sm.svg')] bg-cover -mt-24  pb-[184px] mb-6 overflow-hidden md:-mt-[108px] md:bg-[url('@/assets/images/layout/mainBanner-lg.svg')]">
    <div class="container pt-48">
      <img src="../assets/images/layout/All-About-Golden-Retrievers-text.svg" alt="All about golden retrievers"
        class="w-[200px] mb-4 lg:w-[340px] lg:mb-8">
      <h3 class="text-lg font-bold mb-4 lg:text-h2 lg:mb-16">讓您輕鬆一次購足
        <br class="mb-1 md:hidden">高品質的<span class="px-1 ml-1 bg-secondary text-white inline-block">黃金獵犬精品</span>
        <br class="mb-2">
        享受免運優惠！
      </h3>
      <!-- <RouterLink to="/products"> -->
        <div class="relative z-10">
          <PillBtnComponent>
          大家都買什麼
        </PillBtnComponent>
        </div>
      <!-- </RouterLink> -->
      <div class="w-full relative">
        <img src="@/assets/images/dog.svg" alt="dog image"
          class="dogAni absolute -left-10 -top-20 w-[400px] overflow-hidden md:w-[500px] md:left-10 md:-top-32 lg:w-[600px] lg:left-52">
        <img src="@/assets/images/dogBall.svg" alt="football image"
          class="ballAni absolute top-20 left-[300px] w-[135px] md:w-44 md:left-96 lg:left-[700px]">
      </div>
    </div>
  </section>
</template>
