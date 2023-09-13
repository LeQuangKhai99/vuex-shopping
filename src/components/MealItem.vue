<template>
  <div class="shadow rounded">
    <img :src="meal.strMealThumb" alt="" class="rounded-t-xl w-full h-48 object-cover" />
    <div class="p-3">
      <h3 class="font-semibold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorem
        provident sed, voluptate autem vitae rerum nemo aliquid ullam libero numquam
        molestias expedita doloribus saepe eveniet laborum suscipit? Aut, maxime?
      </p>
      <div class="flex items-center justify-between">
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
        <router-link
          class="px-3 py-2 rounded border-2 border-yellow-600 hover:bg-yellow-500 hover:text-white transition-colors"
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          >View</router-link
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
const { meal } = defineProps({
  meal: {
    require: true,
    type: Object,
  },
});
</script>
