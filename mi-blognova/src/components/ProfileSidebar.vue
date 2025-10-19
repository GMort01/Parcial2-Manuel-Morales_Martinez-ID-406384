<template>
  <aside class="profile-sidebar">
    <!-- Tarjeta de perfil -->
    <div class="profile-card">
      <div class="profile-picture">
        <img src="/src/assets/avatar.jpg" alt="Avatar del usuario" />
      </div>
      <div class="profile-info">
        <h3>Usuario</h3>
        <p>@blogger_activo</p>
      </div>
    </div>

    <!-- Menú de navegación -->
    <nav class="profile-menu">
      <router-link to="/" class="profile-menu-item">🏠 Inicio</router-link>
      <router-link to="/posts" class="profile-menu-item">📰 Publicaciones</router-link>
      <router-link to="/categorias" class="profile-menu-item">📂 Categorías</router-link>
      <router-link to="/muro" class="profile-menu-item">💬 Muro</router-link>
      <router-link to="/fotos" class="profile-menu-item">📸 Fotos</router-link>
      <router-link to="/boxes" class="profile-menu-item">📦 Boxes</router-link>
      <router-link to="/destacados" class="profile-menu-item">⭐ Destacados</router-link>
      <router-link to="/acerca" class="profile-menu-item">ℹ️ Acerca de</router-link>
      <router-link to="/contacto" class="profile-menu-item">📧 Contacto</router-link>
    </nav>

    <!-- Sección de amigos -->
    <section class="friends-section">
      <h4>Amigos</h4>
      <div class="friends-grid">
        <div class="friend-avatar" v-for="n in 6" :key="n">
          <img :src="`https://i.pravatar.cc/150?img=${n+10}`" alt="Amigo" />
        </div>
      </div>
    </section>
  </aside>
</template>

<script setup>
// Sin necesidad de lógica aquí todavía
</script>
