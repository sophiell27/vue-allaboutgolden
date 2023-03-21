<script>
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// import { gsap, Power2 } from 'gsap/dist/gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);


export default {
    mounted() {
        const dogImgs = this.$gsap.utils.toArray(this.$refs.dogImg)
        dogImgs.forEach(dogImg => {
            ScrollTrigger.create({
                trigger: dogImg,
                start: "top 80%",
                end: "bottom",
                animation: this.$gsap.timeline({repeat: 2})
                .to(".dogImg", { y: "-=30",ease: Power2.easeOut})
                .to(".dogImg", {y: "+=30", transformOrigin: "bottm", scaleY: 0.9,ease: Power2.easeIn })
            })
        })
        // const dogImgs = this.$gsap.utils.toArray(this.$refs.dogImg2)

        // dogImgs.forEach(dogImg => {
        //     ScrollTrigger.create({
        //     trigger: dogImg,
        //     start: 'top 80%',
        //     end: 'bottom ',
        //     animation: this.$gsap.timeline({  repeat:3,})
        //         .to(".dogImg", 0.3, {x: 100, y: "-=30", ease: Power2.easeOut,  })
        //         .to(".dogImg", 0.3, { x: 200, y: "+=30", transformOrigin: "bottom", scaleY: 0.9, ease: Power2.easeIn }),
        // });
        // ScrollTrigger.create({
        //     trigger: dogImg,
        //     start: 'top 80%',
        //     end: 'bottom ',
        //     animation: this.$gsap.timeline()
        //         .to(".dogImg", {transformOrigin: "bottom",scaleY:0.8})
        //         // .to(".dogImg", {x:100, scaleY: 1})
        // });

        // })
        // ScrollTrigger.create({
        //     trigger: this.$refs.dogImg2,
        //     start: 'top 80%',
        //     end: 'bottom ',
        //     animation: this.$gsap.timeline({  repeat:3,})
        //         .to(".dogImg", 0.3, {y: "-=30", ease: Power2.easeOut,  })
        //         .to(".dogImg", 0.3, { y: "+=30", transformOrigin: "bottom", scaleY: 0.9, ease: Power2.easeIn }),
        // });
        // ScrollTrigger.create({
        //     trigger: this.$refs.dogImg2,
        //     start: 'top 80%',
        //     end: 'bottom ',
        //     animation: this.$gsap.timeline()
        //         .to(".dogImg", {transformOrigin: "bottom",scaleY:0.8})
        //         .to(".dogImg", {x:100, scaleY: 1})
        // });


    }
}
</script>
<template>
        <img src="../assets/images/dog.svg" alt="" class="dogImg w-24 md:w-64" ref="dogImg">
</template>