<script>
import frontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';

const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  computed: {
    ...mapState(frontStore, ['carts', 'cartTotal']),
  },
  methods: {
    ...mapActions(frontStore, ['getCarts']),
    changeQty(productId, evt) {
      const data = {
        // eslint-disable camelcase
        product_id: productId,
        qty: Number(evt.target.value),
      };
      this.$http.put(`${VITE_API}api/${VITE_PATH}/cart/${productId}`, { data })
        .then(() => {
          // alert('已更改數量')
          this.getCarts();
        })
        .catch(() => {
          // alert('無法更改數量')
        });
    },
    delCartItem(productId) {
      this.$http.delete(`${VITE_API}api/${VITE_PATH}/cart/${productId}`)
        .then(() => {
          this.getCarts();
        })
        .catch(() => {
          // alert('無法刪除購物車內容');
        });
    },
  },
  mounted() {
    this.getCarts();
  },
};
</script>
<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-fog-500 ">
      <thead class="font-extrabold text-4.5 text-fog-500 bg-fog-200 whitespace-nowrap">
        <tr>
          <th scope="col" class="px-6 py-3 hidden md:block">
          </th>
          <th scope="col" class="px-6 py-3">
            產品
          </th>
          <th scope="col" class="px-6 py-3">
            價錢
          </th>
          <th scope="col" class="px-6 py-3">
            數量
          </th>
          <th scope="col" class="px-6 py-3">
            小計
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="hidden md:block">刪除</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b hover:bg-fog-100 " v-for="item in carts" :key="item.id">
          <td class="px-2 py-4 md:px-6 hidden md:block">
            <img :src="item.product.imageUrl" :alt="item.product.title" class="w-20">
          </td>
          <td class="px-2 py-4 md:px-6">
            {{ item.product.title }}
          </td>
          <td class="px-2 py-4 text-xs md:px-6 ">
            NT $ {{ item.product.price }}
          </td>
          <td class="px-2 py-4 md:px-6">
            <span>
              <input type="number" min="1" :value="item.qty" class="text-xs border-none w-20 text-center"
                @change="(evt) => changeQty(item.id, evt)">
            </span>
          </td>
          <td class="px-2 py-4 md:px-6 whitespace-nowrap text-xs">
            NT $ {{ item.final_total }}
          </td>
          <td class="px-2 py-4 md:px-6">
            <button type="button" class="px-2 hover:text-highlight" @click="delCartItem(item.id)">
              x
            </button>
          </td>
        </tr>
        <tr class="bg-white border-b hover:bg-fog-100" v-if="cartTotal < 900">
          <td class="px-2 py-4 md:px-6 hidden md:block"></td>
          <td class="px-2 py-4 md:px-6 hidden md:block"></td>
          <td class="px-2 py-4 md:px-6">運費</td>
          <td class="px-2 py-4 md:px-6"></td>
          <td class="px-2 py-4 md:px-6"></td>
          <td class="px-2 py-4 text-xs md:px-6">NT $ 500</td>
          <td class="px-2 py-4 md:px-6"></td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="font-semibold text-dark dark:text-white">
          <td class="px-2 py-4 md:px-6 hidden md:block"></td>
          <td colspan="2"><span v-if="cartTotal >= 900">已達免運費門檻</span> <span v-else>未達免運費門檻</span></td>
          <!-- <td></td> -->
          <td class="px-2 py-3 text-base whitespace-nowrap">總計:</td>
          <td class="px-2 py-3 text-xs whitespace-nowrap md:px-6">NT $ {{ cartTotal >= 900 ? cartTotal : cartTotal + 500
          }}</td>
        </tr>
      </tfoot>
    </table>

  </div>
  <RouterLink to="/user/placeorder" v-if="$route.fullPath === '/user/carts'">
    <button type="button"
      class="py-2 px-12 bg-secondary rounded-lg2 text-white flex ml-auto mt-4 hover:bg-primary hover:text-dark"
      >結帳</button>
  </RouterLink>
</template>
