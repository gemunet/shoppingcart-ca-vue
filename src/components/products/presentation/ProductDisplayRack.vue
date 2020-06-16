<template>
  <v-row>
    <v-col cols="12">
      <v-text-field
        v-model="filter"
        outlined
        clearable
        label="Search"
        type="text"
        append-icon="mdi-magnify"
      />
    </v-col>
    <v-col 
      v-for="item in products"
      :key="item.id"
      cols="12"
      sm="3"
      lg="2"
    >
      <ProductItem
        :product="item"
        @on-click-add="addToCart(item)"
      />
    </v-col>
  </v-row>
</template>

<script>
import ListProductsUseCase from "../domain/usecases/ListProductsUseCase"
import AddCartItemUseCase from "../../cart/domain/usecases/AddCartItemUseCase"

import ProductItem from "./ProductItem"

export default {
    components: {
      ProductItem,
    },

    inject: [
      "productRepository",
      "cartRepository",
    ],

    props: {
      value: {
        type: Object,
        default: null,
      },
    },

    data() {
      return {
        totalProducts: [],
        filter: null
      }
    },

    computed: {
      products() {
        if(this.filter) {
          return this.totalProducts.filter(p => 
            p.title.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1 ||
            p.description.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1);
        } else {
          return this.totalProducts;
        }
        
      }
    },

    async created() {
      let listProductsUseCase = new ListProductsUseCase(this.productRepository);
      this.totalProducts = await listProductsUseCase.execute();
    },

    methods: {
      async addToCart(product) {
        let addToCartUseCase = new AddCartItemUseCase(this.cartRepository);
        let cart = await addToCartUseCase.execute(this.value, product);
        this.$emit('input', cart)
      }
    },
}
</script>

<style>

</style>