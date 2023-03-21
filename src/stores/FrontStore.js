import { defineStore } from "pinia";
import axios from 'axios';
const  { VITE_API, VITE_PATH } = import.meta.env;
export default defineStore("FrontStore", {
    state: ()=> ({
        products: [],
        tempProduct: {},
        carts: [],
    }),
    getters: {
        cartTotal: ({carts}) => {
            return  carts.reduce((a,b)=> a+b.final_total,0)
        },
        cartlength:({carts}) => {
            return carts.length
        }
    },
    actions: {
        getProducts(){
            axios.get(`${VITE_API}api/${VITE_PATH}/products/all`)
            .then(res => {
                this.products = res.data.products;
                console.log(res.data);
            })
            .catch(err => {
                alert("無法取得產品列表")
            })
        },
        getSingleProduct(productId){
            axios.get(`${VITE_API}api/${VITE_PATH}/product/${productId}`)
            .then(res => {
                this.tempProduct = res.data.product
            })
            .catch(err => {
                alert("取得商品資訊發生錯誤")
            })
        },
        getCarts(){
            axios.get(`${VITE_API}api/${VITE_PATH}/cart`)
            .then((res)=> {
                this.carts = res.data.data.carts;
            })
            .catch(()=> {
                alert("無法取得產品列表")
            })
        },
        addCart(product, qty=1){
            console.log(product);
            
            let method = "post";
            let url = `${VITE_API}api/${VITE_PATH}/cart`;
            if (product.qty){
                method = "put";
                url = `${VITE_API}api/${VITE_PATH}/cart/${product.id}`;
                 qty += product.qty
            }
            const data =  {
                product_id: product.id,
                  qty
                };
            
            axios[method](url, {data})
            .then(res => {
                alert("已加入購物車！")
                this.getCarts();
            })
            .catch(err => {
                alert("加入購物車發生錯誤")
            })
            
        }
    }
})