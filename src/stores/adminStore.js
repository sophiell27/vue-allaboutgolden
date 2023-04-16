import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_API, VITE_PATH } = import.meta.env;
export default defineStore('adminStore', {
  state: () => ({
    products: [],
    productsPagination: {},
    orders: [],
    orderPagination: {},
    isLoading: false,
    fullPage: true,
    loginStatus: false,
  }),
  actions: {
    changeLoading(status) {
      this.isLoading = status;
    },
    async checkLogin() {
      console.log();
      /* eslint-disable */
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)goldenToken\s*\=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      axios.defaults.headers.common['Authorization'] = token;
      this.isLoading = true;
      return await axios
        .post(`${VITE_API}api/user/check`)
        .then((res) => {
          this.isLoading = false;
          this.loginStatus = true;
          this.router.push('/admin/orders/1');
          return res;
        })
        .catch(() => {
          this.isLoading = false;
          if (this.router.currentRoute.value.fullPath !== '/admin/login') {
            this.router.push('/admin/login');
          }
        });
    },
    logOut() {
      axios
        .post(`${VITE_API}logout`)
        .then(() => {
          this.loginStatus = false;
          this.router.push('/admin/login');
          this.toastMessage('成功登出', 'center');
        })
        .catch((err) => {
          console.dir(err);
          this.alertMessage('無法登出');
        });
    },
    async getProducts(page = 1) {
      this.isLoading = true;
      await axios
        .get(`${VITE_API}api/${VITE_PATH}/admin/products?page=${page}`)
        .then((res) => {
          this.products = res.data.products;
          this.productsPagination = res.data.pagination;
          this.router.push(
            `/admin/products/${res.data.pagination.current_page}`,
          );
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.alertMessage('取得產品列表發生錯誤');
        });
    },
    getOrders(page = 1) {
      this.isLoading = true;
      axios
        .get(`${VITE_API}api/${VITE_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          this.orders = res.data.orders;
          this.orderPagination = res.data.pagination;
          this.router.push(`/admin/orders/${res.data.pagination.current_page}`);
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.alertMessage('無法取得訂單列表');
        });
    },
    async confirmMessage(msg) {
      return await Swal.fire({
        text: msg,
        confirmButtonText: '確定',
      });
    },
    alertMessage(msg) {
      Swal.fire({
        text: msg,
        confirmButtonColor: '#ED8408',
        showConfirmButton: true,
        confirmButtonText: '確定',
      });
    },
    toastMessage(msg, position = 'top-end') {
      Swal.fire({
        toast: true,
        position,
        icon: 'success',
        title: msg,
        showConfirmButton: false,
        timer: 1000,
      });
    },
  },
});
