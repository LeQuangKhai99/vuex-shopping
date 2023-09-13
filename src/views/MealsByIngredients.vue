<template>
  <div class="p-8">
    <input
      type="text"
      v-model="ingredient"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMealsByIngredient"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../stores";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

const ingredient = ref("");
const route = useRoute();

const meals = computed(() => store.state.mealsByIngredient);
console.log(meals);
function searchMealsByIngredient() {
  store.dispatch("searchMealsByIngredient", ingredient.value);
}

onMounted(() => {
  ingredient.value = route.params.ingredient;
  if (ingredient.value) {
    searchMealsByIngredient();
  }
});
</script>
