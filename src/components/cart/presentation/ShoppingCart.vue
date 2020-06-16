<template>
  <v-row 
    dense 
    class="pa-1"
  >
    <v-col 
      cols="12" 
      class="font-weight-bold"
    >
      SHOPPING CART
    </v-col>
    <v-col 
      v-if="value"
      cols="12"
    >
      <v-row dense>
        <v-col 
          v-for="(item, i) in value.getItems()" 
          :key="i" 
          cols="12"
        >
          <CartItem
            :item="item"
            @on-click-minus="decrement(item)" 
            @on-click-plus="increment(item)" 
            @on-click-remove="remove(item)"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col 
          cols="6" 
          class="font-weight-bold"
        >
          TOTAL
        </v-col>
        <v-col 
          cols="6" 
          class="font-weight-bold"
        >
          $ {{ total }}
        </v-col>
        <v-col cols="12">
          <v-btn 
            block 
            depressed 
            color="primary"
            @click="$emit('on-checkout', value)"
          >
            Checkout
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CartItem from "./CartItem"
import GetCartUseCase from "../domain/usecases/GetCartUseCase"
import EditCartItemUseCase from "../domain/usecases/EditCartItemUseCase"
import RemoveCartItemUseCase from "../domain/usecases/RemoveCartItemUseCase"

export default {
    components: {
        CartItem
    },

    inject: [
      "cartRepository",
    ],

    props: {
      value: {
        type: Object,
        default: null,
      },

      cartId: {
        type: String,
        default: null,
      },
    },

    computed: {
      total() {
        return this.value ?
          parseFloat(this.value.getItems()
            .reduce((c, item) => (c+item.totalPrice()), 0)).toFixed(2) 
          : 0;
      }
    },

    async created() {
      let getCartUseCase = new GetCartUseCase(this.cartRepository);
      let cart = await getCartUseCase.execute(this.cartId);
      this.$emit('input', cart)
    },

    methods: {
      async increment(item) {
        let editCartItemUseCase = new EditCartItemUseCase(this.cartRepository);
        let cart = await editCartItemUseCase.execute(this.value, item.product, item.count+1);
        this.$emit('input', cart)
      },

      async decrement(item) {
        if(item.count > 1) {
          let editCartItemUseCase = new EditCartItemUseCase(this.cartRepository);
          let cart = await editCartItemUseCase.execute(this.value, item.product, item.count-1);
          this.$emit('input', cart)
        } else {
          this.remove(item);
        }
      },

      async remove(item) {
          let removeFromCartUseCase = new RemoveCartItemUseCase(this.cartRepository);
          let cart = await removeFromCartUseCase.execute(this.value, item.product);
          this.$emit('input', cart)
      }
    },
}
</script>

<style>

</style>