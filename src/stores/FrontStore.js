import { defineStore } from "pinia";
import axios from "axios";
const { VITE_API, VITE_PATH } = import.meta.env;
// import router from "../router";
import { useLoading, LoadingPlugin } from "vue-loading-overlay";
import Swal from "sweetalert2";
import Myloader from "../components/MyLoader.vue"


export default defineStore("frontStore", {
  state: () => ({
    products: [],
    tempProduct: {},
    carts: [],
    filterProducts: [],
  }),
  getters: {
    cartTotal: ({ carts }) => {
      return carts.reduce((a, b) => a + b.final_total, 0);
    },
    cartlength: ({ carts }) => {
      return carts.length;
    },
  },
  actions: {
    playLoading() {
      const loading = useLoading();
      const loader = loading.show({
        loader: Myloader,
      });
      setTimeout(() => {
        loader.hide();
      }, 1000);
    },
    async getProducts() {
      this.playLoading();
      const result = async () => {
        try {
          const res = await axios.get(
            `${VITE_API}api/${VITE_PATH}/products/all`
          );
          this.products = res.data.products;
          return true;
        } catch {
          alert("取得產品列表發生錯誤");
          return false;
        }
      };
      return await result();
    },

    getSingleProduct(productId) {
      axios
        .get(`${VITE_API}api/${VITE_PATH}/product/${productId}`)
        .then((res) => {
          this.tempProduct = res.data.product;
        })
        .catch((err) => {
          this.alertMessage("取得商品資訊發生錯誤!");
          this.router.push("/products");
        });
    },
    getCarts() {
      axios
        .get(`${VITE_API}api/${VITE_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;
        })
        .catch(() => {
          this.alertMessage("無法取得購物車列表!");
        });
    },
    addCart(product, qty = 1) {
      let method = "post";
      let url = `${VITE_API}api/${VITE_PATH}/cart`;
      if (product.qty) {
        method = "put";
        url = `${VITE_API}api/${VITE_PATH}/cart/${product.id}`;
        qty += product.qty;
      }
      const data = {
        product_id: product.id,
        qty,
      };

      axios[method](url, { data })
        .then((res) => {
          this.toastMessge("已加入購物車！");
          // alert()
          this.getCarts();
        })
        .catch((err) => {
          this.alertMessage("加入購物車發生錯誤");
          // alert("加入購物車發生錯誤")
        });
    },
    emptyCart() {
      axios
        .delete(`${VITE_API}api/${VITE_PATH}/carts`)
        .then((res) => {
          this.toastMessge("已加入購物車！");
          // console.dir(res)
          this.getCarts();
        })
        .catch((err) => {
          this.this.alertMessage("無法清空購物車");
          // alert("無法清空購物車")
        });
    },
    // async fetchFilterPorducts(catergory){
    //     await this.getProducts();
    // }
    async filterProductList(category = "") {
      // console.log("products", this.products);
      if (!this.products?.length) {
        await this.getProducts();
      }
      const filterItems = this.products.filter((item) => {
        if (item.category == category) {
          return item;
        }
      });
      this.filterProducts = filterItems;
      // console.log("filterProductList", this.filterProducts);
      return filterItems;

      // return aa
    },
    
    
    alertMessage(msg) {
      Swal.fire({
        text: msg,
        timer: 1000,
      });
    },
    toastMessge(msg) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: msg,
        showConfirmButton: false,
        timer: 1000,
        height: 400,
      });
    },
  },
});
