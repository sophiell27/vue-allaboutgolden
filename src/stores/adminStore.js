import { defineStore } from "pinia";
import axios from 'axios';
import router from "../router";
import {useLoading, LoadingPlugin} from 'vue-loading-overlay';
import Myloader from "../components/MyLoader.vue"
const  { VITE_API, VITE_PATH } = import.meta.env
export default defineStore(
    "adminStore", {
        state: ()=> ({
            products: [],
            productsPagination: {},
            orders: [],
            orderPagination: {},
            loading:{},
            loader: null
            // loading:null
            // loading:Loading
        }),
        
        actions: {
            playLoading(){
                this.loading = useLoading ();
                this.loader = this.loading.show({
                    // Components: Myloader,
                    loader: Myloader,
                });
                setTimeout(()=> {
                    this.loader.hide();
                },1000)
            },
            async checkLogin(){
                const token = document.cookie.replace(/(?:(?:^|.*;\s*)goldenToken\s*\=\s*([^;]*).*$)|^.*$/, "$1")
                axios.defaults.headers.common['Authorization'] = token
              const  result= async ()=> {
                try {
                        const res = await axios.post(`${VITE_API}api/user/check`);
                        this.router.push("/admin");
                        return true
                    } catch (res_1) {
                        this.router.push("/admin/login");
                        return false
                    }
              }
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
                await axios.get(`${VITE_API}api/${VITE_PATH}/admin/products?page=${page}`)
                    .then(res => {
                        this.products = res.data.products
                        this.productsPagination = res.data.pagination
                        this.router.push(`/admin/products/${res.data.pagination.current_page}`)
                    })
                    .catch(err => {
                        // console.dir(err)
                        alert("取得產品列表發生錯誤")
                    })
            },
            getOrders(page=1) {
               this.playLoading();
                axios.get(`${VITE_API}api/${VITE_PATH}/admin/orders?page=${page}`)
                .then(res => {
                    this.orders = res.data.orders
                    this.orderPagination = res.data.pagination;
                    this.router.push(`/admin/orders/${res.data.pagination.current_page}`)
                })
                .catch(err => {
                    console.log("無法取得訂單列表");
                    console.log(err);
                })
    
            },
        }
    }
)