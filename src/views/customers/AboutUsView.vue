<script>
import DogComponent from '@/components/DogComponent.vue';

export default {
  data() {
    return {};
  },
  components: {
    DogComponent,
  },
};
</script>
<template>
  <div class="container flex flex-col items-center pt-10 md:pt-16">
    <h2 class="text-h4 mb-8 font-bold  md:text-h2 ">“Home is where the golden is.”</h2>
    <p class="px-20 md:px-40 mb-20">
      這裡是黃金獵犬的世界，歡迎每一個被黃金獵犬感動過的人。不論生活有多麼憂慮，也還有一方小天地讓我們可以暫時拋卻煩惱。不論是否能夠擁有一隻黃金獵犬，也希望能讓大家把那傻呼呼的笑容帶回家，治癒疲累的心靈。
    </p>
    <DogComponent></DogComponent>
  </div>
</template>
