<script>
import NewProductsComponent from '@/components/NewProductsComponent.vue';

export default {
  components: {
    NewProductsComponent,
  },
};
</script>

<template>
  <div class="container">
    <h2
      class="text-h4 text-center pb-4 mb-8 relative after:content-[''] after:absolute after:-bottom-1  after:left-0 after:right-0 after:mx-auto after:w-8 after:h-1 after:bg-primary md:mb-10">
      聯絡我們
    </h2>
    <h3 class="text-4.5 font-bold mb-6">
      遍地黃金 All About Golden Retrievers
      <br>
      黃金獵犬周邊產品專賣
    </h3>
    <div class="grid grid-cols-3 md:gap-x-6">
      <div class="col-span-3 mb-8 md:col-span-1 md:mb-0">
        <p class="mb-2">電郵： <span class="pb-px border-b border-b-secondary hover:border-0 hover:text-highlight"> <a
              href="mailto:gg@gmai.com" class="">gg@gmai.com</a></span></p>
        <p>電話： <span class="pb-px border-b border-b-secondary hover:border-0 hover:text-highlight">
            <a href="mailto:124343534534">124343534534</a>
          </span></p>
      </div>
      <div class="col-span-3 md:col-span-2 ">
        <div class="flex flex-col">
          <p class="mb-4">內容 : </p>
          <textarea cols="60" rows="10"
            class="mb-4 rounded-lg2 bg-transparent border-fog-300  focus:ring-secondary focus:border-primary"></textarea>
          <button type="button" class="py-2 px-12 bg-secondary rounded-lg2 text-white self-end">送出</button>
        </div>
      </div>
    </div>
    <div class=" mt-14 lg:mt-20 ">
      <p class="text-4.5 text-center mb-6 md:text-start relative after:absolute after:-bottom-1  after:left-0 after:right-0 after:mx-auto after:w-8 after:h-1 after:bg-primary md:after:right-auto">猜你喜歡的產品</p>
      <NewProductsComponent></NewProductsComponent>
    </div>
  </div>
</template>
