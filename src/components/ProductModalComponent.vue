<script>
import adminStore from '@/stores/adminStore';
import { mapActions } from 'pinia';
import { Modal } from 'flowbite';
import _ from 'lodash';

const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      productModal: {},
      temp: {
        imagesUrl: [''],
      },
    };
  },
  methods: {
    ...mapActions(adminStore, ['getProducts', 'alertMessage', 'toastMessage']),
    openProductModal(product = {
      imagesUrl: [''],
    }) {
      this.temp = _.cloneDeep(product);
      this.productModal.show();
    },
    closeProductModal() {
      this.productModal.hide();
      this.temp = {
        imagesUrl: [''],
      };
    },
    delImg() {
      this.alertMessage('是否確定刪除圖片？')
        .then((result) => {
          if (result.isConfirmed) {
            this.temp.imageUrl = '';
          }
        });
    },
    uploadFile(refindex) {
      const [file] = refindex === 'filtINput'
        ? this.$refs[refindex].files
        : this.$refs[refindex][0].files;
      const formData = new FormData();
      formData.append('file-to-upload', file);
      this.alertMessage('是否確定上傳檔案？')
        .then((result) => {
          if (result.isConfirmed) {
            this.$http
              .post(`${VITE_API}api/${VITE_PATH}/admin/upload`, formData)
              .then((res) => {
                if ((refindex === 'filtINput')) {
                  this.temp.imageUrl = res.data.imageUrl;
                } else {
                  this.temp.imagesUrl[this.temp.imagesUrl.length - 1] = res.data.imageUrl;
                }
              })
              .catch(() => {
                this.alertMessage('更新圖片發生錯誤！');
              });
          }
        });
    },
    editProduct() {
      let method = 'post';
      let url = `${VITE_API}api/${VITE_PATH}/admin/product`;
      if (this.temp.id) {
        method = 'put';
        url = `${VITE_API}api/${VITE_PATH}/admin/product/${this.temp.id}`;
      }
      this.$http[method](url, { data: this.temp })
        .then(() => {
          this.getProducts();
          this.closeProductModal();
          this.toastMessage('成功編輯產品資料');
        })
        .catch(() => {
          this.alertMessage('無法編輯商品！');
          this.closeProductModal();
        });
    },
  },
  mounted() {
    this.productModal = new Modal(this.$refs.productModal);
  },
};
</script>
<template>
  <!-- Main modal -->
  <div
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
    ref="productModal">
    <v-form class="relative w-full h-full max-w-2xl md:h-auto" @submit="editProduct">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            <span v-if="temp.id">編輯商品</span>
            <span v-else>新增商品</span>
          </h3>
          <button type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            @click="closeProductModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="grid grid-cols-2 gap-x-8 p-8">
          <div class="col-span-2 sm:col-span-1">
            <div class="mb-5">
              <label class="mb-3 block" for="mainImg">主要圖片</label>
              <div class="" v-if="temp.imageUrl">
                <img :src="temp.imageUrl" alt="" class="img-fluid mb-3" />
              </div>
              <button type='button'
                class="mb-4 text-white bg-secondary hover:bg-primary hover:text-dark focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                @click="delImg" v-if="temp.imageUrl">刪除圖片</button>
              <input type="file"
                class="text-sm  border border-none  rounded-lg cursor-pointer bg-secondary text-white focus:outline-none hover:bg-primary hover:text-dark "
                id="mainImg" @change="uploadFile('filtINput')" ref="filtINput" v-else>
            </div>
          </div>
          <div class="col-span-2 sm:col-span-1">
            <div class="grid grid-cols-2 gap-x-2">
              <div class="mb-3 col-span-2">
                <label for="productTitle" class="mb-2 block">標題</label>
                <v-field type="text" id='productTitle'
                  class="w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary"
                  placeholder="請輸入標題" v-model="temp.title" name="標題" rules="required"></v-field>
                <v-error-message name="標題" class="text-highlight"></v-error-message>
              </div>

              <div class="mb-3 col-span-1">
                <label for="productCat" class="mb-2 block">分類</label>
                <v-field as="select" id='productCat'
                  class="w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary"
                  v-model="temp.category" name="分類" rules="required">
                  <option value="配件配飾" class="py-1">配件配飾</option>
                  <option value="居家配件">居家配件</option>
                  <option value="床上用品">床上用品</option>
                  <option value="科技配件">科技配件</option>
                  <option value="衣物大全">衣物大全</option>
                  <option value="有狗亂入">有狗亂入</option>
                </v-field>
                <v-error-message name="分類" class="text-highlight"></v-error-message>
              </div>
              <div class="mb-3 col-span-1">
                <label for="productUnit" class="mb-2 block">單位</label>
                <v-field type="text" id='productUnit'
                  class="w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary"
                  placeholder="請輸入單位" v-model="temp.unit" name="單位" rules="required"></v-field>
                <v-error-message name="單位" class="text-highlight"></v-error-message>
              </div>
              <div class="mb-3 col-span-1">
                <label for="productOriginPrice" class="mb-2 block">原價</label>
                <v-field type="number" id='productOriginPrice'
                  class="w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary"
                  placeholder="請輸入原價" v-model.number="temp.origin_price" name="原價" rules="required|min_value:1"
                  min="1"></v-field>
                <v-error-message name="原價" class="text-highlight"></v-error-message>
              </div>
              <div class="mb-3 col-span-1">
                <label for="productPrice" class="mb-2 block">售價</label>
                <v-field type="number" id='productPrice'
                  class="w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary"
                  placeholder="請輸入售價" v-model.number="temp.price" name="售價" rules="required|min_value:1" min="1">
                </v-field>
                <v-error-message name="售價" class="text-highlight"></v-error-message>
              </div>
              <div class="mb-3 col-span-2">
                <label for="productDesc" class="mb-2 block">產品描述</label>
                <textarea type="text" id='productDesc'
                  class="w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary"
                  placeholder="請輸入產品描述" v-model="temp.description"></textarea>
              </div>
              <div class="mb-3 col-span-2">
                <label for="productContent" class="mb-2 block">說明內容</label>
                <textarea type="text" id='productContent'
                  class="w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary"
                  placeholder="請輸入說明內容" v-model="temp.content"></textarea>
              </div>
              <div class="mb-3 flex items-center">
                <input type="checkbox" id='productEnable'
                  class="rounded-sm mr-2 ring-2 ring-primary  indeterminate:bg-white indeterminate:ring-offset-primary ring-offset-primary checked:bg-primary focus:outline-none focus:ring focus:ring-primary valid:border-primary "
                  v-model="temp.is_enabled">
                <label for="productEnable" class=" block">是否啟用</label>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal footer -->
        <div class="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button data-modal-hide="defaultModal" type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
            @click="closeProductModal">取消</button>
          <button
            class="text-white bg-secondary hover:bg-primary hover:text-dark focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center ">確定</button>
        </div>
      </div>
    </v-form>
  </div>
</template>
