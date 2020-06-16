<template>
  <!-- agregar responsive para mantener ratio del card-->
  <v-card
    class="mx-auto"
  >
    <v-responsive :aspect-ratio="16/9">
      <v-img 
        :src="product.image" 
        width="100%" 
        :aspect-ratio="1" 
      />

      <v-card-title>
        {{ product.title }}
      </v-card-title>

      <v-card-text class="text--primary">
        {{ product.description }}
      </v-card-text>

      <v-card-subtitle>
        $ {{ product.price }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn 
          block 
          depressed 
          color="primary"
          @click="$emit('on-click-add', product)"
        >
          Add to Cart
        </v-btn>
      </v-card-actions>
    </v-responsive>
  </v-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  }
}
</script>

<style>

</style>