<script>
import frontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';
import _ from 'lodash';
import { Modal } from 'flowbite';

export default {
  data() {
    return {
      searchModal: {},
      searchValue: '',
      filteredValue: [],
    };
  },
  computed: {
    ...mapState(frontStore, ['products']),
  },
  methods: {
    ...mapActions(frontStore, ['getProducts']),
    showSearchModal() {
      this.searchValue = '';
      this.filteredValue = [];
      this.searchModal.show();
    },
    searchFilter: _.debounce(function filterSearch() {
      const value = this.searchValue;
      (async () => {
        await this.getProducts();
      })();
      this.filteredValue = this.products.filter((item) => item.title.includes(value));
    }, 500),
  },
  mounted() {
    this.searchModal = new Modal(this.$refs.searchModal);
  },
};
</script>

<template>
  <!-- Main modal -->
  <div tabindex="-1" aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-[100] hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    ref="searchModal">
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="px-6 py-4 border-b rounded-t dark:border-gray-600">
          <div class="relative w-full bg-fog-100 rounded-lg2 flex items-center p-2">
            <span class="material-symbols-outlined ">
              search
            </span>
            <input type="search" id="search-dropdown"
              class="block p-2.5 w-full z-20 text-sm text-fog-500 rounded-r-lg border-0 bg-transparent focus:ring-0"
              placeholder="油畫、T shirt、手機殼 ... " v-model="searchValue" @keyup="searchFilter" required>
          </div>
        </div>
        <!-- Modal body -->
        <div class="p-6">
          <ul class="my-4 space-y-3">
            <li v-for="value in filteredValue" :key="value.id">
              <RouterLink :to="`/products/category/${value.category}/product/${value.id}`"
                class="flex items-center p-3 text-base  text-fog-500 rounded-lg bg-gray-50 hover:bg-fog-200 group hover:shadow " @click="searchModal.hide()">
                <span class="flex-1 ml-3 whitespace-nowrap">{{ value.title }}</span>
                <!-- <span
                  class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">熱賣中</span> -->
              </RouterLink>
            </li>
          </ul>
      </div>
    </div>
  </div>
</div></template>
