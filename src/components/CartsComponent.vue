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
  <table class="w-full table-fixed text-center mb-6">

    <thead>
      <tr class="font-extrabold text-4.5 ">
        <th></th>
        <th>產品</th>
        <th>價錢</th>
        <th>數量</th>
        <th>小計</th>
        <th>刪除</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in carts" class="hover:bg-fog-200" :key="item.id">
        <td class=" lg:w-24 lg:h-24">
          <img :src="item.product.imageUrl" :alt="item.product.title" class="w-20">
        </td>
        <td>
          {{ item.product.title }}
        </td>
        <td class="text-xs">NT $ {{ item.product.price }}</td>
        <td class="text-xs">
          <input type="number" min="1" :value="item.qty" class="w-full text-xs ml-2 text-center  border-none rounded-md bg-transparent md:mx-1 md:py-1 md:w-20 md:pl-2  md:bg-fog-200"
            @change="(evt) => changeQty(item.id, evt)">
        </td>
        <td class="text-xs">NT $ {{ item.final_total }}</td>
        <td> <button type="button" class="hover:text-highlight" @click="delCartItem(item.id)">
            x
          </button></td>
      </tr>
    </tbody>
    <tfoot class="border-t border-t-fog-500 border-spacing-1">
      <tr class="">
        <td colspan="3" class="text-end ">
          <p class="inline-block px-2 bg-fog-200 " v-if="cartTotal >= 900">已達免運費門檻</p>
        </td>
        <td class="">總計:</td>
        <td class="text-xs">NT$ {{ cartTotal }}</td>
      </tr>
      <tr>
        <td colspan="5" v-if="$route.fullPath != '/placeorder'">
          <RouterLink to="/placeorder">
            <button type="button"
              class="py-2 px-12 bg-secondary rounded-lg2 text-white flex ml-auto mt-4 hover:bg-primary hover:text-dark ">結帳</button>
          </RouterLink>
        </td>
      </tr>
    </tfoot>
  </table>
</template>
