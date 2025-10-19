<template>
  <div class="site-root">
    <header class="header-blog">
      <div class="logo"><h1>BlogNova</h1></div>
      <div class="search-container">
        <input v-model="query" @keyup.enter="search" class="search-input" placeholder="Buscar..." />
        <button @click="search" class="search-btn">🔍</button>
      </div>
    </header>

    <main class="layout">
      <ProfileSidebar />
      <section class="content-area">
        <router-view :search-query="query" />
      </section>
    </main>

    <footer class="footer-blog">
      <p>© 2025 BlogNova · Diseñado con cariño y toques únicos</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProfileSidebar from './components/ProfileSidebar.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const query = ref('')

function search() {
  if (query.value.trim()) {
    router.push({ path: '/posts', query: { q: query.value } })
  }
}
</script>
