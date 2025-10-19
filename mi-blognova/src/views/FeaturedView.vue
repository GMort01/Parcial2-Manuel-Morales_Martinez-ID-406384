<template>
<section>
<h2>Publicaciones destacadas</h2>
<PostList :posts="featured" />
</section>
</template>


<script setup>
import PostList from '../components/PostList.vue'
const featured = [{id:1, title:'⭐ Zona Cero: Gritos Silenciosos', excerpt:'¡La entrada más popular!', image:'/src/assets/portada-2.png', comments:[]}]
</script>