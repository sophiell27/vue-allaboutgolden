<script>
import frontStore from '@/stores/frontStore';
import { mapState, mapActions } from 'pinia';
import CartsComponent from '@/components/CartsComponent.vue';

const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      data: {
        user: {},
        message: '銀行轉賬',
      },
    };
  },
  components: {
    CartsComponent,
  },
  computed: {
    ...mapState(frontStore, ['carts', 'loginStatus']),
  },
  methods: {
    ...mapActions(frontStore, ['getCarts', 'alertMessage', 'toastMessge']),
    placeOrder() {
      if (!this.carts.length) {
        this.$swal.fire({
          text: '購物車沒有內容，無法送出訂單',
          confirmButtonText: '確定',
        }).then((result) => result.isConfirmed);
        return;
      }
      this.$http.post(`${VITE_API}api/${VITE_PATH}/order`, { data: this.data })
        .then((res) => {
          this.toastMessge('已送出訂單');
          this.data = {
            user: {},
            message: '銀行轉賬',
          };
          this.getCarts();
          this.$router.push(`/user/order/${res.data.orderId}`);
        })
        .catch(() => {
          this.alertMessage('無法送出訂單');
        });
    },
    checkCart() {
      if (this.carts.length === 0) {
        this.$swal.fire({
          text: '購物車沒有內容，請先選擇商品',
          confirmButtonText: '確定',
        }).then(() => this.$router.push('/products'));
      }
    },
  },
};
</script>

<template>
  <v-form class="container" @submit="placeOrder" @click="checkCart">
    <h2
      class="text-h4 text-center pb-4 mb-8 relative after:content-[''] after:absolute after:-bottom-1  after:left-0 after:right-0 after:mx-auto after:w-8 after:h-1 after:bg-primary md:mb-10">
      結賬
    </h2>
    <div class="grid grid-cols-12 ">
      <div class="col-span-12 md:col-start-2 md:col-span-10 mb-8 md:mb-10">
        <h3 class="text-4.5 mb-6"> 請填寫訂單資料</h3>
        <div class="text-fog-500 grid grid-cols-2 gap-y-4 md:gap-x-4 md:gap-y-8">
          <div class=" col-span-2 md:col-span-1">
            <label for="recipient" class="mb-2 block">收貨人：<span class="ml-1 text-highlight">*</span></label>
            <v-field type="text" id='recipient'
              class="w-full rounded-lg px-4 py-2 border-fog-500 focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-fog-500 bg-transparent"
              placeholder="請輸入收貨人姓名" name="收貨人姓名" rules="required" v-model="data.user.name"></v-field>
            <v-error-message name="收貨人姓名" class="text-highlight"></v-error-message>
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="recipientPhone" class="mb-2 block">收貨人電話：<span class="ml-1 text-highlight">*</span></label>
            <v-field type="tel" id='recipientPhone'
              class="w-full rounded-lg px-4 py-2 border-fog-500 focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-fog-500 bg-transparent"
              placeholder="請輸入收貨人電話" name="收貨人電話" rules="required" v-model="data.user.tel"></v-field>
            <v-error-message name="收貨人電話" class="text-highlight"></v-error-message>
          </div>
          <div class="col-span-2">
            <label for="receipientAddr" class="mb-2 block">收貨人地址：<span class="ml-1 text-highlight">*</span></label>
            <v-field type="text" id='receipientAddr'
              class="w-full rounded-lg px-4 py-2 border-fog-500 focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-fog-500 bg-transparent"
              placeholder="請輸入收貨人地址" name="收貨人地址" rules="required" v-model="data.user.address"></v-field>
            <v-error-message name="收貨人地址" class="text-highlight"></v-error-message>
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="receipientMail" class="mb-2 block">電郵：<span class="ml-1 text-highlight">*</span></label>
            <v-field type="email" id='receipientMail'
              class="w-full rounded-lg px-4 py-2 border-fog-500 focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-fog-500 bg-transparent"
              placeholder="請輸入電郵" name="電郵" rules="required" v-model="data.user.email"></v-field>
            <v-error-message name="電郵" class="text-highlight"></v-error-message>
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="payment" class="mb-2 block">付款方法：<span class="ml-1 text-highlight">*</span></label>
            <select id='payment'
              class="w-full rounded-lg px-4 py-2 border-fog-500 focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-fog-500 bg-transparent"
              v-model="data.message">
              <option value="銀行轉賬" select="selected">銀行轉賬</option>
              <option value="貨到付款">貨到付款</option>
            </select>
          </div>
          <!-- <div class="col-span-2 md:col-span-1">
              <label for="couponNum" class="mb-2 block">優惠碼：</label>
              <input type="text" id='couponNum'
                class="w-full rounded-lg px-4 py-2 border-fog-500 focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-fog-500 bg-transparent"
                placeholder="請輸入優惠碼（非必填）" />
            </div> -->
        </div>
      </div>
      <div class="col-span-12 md:col-start-2 md:col-span-10 py-8" v-if="carts">
        <CartsComponent />
        <div class="flex items-center justify-between   mt-8  md:pt-11 md:mt-10">
          <RouterLink to="/user/carts">
            <button type="button" class="flex items-center text-4.5 ">
              <span class="material-symbols-outlined pl-3 text-base lg:text-2xl">
                chevron_left
              </span>
              <span class="pl-1 lg:pl-2">回到購物車</span>
            </button>
          </RouterLink>
          <button class="pillBtn flex items-center text-sm md:text-h6 lg:pillBtn-lg"
            :class="{ 'disabled opacity-50 cursor-default': !carts.length }">
            <span class="pl-1 xl:pl-2">碓認送出訂單</span>
            <span class="material-symbols-outlined ml-3 text-base lg:text-2xl">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </div>
  </v-form>
</template>
