<template>
<article class="post-card">
<img :src="post.image" :alt="post.title" class="post-image" />
<div class="post-content">
<h3>{{ post.title }}</h3>
<p>{{ post.excerpt }}</p>
<a href="#" class="read-more">Leer más →</a>
<div class="comment-section">
<button class="toggle-comments" @click="$emit('toggle-comments', post.id)">Mostrar Comentarios</button>
<div class="comments-container" v-if="post.comments && post.comments.length">
<h4>Comentarios ({{ post.comments.length }})</h4>
<div class="comment" v-for="(c, idx) in post.comments" :key="idx">
<p>{{ c.text }}</p>
<small>— {{ c.author }}</small>
</div>
</div>
</div>
</div>
</article>
</template>


<script setup>
const props = defineProps({ post: Object })
</script>