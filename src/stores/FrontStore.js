import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_API, VITE_PATH } = import.meta.env;
export default defineStore('frontStore', {
  state: () => ({
    products: [],
    tempProduct: {},
    carts: [],
    filterProducts: [],
    isLoading: false,
    fullPage: true,
    loginStatus: false,
  }),
  getters: {
    cartTotal: ({ carts }) => carts.reduce((a, b) => a + b.final_total, 0),
    cartlength: ({ carts }) => carts.length,
  },
  actions: {
    login(value) {
      const localData = JSON.parse(localStorage.getItem('login'));
      if (localData) {
        const { username, password } = localData;
        const data = {
          username: value.登入名稱,
          password: value.登入密碼,
        };
        if (username === data.username && password === data.password) {
          this.loginStatus = true;
          this.router.go(-1);
          this.toastMessge('歡迎回來！');
        }
      } else {
        this.alertMessage('不成功登入');
        this.loginStatus = false;
      }
    },
    logout() {
      this.loginStatus = false;
      this.router.replace('/');
    },
    async getProducts() {
      this.isLoading = true;
      const result = async () => {
        try {
          const res = await axios.get(
            `${VITE_API}api/${VITE_PATH}/products/all`,
          );
          this.products = res.data.products;
          this.isLoading = false;
          return true;
        } catch {
          this.isLoading = false;
          this.alertMessage('取得產品列表發生錯誤');
          return false;
        }
      };
      return result();
    },
    getSingleProduct(productId) {
      this.isLoading = true;
      axios
        .get(`${VITE_API}api/${VITE_PATH}/product/${productId}`)
        .then((res) => {
          this.isLoading = false;
          this.tempProduct = res.data.product;
        })
        .catch(() => {
          this.isLoading = false;
          this.alertMessage('取得商品資訊發生錯誤!');
          this.router.push('/products');
        });
    },
    getCarts() {
      axios
        .get(`${VITE_API}api/${VITE_PATH}/cart`)
        .then((res) => {
          this.isLoading = false;
          this.carts = res.data.data.carts;
        })
        .catch(() => {
          this.isLoading = false;
          this.alertMessage('無法取得購物車列表!');
        });
    },
    addCart(product, productQty = 1) {
      if (this.loginStatus) {
        let qty = productQty;
        let method = 'post';
        let url = `${VITE_API}api/${VITE_PATH}/cart`;
        if (product.qty) {
          method = 'put';
          url = `${VITE_API}api/${VITE_PATH}/cart/${product.id}`;
          qty += product.qty;
        }
        const data = {
          product_id: product.id,
          qty,
        };
        axios[method](url, { data })
          .then(() => {
            this.toastMessge('已加入購物車！');
            this.getCarts();
          })
          .catch(() => {
            this.alertMessage('加入購物車發生錯誤');
          });
      } else {
        this.alertMessage('請先登入');
        this.$router.push('/login');
      }
    },
    emptyCart() {
      axios
        .delete(`${VITE_API}api/${VITE_PATH}/carts`)
        .then(() => {
          this.toastMessge('已加入購物車！');
          this.getCarts();
        })
        .catch(() => {
          this.this.alertMessage('無法清空購物車');
        });
    },
    async filterProductList(category = '') {
      await this.getProducts();
      const filterItems = this.products.filter(
        (item) => item.category === category,
      );
      this.filterProducts = filterItems;
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
        position: 'top-end',
        icon: 'success',
        title: msg,
        showConfirmButton: false,
        timer: 1000,
      });
    },
  },
});
