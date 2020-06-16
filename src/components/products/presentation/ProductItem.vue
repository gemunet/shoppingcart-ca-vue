<template>
  <!-- agregar responsive para mantener ratio del card-->
  <v-card
    class="d-flex flex-column"
    height="100%"
  >
    <v-img 
      class="flex-grow-0"
      :src="product.image" 
      width="100%" 
      :aspect-ratio="1"
      contain
    />

    <v-card-title>
      {{ product.title }}
    </v-card-title>

    <v-card-text class="text--primary flex-grow-1">
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