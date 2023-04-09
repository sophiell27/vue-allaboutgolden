import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router';
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
  }),

  actions: {
    changeLoading(status){
      this.isLoading = status;
    },
    async checkLogin(path = '/admin') {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)goldenToken\s*\=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      axios.defaults.headers.common['Authorization'] = token;

      const result = async () => {
        try {
          const res = await axios.post(`${VITE_API}api/user/check`);
          this.router.push(path);
          return true;
        } catch (res_1) {
          this.router.push('/admin/login');
          return false;
        }
      };
      return await result();

      // await axios.post(`${VITE_API}api/user/check`)
      // .then(res => {
      //     result= true
      // })
      // .catch(err => {
      //     result  = false
      // })
      // console.log(result);
      // return result
      // return rr
      // try {
      //     const res = await axios.post(`${VITE_API}api/user/check`);
      //     this.router.push("/admin");
      // } catch (res_1) {
      //     this.router.push("/admin/login");
      // }
    },
    async getProducts(page = 1) {
      await axios
        .get(`${VITE_API}api/${VITE_PATH}/admin/products?page=${page}`)
        .then((res) => {
          this.products = res.data.products;
          this.productsPagination = res.data.pagination;
          this.router.push(
            `/admin/products/${res.data.pagination.current_page}`
          );
        })
        .catch((err) => {
          // console.dir(err)
          alert('取得產品列表發生錯誤');
        });
    },
    getOrders(page = 1) {
      axios
        .get(`${VITE_API}api/${VITE_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          this.orders = res.data.orders;
          this.orderPagination = res.data.pagination;
          this.router.push(`/admin/orders/${res.data.pagination.current_page}`);
          // this.loader.hide();
        })
        .catch((err) => {
          console.log('無法取得訂單列表');
          console.log(err);
          // this.loader.hide();
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
        timer: 1000,
      });
    },
    toastMessge(msg, position = 'top-end') {
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
