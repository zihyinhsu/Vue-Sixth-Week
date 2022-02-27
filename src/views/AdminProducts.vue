<template>
    <div class="container">
        <div class="text-end mt-4">
          <button class="btn btn-primary">
            建立新的產品
          </button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">
                分類
              </th>
              <th>產品名稱</th>
              <th width="120">
                原價
              </th>
              <th width="120">
                售價
              </th>
              <th width="100">
                是否啟用
              </th>
              <th width="120">
                編輯
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.key">
              <td>{{ item.category }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.origin_price }}</td>
              <td>{{ item.category }}</td>
              <td>
                <span class="text-success fw-bold" v-if="item.is_enabled" style="cursor:pointer" @click="item.is_enabled ? item.is_enabled = 0 : item.is_enabled = 1">啟用</span>
                <span v-else style="cursor:pointer" @click="item.is_enabled ? item.is_enabled = 0 : item.is_enabled = 1">未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-primary btn-sm">
                    編輯
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <pagi-nation :pages="pagination"></pagi-nation>
      </div>
      <!-- productModal -->
           <ProductModal ref="productModal"></ProductModal>
      <!-- delProductModal -->
           <DelProductModal ref="delProductModal"></DelProductModal>
</template>

<script>
/* global bootstrap */

import ProductModal from '@/components/ProductModal'
import DelProductModal from '@/components/DelProductModal'
import PagiNation from '@/components/PagiNation'

export default {
  data () {
    return {
      products: [],
      temp: {
        imagesUrl: []
      },
      productModal: '',
      delProductModal: '',
      pagination: []
    }
  },
  components: {
    ProductModal,
    DelProductModal,
    PagiNation
  },
  methods: {
    getProducts () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products`)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
        //   this.productModal.show()
        }).catch((err) => {
          console.log(err)
        })
    },
    openModal (staus, product) {
    //   if (staus === 'isNew') {
    //     this.isNew = true
    //   } else if (status === 'edit') {
    //     this.isNew = false
    //   } else if (status === 'delete') {

      //   }
    }
  },
  mounted () {
    this.getProducts()
    this.productModal = new bootstrap.Modal(this.$refs.productModal)
    // this.delProductModal = new bootstrap.Modal(this.$refs.delProductModal)
  }
}
</script>
