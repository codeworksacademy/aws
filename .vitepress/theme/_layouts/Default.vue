<script setup>
import { useRoute, useRouter } from "vitepress/dist/client/index.js";
import DefaultTheme, { useSidebar } from "vitepress/theme";
import { computed, onMounted, ref } from "vue";
import { AppState } from "../../AppState.js";
import { AuthWrapper } from '../../services/AuthService';
import { AUTH_EVENTS } from '@bcwdev/auth0provider-client';
import { saveState, loadState } from '../../utils/Store.js';

const { Layout } = DefaultTheme;
const isSidebarOpen = ref();

const router = useRouter()
const route = useRoute()
const user = computed(() => AppState.user)
let AuthService = null

onMounted(async () => {
  isSidebarOpen.value = JSON.parse(loadState('sidebar'))
  if (isSidebarOpen.value === null || isSidebarOpen.value === undefined) {
    isSidebarOpen.value = true
  }

  AuthService = await AuthWrapper()
  AuthService.on(AUTH_EVENTS.LOADED, () => {
    if (!AuthService.isAuthenticated) {
      router.go('/')
    }
  })
})


function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
  saveState('sidebar', isSidebarOpen.value)
}

</script>

<template>
  <div class="main-content" :class="isSidebarOpen ? '' : 'hide-sidebar'">
    <div v-if="user">
      <button v-if="route.path != '/'" @click="toggleSidebar()" class="menu sidebar-toggler"
        aria-controls="VPSidebarNav">
        <i class="mdi mdi-menu-close"></i>
        <span class="menu-text">Menu</span>
      </button>
      <Layout>
        <template #sidebar-nav-before>
          <button @click="toggleSidebar()" class="menu sidebar-toggler py-2 btn" type="button"
            aria-controls="VPSidebarNav">
            <i class="mdi mdi-menu-open"></i>
            <span class="menu-text">Hide Menu</span>
          </button>
        </template>
        <Content></Content>
      </Layout>
    </div>
    <section v-else>
      <CourseStore />
    </section>
  </div>
</template>

<style>
[class^='vpi-'] {
  display: inline-block;
  padding: 0 10px;
}

.VPNav, .VPSidebar{
  background-color: var(--vp-nav-bg-color) !important;
}

.logo {
  object-fit: contain;
}

.d-flex {
  display: flex;
}

.gap-4 {
  gap: 2rem;
}

.sidebar-toggler {
  border: none;
  cursor: pointer;
}

@media screen and (max-width: 960px) {
  .sidebar-toggler {
    display: none;
  }
}

.hide-sidebar .sidebar-toggler {
  background-color: var(--vp-nav-bg-color);
  width: 100%;
  left: 0;
  top: 63px;
  padding: 8px 24px;
  position: fixed;
  z-index: 1000;
  text-align: left;
  border-bottom: 1px solid var(--vp-c-divider);
  border-top: 1px solid var(--vp-c-divider);
}

.hide-sidebar .VPNavBar {
  background-color: var(--vp-nav-bg-color) !important;
}

.hide-sidebar .VPSidebar {
  display: none;
}

.hide-sidebar .VPContent {
  padding-left: unset !important;
}

.hide-sidebar .content-container {
  max-width: unset !important;
  margin-left: 0 !important;
}

.hide-sidebar .content-container img {
  max-width: 50vw;
}

.hide-sidebar .VPContent .aside {
  display: none !important;
}
</style>