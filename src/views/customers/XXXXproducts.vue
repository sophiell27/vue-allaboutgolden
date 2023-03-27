

<template>
     <div class="px-8">
        <ul class="grid grid-cols-2 gap-x-4 gap-y-8
        md:grid-cols-3 
        xl:grid-cols-4" v-if="products">

            <li class="text-center rounded-lg2 hover:shadow-lg2" v-for="product in products" :key="product.id">
                <RouterLink :to="`/products/product/${product.id}`"  class="">
                    <img :src="product.imageUrl" alt="" class="mb-2 h-[250px] md:h-[280px] w-full  object-cover rounded-t-lg">
                <div class="min-h-[54px] mb-1 text-4.5">
                    <h2>{{ product.title }}</h2>
                </div>
                <p class="text-highlight text-sm font-extrabold">NT$ {{ product.price }}</p>
                </RouterLink>
                <!-- <input type="radio" name="size" class="squareBtn text-xs bg-transparent outline outline-secondary mr-2" value="S"> -->
                <!-- <div class="mb-1">
                    <button class="squareBtn text-xs bg-transparent outline outline-secondary mr-2" @click=""> S
                    </button>
                    <button class="squareBtn text-xs bg-transparent outline outline-secondary mr-2"> M </button>
                    <button class="squareBtn text-xs bg-transparent outline outline-secondary">L </button>
                </div> -->
                <button type="button" class="btn rounded-[5px] flex items-center justify-center mx-auto mb-4" @click="addCart(product)">
                    <span class="material-symbols-outlined leading-none ">
                        shopping_cart
                    </span>
                </button>
                </li>
            </ul>
            <!-- <PaginationComponent :pagination="productsPagination"></PaginationComponent> -->
        </div>
</template>