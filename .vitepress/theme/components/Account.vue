<template>
  <section v-if="account">
    <img
      :src="account.picture"
      width="40"
      alt=""
    >

    <h1>Hello <br> {{ account.name }}</h1>

    <LoginButton></LoginButton>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { AppState } from '../../AppState.js';
import LoginButton from '../components/LoginButton.vue';

const account = computed(() => AppState.user)

</script>

<style scoped>
img {
  object-fit: contain;
  width: 100px;
}
</style>