<script>
import DogComponent from '@/components/DogComponent.vue';

export default {
  components: {
    DogComponent,
  },
};
</script>

<template>
  <div class="container flex flex-col items-center pt-10 md:pt-16">
    <h2
      class="titleDash text-h4 text-center pb-4 mb-8 md:mb-10">
      運費 /退貨說明
    </h2>

    <article class="text-sm px-4 text-start md:px-40 mb-20 md:text-base">
      <p>宅配(國內及離島地區)：</p>
      <p class="mb-6">本島地區標準宅配寄送：單筆訂單滿900即可免運 ，未滿額將酌收100元運費
        貨到付款需另支付30元的宅配處理手續費用</p>
      <p><span class="text-highlight font-extrabold">！</span> 注意：</p>
      <ol class="list-decimal list-outside pl-6">
        <li class="pr-4">免運費商品無法與其他非免運商品一起訂購，需讓非免運商品部分滿900元才免運費。</li>
        <li>試用品、炭類商品、木酢周邊、部分特價品，不列入滿額計算中。 </li>
        <li class="pr-4">訂單會視貨量大小，採『便利袋』或 『黑貓宅急便』配送，未達一公斤重量之產品或體驗品 會採 『便利袋』寄出</li>
        <li class="pr-4">如扣後未滿900元，仍會有運費產生，請特別注意。
        </li>
        <li class="pr-4">金門、澎湖等外島地區，運送方式將採用郵局方式寄送單筆訂單滿900元，酌收80元運費；
          單筆訂單未滿900元，酌收180元運費如有任何運費計算方式上的疑問，歡迎與本公司客服聯繫，謝謝！
        </li>

      </ol>
    </article>
    <DogComponent />
  </div>
</template>
