<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      right
      temporary
      app
    >
      <ShoppingCart v-model="cart" />
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
      class="px-1"
    >
      <v-avatar
        size="32px"
        item
      >
        <v-img
          src="./assets/logo.svg"
          alt="Vuetify"
        />
      </v-avatar>
      <v-spacer />
      <v-toolbar-title>
        Clean Architecture in Vue
      </v-toolbar-title>
      <v-spacer />
      <v-btn 
        icon 
        @click.stop="drawer = !drawer"
      >
        <v-badge :content="count">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <ProductDisplayRack v-model="cart" />
      </v-container>
    </v-main>
    <v-footer color="indigo">
      <div class="white--text text-center" style="width: 100%">- 2020 -</div>
    </v-footer>
  </v-app>
</template>

<script>
  import ProductDisplayRack from './components/products/presentation/ProductDisplayRack';
  import ShoppingCart from './components/cart/presentation/ShoppingCart';

  import ProductInMemoryRepository from "./components/products/data/ProductInMemoryRepository"
  import CartInMemoryRepository from "./components/cart/data/CartInMemoryRepository"

  export default {
    components: {
      ProductDisplayRack,
      ShoppingCart,
    },

    provide: { 
      productRepository: new ProductInMemoryRepository(),
      cartRepository: new CartInMemoryRepository(),
    },

    data: () => ({
      drawer: null,
      cart: null,
    }),

    computed: {
      count() {
        return ""+(this.cart ? this.cart.items.reduce((c, item) => (c+item.count), 0) : 0);
      }
    },
  }
</script>