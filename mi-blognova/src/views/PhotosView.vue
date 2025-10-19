<template>
<section>
<h2>Mi Galería de Fotos</h2>
<div class="posts-grid">
<!-- imágenes estáticas -->
<article class="post-card" v-for="i in 3" :key="i">
<img :src="`/src/assets/photo${i}.jpg`" class="post-image" />
<div class="post-content"><h3>Foto {{i}}</h3></div>
</article>
</div>
</section>
</template>