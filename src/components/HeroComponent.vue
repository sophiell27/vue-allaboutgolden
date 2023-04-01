<script>
// import { Bounce, Back } from 'gsap'
import { gsap, Bounce, Back} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollToPlugin from "gsap/ScrollToPlugin";

// 註冊必要的 GSAP 插件
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


export default {
    data() {
        return {
            windowWidth: window.innerWidth,
            resizeHeight: Number,
            resizeDogWidth: Number,
            resizeDogHeight: Number,
            dogTop: Number,
            dogRight: Number,
            ballWidth: Number,
            ballTop: Number,
            ballLeft: Number
        }
    },
    watch: {
        windowWidth(n, o) {
            let ratio = 0.96
            if (this.windowWidth >= 768) {
                ratio = 2.4
            }
            this.resizeHeight = n / ratio;
            // console.log(this.resizeDogHeight);
            this.resizeImg();
        },

    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        resizeImg() {
            let ratio;
            this.windowWidth < 768 ? ratio = 0.96 : ratio = 2.4
            this.resizeHeight = this.windowWidth / ratio
            this.dogHeight = this.resizeDogWidth * 1.04
            if (this.windowWidth < 768) {
                // ratio = 0.96
                this.dogTop = this.resizeHeight * 0.5
                this.dogRight = this.windowWidth * 0.083
                this.resizeDogWidth = this.windowWidth * 0.99
                // this.resizeDogHeight = this.resizeHeight * 0.77
                this.ballLeft = this.windowWidth * 0.794
                this.ballTop = this.resizeHeight * 0.794
            } else if (this.windowWidth >= 768) {
                // ratio = 2.4
                this.resizeDogWidth = this.windowWidth * 0.535
                // this.resizeDogHeight = this.resizeDogWidth * 1.005
                this.dogTop = this.resizeHeight * 0.28
                this.dogRight = this.windowWidth * 0.223
                this.ballLeft = this.windowWidth * 0.65
                this.ballTop = this.resizeHeight * 0.74
            }

            this.ballWidth = this.resizeDogWidth * 0.28
            // console.log(this.windowWidth, "w", this.ballLeft);
        },
        dogAnimate() {
            const tl = this.$gsap.timeline({
                repeat: -1,
                repeatDelay:2

            });
            tl.set(".ball, .heroDoggie, .bannerLogo ", { opacity: 0 })
                .from(".bannerLogo", { opacity:"random(0.5, 1.5)",    duration:1}, )
                .fromTo(".heroDoggie", {
                    x: -200,
                    rotation: 10,
                }, {
                    x: 0,
                    opacity: 100,
                    rotation: 0,
                    duration: 1.5,
                }, "<")
                .from(".ball", { opacity: 0, x: 200, rotation: 360, duration: 1.5, ease: Back.easeOut })
                .from(".heroDoggie", { y: 20, ease: Bounce.easeOut, }, "<")


        }

    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        // let ratio;
        // this.windowWidth < 768 ? ratio = 0.96 : ratio = 2.4
        // this.resizeHeight = this.windowWidth / ratio
        this.resizeImg();
        this.$nextTick(this.dogAnimate())


    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
}
</script>

<template>
    <!--fixed top : 36+72 md:36+108  -->
    <!--fixed top : 36+56 md:36+72  && mt for router view - -->
    <div class="hero z-20 relative bg-hero-pattern-sm -mt-[72px] md:-mt-[108px] md:bg-banner-lg mb-6 bg-no-repeat bg-cover max-h-[100vh-36px]  md:static md:bg-contain md:mb-12  overflow-hidden"
        :style="{ 'min-height': `${resizeHeight}px` }" >


        <div class=" relative w-full">

            <img src="../assets/images/dog.svg" alt="" class="heroDoggie absolute "
                :style="{ 'width': `${resizeDogWidth}px`, 'height': `${resizeDogHeight}px`, 'top': `${dogTop}px`, 'right': `${dogRight}px` }"
                ref="heroDoggie">
            <img src="../assets/images/dogBall.svg" alt="" class="ball absolute "
                :style="{ 'width': `${ballWidth}px`, 'height': `${ballWidth}px`, 'top': `${ballTop}px`, 'left': `${ballLeft}px` }">
        </div>
        <!-- banner  -->
        <div class=" container pt-[188px] md:pt-[280px] relative ">
            <img src="../assets/images/layout/All-About-Golden-Retrievers-text.svg" alt=""
                class="bannerLogo h-14 w-auto mb-4 lg:h-24">
            <h2 class=" font-bold mb-4 text-4.5  lg:text-h4 xl:mb-16 xl:text-h2">
                讓您輕鬆一次購足
                <br class="mb-1 md:hidden">
                高品質的<span class="bg-secondary text-white p-1">黃金獵犬精品</span>
                <br class="mb-1">
                <span>享受免運優惠！</span>
            </h2>

            <RouterLink to="/products">
                <button type="button"
                    class="btn flex items-center text-sm hover:bg-primary hover:text-dark md:text-h6 lg:btn-md xl:btn-lg active:animate-ping">
                    <span class="pl-1 lg:pl-2">大家都買什麼</span>
                    <span class="material-symbols-outlined ml-3 text-base lg:text-2xl">
                        chevron_right
                    </span>
                </button>
            </RouterLink>

        </div>
    </div>
</template>