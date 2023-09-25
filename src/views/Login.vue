<template>
  <div class="container-sm">
    <form>
      <h3 class="text-center mt-5">Login</h3>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input v-model="data.email" name="email" type="email" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input
          v-model="data.password"
          name="password"
          type="password"
          class="form-control"
        />
      </div>
      <button @click.prevent="login" type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div class="centered" v-if="load">
      <img class="img-load" src="../assets/load.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Swal from "sweetalert2";

const data = reactive({
  email: "",
  password: "",
});

const load = ref(false);

const store = useStore();
const router = useRouter();

function login() {
  load.value = true;
  store
    .dispatch("login", data)
    .then(() => {
      router.push("/");
    })
    .catch((error) => {
      load.value = false;
      Swal.fire({
        title: "Error!",
        text: "Login fail",
        icon: "error",
      });
    });
}
</script>
<style scoped>
.centered {
  position: fixed; /* Để lớp "centered" phủ kín màn hình */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* Căn giữa theo chiều ngang */
  align-items: center; /* Căn giữa theo chiều dọc */
  background: rgba(0, 0, 0, 0.7); /* Màu nền mờ (tùy chỉnh) */
}

.img-load {
  max-width: 15%;
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg); /* Góc quay ban đầu là 0 độ */
  }
  100% {
    transform: rotate(360deg); /* Góc quay cuối cùng là 360 độ (quay một vòng đầy đủ) */
  }
}
</style>
