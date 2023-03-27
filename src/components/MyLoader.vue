<script>

// import icon from "@/assets/images/paw-icon.svg"
// export default {
//   data(){
//     return {
//         // icon: icon
//     }
//   },
//   // props: ['width'],


//   // your component's options
// }
// import {defineComponent} from 'vue';
import { gsap } from 'gsap';
export default {
  name: 'MyLoader',
  props: {
    color: {
      type: String,
      default: '#000'
    },
    height: {
      type: Number,
      default: 40
    },
    width: {
      type: Number,
      default: 40
    },
    loader: 'MyLoader'
  },
  data() {
    return {
    }
  },
  mounted() {
    const tl = gsap.timeline({
      repeat: -1
    });

    tl
      .set(".paw1, .paw2, .paw3", { opacity: 0.5 })
      .to(".paw1", { opacity: 0, duration: 0.25 })
      .to(".paw2", { opacity: 0, duration: 0.25 })
      .to(".paw3", { opacity: 0, duration: 0.25 })
  }
}

</script>

<template>
  <div class="my-loader">
    <img src="@/assets/images/paw-icon.svg" alt="" class="mb-8 ml-8 paw3">
    <img src="@/assets/images/paw-icon.svg" alt="" class="mb-7 paw2">
    <img src="@/assets/images/paw-icon.svg" alt="" class="paw1">
  </div>
</template>
