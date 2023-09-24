<template>
  <div class="container-sm">
    <form>
      <h3 class="text-center mt-5">Login</h3>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input v-model="data.email" type="email" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input v-model="data.password" type="password" class="form-control" />
      </div>
      <button @click.prevent="login" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const data = reactive({
  email: "",
  password: "",
});

function login() {
  console.log("email: " + data.email, "password: " + data.password);
}
</script>
