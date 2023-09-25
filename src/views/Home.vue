<template>
  <div class="container-sm mt-5 d-flex flex-wrap">
    <ProductList />
  </div>
  <div class="center">
    <Paginate />
  </div>
</template>
<script setup>
import ProductList from "../components/ProductList.vue";
import Paginate from "../components/Paginate.vue";
</script>
