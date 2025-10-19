<template>
<section>
<PostList :posts="posts" title="Todas las publicaciones" :search-query="queryParam" />
</section>
</template>


<script setup>
import PostList from '../components/PostList.vue'
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()
const queryParam = computed(() => route.query.q || '')


const posts = reactive([
{ id:1, title:'Zona Cero: Gritos Silenciosos', excerpt:'Un mundo post-apocalíptico lleno de misterios y peligros.', image:'/src/assets/portada 2.png', comments:[{author:'Lector Anónimo', text:'¡Increíble historia!'}]},
{ id:2, title:'El Mundo De Hilda', excerpt:'Adéntrate en una aventura mágica con los personajes de la serie.', image:'/src/assets/Hilda.jpg', comments:[{author:'Sofía', text:'Excelente recomendación!'}]},
{ id:3, title:'Explorando la creatividad', excerpt:'Consejos y trucos para inspirarte y dar vida a tus ideas.', image:'/src/assets/Knight-Dungeon.jpg', comments:[]}
])
</script>
