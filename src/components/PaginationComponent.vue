<script>
import { RouterLink } from 'vue-router';
export default {
    data(){return {

    }},
    props: ["pagination"],
    emits: ["getpage"]
}

</script>

<template>
    <nav class="mb-8 border-t border-t-secondary pt-4" v-if="pagination">
        <ul class="flex justify-center items-center">
            <li class="">
                <a :href="`/admin/products/${pagination.current_page - 1}`" class="flex justify-center items-center px-2 pb-[5px] enabled:hover:opacity-70 " :class="{'disabled opacity-50  cursor-default pointer-events-none': !pagination.has_pre}" @click.prevent="$emit('getpage', pagination.current_page-1)">
                    <span class="material-symbols-outlined text-4.5 leading-none font-bold ">
                        chevron_left
                    </span>
                </a>
            </li>
            <li class="" v-for="page in pagination.total_pages" :key="`productpage${page}`"><a href="" class="block px-2 mx-2 text-sm pb-1 border-b  hover:border-b-secondary/70" :class="{'border-b border-b-highlight text-highlight disabled cursor-default pointer-events-none': page==pagination.current_page, 'border-b-transparent': page !=pagination.current_page}" @click.prevent="$emit('getpage', page)">{{ page }}</a></li>
            <!-- <li><a href=""></a></li> -->

            <li class="">
                <a :href="`/admin/products/${pagination.current_page - 1}`" class="flex justify-center items-center px-2 pb-[5px] enabled:hover:opacity-70 hover:opacity-70" :class="{'disabled opacity-50  cursor-default pointer-events-none': !pagination.has_next}" @click.prevent="$emit('getpage', pagination.current_page+1)">
                    <span class="material-symbols-outlined text-4.5 leading-none font-bold ">
                        chevron_right
                    </span>
                </a>
            </li>
        </ul>
    </nav>
</template>