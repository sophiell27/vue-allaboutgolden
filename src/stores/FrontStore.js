import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_API, VITE_PATH } = import.meta.env;
export default defineStore('frontStore', {
  state: () => ({
    categories: [
      '全部商品',
      '配件配飾',
      '居家配件',
      '床上用品',
      '科技配件',
      '衣物大全',
      '有狗亂入',
    ],
    currentCategory: '',
    products: [],
    tempProduct: {},
    carts: [],
    filteredProducts: [],
    isLoading: false,
    fullPage: true,
    loginStatus: false,
  }),
  getters: {
    cartTotal: ({ carts }) => carts.reduce((a, b) => a + b.final_total, 0),
    cartlength: ({ carts }) => carts.length,
    getNewProducts: ({ products }) => products.slice(-3),
    /* eslint-disable implicit-arrow-linebreak */
    getFilterCategoryProducts: ({ filteredProducts }) =>
      filteredProducts?.slice(-3),
  },
  actions: {
    login(value) {
      this.isLoading = true;
      const localData = JSON.parse(localStorage.getItem(value.登入名稱));
      if (localData === value.登入密碼) {
        this.loginStatus = true;
        if (
          window.history.state.back === '/login'
          || window.history.state.back === '/register'
        ) {
          this.router.replace('/');
        } else {
          this.router.go(-1);
        }
      } else {
        this.loginStatus = false;
        this.alertMessage('登入不成功');
      }
      this.isLoading = false;
      setTimeout(() => {
        this.toastMessge('歡迎回來！');
      }, 500);
    },
    logout() {
      this.isLoading = true;
      this.loginStatus = false;
      this.router.replace('/');
      this.isLoading = false;
      setTimeout(() => {
        this.toastMessge('你已經登出了');
      }, 500);
    },
    register(value) {
      this.loginStatus = true;
      const login = JSON.parse(localStorage.getItem(value.註冊名稱));
      if (login) {
        this.alertMessage('此會員已登記，請登入');
        this.router.replace('/login');
      } else {
        localStorage.setItem(value.註冊名稱, JSON.stringify(value.註冊密碼));
        this.toastMessge('恭喜！你已成功登記！');
        this.loginStatus = true;
        this.router.replace('/');
      }
      this.isLoading = false;
    },
    async getProducts(category = '') {
      this.isLoading = true;
      const url = `${VITE_API}api/${VITE_PATH}/products/all`;
      await axios
        .get(url)
        .then((res) => {
          this.isLoading = false;
          const { products } = res.data;
          this.products = products;
          if (category) {
            this.currentCategory = category;
            const newProducts = products.filter(
              (item) => item.category === category,
            );
            this.filteredProducts = newProducts;
          } else {
            this.currentCategory = '全部商品';
          }
          return true;
        })
        .catch(() => {
          this.isLoading = false;
          this.alertMessage('取得產品列表發生錯誤');
          return false;
        });
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
      this.isLoading = true;
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
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
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
        this.router.push('/login');
      }
    },
    alertMessage(msg) {
      Swal.fire({
        text: msg,
        confirmButtonColor: '#ED8408',
        showConfirmButton: true,
        confirmButtonText: '確定',
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
