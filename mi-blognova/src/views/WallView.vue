<template>
<section>
<h2>Tu Muro</h2>
<div class="muro-container">
<div class="muro-post-creator">
<h3>Crea una publicación</h3>
<textarea v-model="newPost" placeholder="¿Qué tienes en mente?"></textarea>
<button @click="addPost">Publicar →</button>
</div>
<div class="muro-posts-grid">
<article v-for="p in posts" :key="p.id" class="muro-post-card">
<div class="muro-post-header"><span class="muro-post-author">{{p.author}}</span><span class="muro-post-date">{{p.date}}</span></div>
<p>{{p.content}}</p>
</article>
</div>
</div>
</section>
</template>


<script setup>
import { reactive, ref } from 'vue'
const posts = reactive([
{id:1, author:'Usuario Anónimo', date:'Hace un momento', content:'¡Hola, mundo! ¡Este muro es genial!'},
{id:2, author:'G, Programador', date:'Hace 3 minutos', content:'¡Qué alegría ver que mi código está cobrando vida!'}
])
const newPost = ref('')
function addPost(){ if(!newPost.value.trim()) return; posts.unshift({id:Date.now(), author:'Tú', date:'Ahora', content:newPost.value}); newPost.value=''}
</script>