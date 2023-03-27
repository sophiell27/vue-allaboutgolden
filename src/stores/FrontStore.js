import { defineStore } from "pinia";
import axios from 'axios';
const  { VITE_API, VITE_PATH } = import.meta.env;
// import router from "../router";

export default defineStore("frontStore", {
    state: ()=> ({
        products: [],
        tempProduct: {},
        carts: [],
        filterProducts: []
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
        async getProducts(){
            await axios.get(`${VITE_API}api/${VITE_PATH}/products/all`)
            .then(res => {
                this.products = res.data.products;
                // console.log(this.products);
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
                this.router.push("/products")
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
        },
        emptyCart(){
            axios.delete(`${VITE_API}api/${VITE_PATH}/carts`)
            .then(res => {
                alert("已清空購物車")
                // console.dir(res)
                this.getCarts();
            })
            .catch(err => {
                // console.dir(err)
                alert("無法清空購物車")
            })
        },
        // async fetchFilterPorducts(catergory){
        //     await this.getProducts();
        // }
        async filterProductList(category=""){
            
            // console.log("products", this.products);
            if (!this.products?.length){
                await this.getProducts();
            }
            const  filterItems =  this.products.filter((item) => {
                if (item.category == category){
                    return item 
                }
               
            }
            )
            this.filterProducts = filterItems
            // console.log("filterProductList", this.filterProducts);
            return filterItems
           
            // return aa
        },
        
    }
})