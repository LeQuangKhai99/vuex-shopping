<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="(letter, index) of letters"
      :key="index"
      >{{ letter }}</router-link
    >
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
    <!-- <pre>{{ meals }}</pre> -->
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../stores";
import MealItem from "../components/MealItem.vue";

const letter = ref("");
const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);
function searchMealsByLetter() {
  store.dispatch("searchMealsByLetter", letter.value);
}

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  letter.value = route.params.letter;
  if (letter.value) {
    searchMealsByLetter();
  }
});
</script>
