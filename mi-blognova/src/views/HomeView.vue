<template>
<section>
<PostList :posts="posts.slice(0,3)" title="Últimas entradas" />
</section>
</template>


<script setup>
import PostList from '../components/PostList.vue'
import { reactive } from 'vue'


const posts = reactive([
{ id:1, title:'Zona Cero: Gritos Silenciosos', excerpt:'Mundo post-apocalíptico', image:'/src/assets/portada 2.png', comments:[{author:'Lector Anónimo', text:'¡Increíble historia!'}]},
{ id:2, title:'El Mundo De Hilda', excerpt:'Un adelanto con un toque personal...', image:'/src/assets/Hilda.jpg', comments:[{author:'Sofía', text:'Siempre me ha gustado el universo de Hilda.'}]},
{ id:3, title:'Explorando la creatividad', excerpt:'Consejos y trucos para inspirarte...', image:'/src/assets/Knight-Dungeon.jpg', comments:[]}
])
</script>