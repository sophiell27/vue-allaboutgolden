<script>
import adminStore from '../stores/adminStore.js';
import { mapActions } from 'pinia';
import { Modal } from 'flowbite';
import _ from 'lodash';

const { VITE_API, VITE_PATH } = import.meta.env;
export default {
    data() {
        return {
            productModal: {},
            temp: {
                imagesUrl: [""]
            },
        }
    },
    methods: {
        ...mapActions(adminStore, ["getProducts"]),
        openProductModal(product = {
            imagesUrl: [""]
        }) {
            this.temp =_.cloneDeep(product);
            console.log(this.temp);
            this.productModal.show();
        },
        closeProductModal() {
            this.productModal.hide();
            this.temp = {
                imagesUrl: [""]
            }
        },
        delImg() {
            if (confirm("是否確定刪除圖片？")) {
                this.temp.imageUrl = "";
            }
        },
        uploadFile(refindex) {
            let file;
            if (refindex === "filtINput") {
                file = this.$refs[refindex].files[0];
            } else {
                file = this.$refs[refindex][0].files[0];
            };
            const formData = new FormData();
            formData.append("file-to-upload", file);

            if (confirm("是否確定上傳檔案？")) {
                this.$http
                    .post(`${VITE_API}api/${VITE_PATH}/admin/upload`, formData)
                    .then((res) => {
                        if ((refindex === "filtINput")) {
                            this.temp.imageUrl = res.data.imageUrl;
                        } else {
                            this.temp.imagesUrl[this.temp.imagesUrl.length - 1] =
                                res.data.imageUrl;
                            console.log(this.temp.imagesUrl)
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
        
        editProduct() {
            let method = "post";
            let url = `${VITE_API}api/${VITE_PATH}/admin/product`
            if (this.temp.id) {
                method = "put";
                url = `${VITE_API}api/${VITE_PATH}/admin/product/${this.temp.id}`
            }
            this.$http[method](url, { data: this.temp })
                .then(res => {
                    this.closeProductModal();
                    this.getProducts();
                })
                .catch(err => {
                    alert("無法編輯商品！");
                    this.closeProductModal();
                });
        }
        // {
        //   "data": {
        //     "title": "[賣]動物園造型衣服3",
        //     "category": "衣服2",
        //     "origin_price": 100,
        //     "price": 300,
        //     "unit": "個",
        //     "description": "Sit down please 名設計師設計",
        //     "content": "這是內容",
        //     "is_enabled": 1,
        //     "imageUrl": "主圖網址",
        //     "imagesUrl": [
        //       "圖片網址一",
        //       "圖片網址二",
        //       "圖片網址三",
        //       "圖片網址四",
        //       "圖片網址五"
        //     ]
        //   }
        // }
    },
    mounted() {
        this.productModal = new Modal(this.$refs.productModal);
    }

}
</script>

<template>
    <!-- Main modal -->
    <div class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
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
                    <div class="col-span-1">


                        <div class="mb-5">
                            <label class="mb-3 block" for="mainImg">主要圖片</label>
                            <div class="" v-if="temp.imageUrl">
                                <img :src="temp.imageUrl" alt="" class="img-fluid mb-3" />
                            </div>
                            <button type='button'
                                class="mb-4 w-full text-white bg-secondary hover:bg-primary hover:text-dark focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                @click="delImg" v-if="temp.imageUrl">刪除圖片</button>
                            <input type="file"
                                class="block text-sm  border border-none  rounded-lg cursor-pointer bg-secondary text-white focus:outline-none hover:bg-primary hover:text-dark "
                                id="mainImg" @change="uploadFile('filtINput')" ref="filtINput" v-else>

                            <!-- <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            for="file_input">Upload file</label> -->
                            <!-- <input
                                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                            id="file_input" type="file"> -->


                        </div>


                        <!-- <p class="mb-3">細節圖片</p>

                        <div class="mb-2" v-for="(item, index) in temp.imagesUrl" :key="'img' + index">
                            
                            <template v-if="item.length === 0">
                                <input type="file" class="block text-sm  border border-none  rounded-lg cursor-pointer bg-secondary text-white focus:outline-none hover:bg-primary hover:text-dark" id="spareImg" @change="uploadFile('spareInput')"
                                    ref="spareInput">
                            </template>
                            <img :src="temp.imagesUrl[index]" alt="" class="img-fluid mb-1" />
                            <button type='button' class=" mb-4 w-full text-white bg-secondary hover:bg-primary hover:text-dark focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            
                                @click="temp.imagesUrl.splice(index, 1)" v-if="temp.imagesUrl[index].length">刪除圖片</button>
                        </div>

                        <template v-if="Array.isArray(temp.imagesUrl)">
                            <button type="button" class="block text-sm  border border-none  rounded-lg cursor-pointer bg-secondary text-white focus:outline-none hover:bg-primary hover:text-dark" @click="temp.imagesUrl.push('')"
                                v-if="temp.imagesUrl.length === 0 || temp.imagesUrl[temp.imagesUrl.length - 1]">新增圖片</button>
                        </template> -->


                    </div>

                    <div class="col-span1">
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
                                    placeholder="請輸入原價" v-model.number="temp.origin_price" name="原價"
                                    rules="required|min_value:1" min="1"></v-field>
                                <v-error-message name="原價" class="text-highlight"></v-error-message>
                            </div>

                            <div class="mb-3 col-span-1">
                                <label for="productPrice" class="mb-2 block">售價</label>
                                <v-field type="number" id='productPrice'
                                    class="w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary"
                                    placeholder="請輸入售價" v-model.number="temp.price" name="售價" rules="required|min_value:1"
                                    min="1"> </v-field>
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
                <div
                    class="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="defaultModal" type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        @click="closeProductModal">取消</button>
                    <button
                        class="text-white bg-secondary hover:bg-primary hover:text-dark focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center ">確定</button>
                </div>
            </div>
        </v-form>
    </div>
</template>