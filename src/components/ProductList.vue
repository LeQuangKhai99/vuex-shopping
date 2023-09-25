<template>
  <ProductItem v-for="i in 10" :key="i" class="m-1" />
</template>
<script setup>
import ProductItem from "./ProductItem.vue";
</script>
