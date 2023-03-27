<script>
import ProductListComponent from '../../components/ProductListComponent.vue';
import frontStore from '../../stores/frontStore.js';
import { mapState, mapActions } from 'pinia';
export default {
    data() {
        return {
            // filterProducts: [],
        }
    },
    components: {
        ProductListComponent
    },
    computed: {
        ...mapState(frontStore, ["products"])
    },
    methods: {
        ...mapActions(frontStore, ["filterProductList"]),
        ...mapActions(frontStore, ["getProducts","filterProductList", "fetchData"]),
        // async filterProductList(category = "") {

        //     if (!this?.products?.length) {
        //         await this.getProducts();
        //     }
        //     const filteredProducts = await (() => {
        //         if (this.products){
        //             const aa = this.products.filter(item => item.category == category);
        //         this.filterProducts = aa;
        //         return aa;
        //         }
               
        //     })();

        //     console.log("filterProductList", filteredProducts);
        //     return filteredProducts;
        
        // },
    },
    watch: {
        // filterProducts(n,o){
        //     console.log(n);
            
        // }
    },
    mounted() {
        this.getProducts();
        // this.filterProductList(this.$route.params.category);
    }
}
</script>

<template>
    
    <ProductListComponent :products="products"></ProductListComponent>
</template>