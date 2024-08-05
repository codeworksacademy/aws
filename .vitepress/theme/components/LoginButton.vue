<template>
  <div>
    <button v-if="!user" title="Sign in to access the course." @click="login()">
      <strong class="t-gradient t-1 fs-6">
        Sign In
      </strong>
    </button>
    <button v-else title="Sign out of the course." @click="logout()">
      <span class="t-gradient t-2 fs-6">
        Logout
      </span>
    </button>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from '../../AppState.js';
import { AuthWrapper } from '../../services/AuthService.js';

let AuthService = null
const user = computed(() => AppState.user)

onMounted(async () => {
  AuthService = await AuthWrapper()
})

async function login() {
  AuthService.loginWithRedirect();
}
async function logout() {
  AuthService.logout();
}
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  transition: background-color 0.3s linear;
  background-color: transparent;
  border-radius: 5px;
  padding: .25em;

  &:hover {
    background-color: #9e9e9e4f;
  }
}
</style>