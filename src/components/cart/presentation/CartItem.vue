<template>
  <div class="d-flex flex-no-wrap align-center pa-1">
    <v-img 
      height="100%"
      :aspect-ratio="1/2"
      contain
      :src="item.product.image"
    />
    <div class="flex-grow-1 text-center">
      <div>{{ item.product.title }}</div>
      <div>
        <v-btn 
          text 
          fab 
          x-small 
          @click="$emit('on-click-minus')"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        {{ item.count }}
        <v-btn 
          color="primary" 
          text 
          fab 
          x-small 
          @click="$emit('on-click-plus')"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
      <div>
        $ {{ item.totalPrice() }}
      </div>
    </div>
    <div>
      <v-btn 
        color="red" 
        text 
        fab 
        x-small 
        @click="$emit('on-click-remove')"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style>

</style>