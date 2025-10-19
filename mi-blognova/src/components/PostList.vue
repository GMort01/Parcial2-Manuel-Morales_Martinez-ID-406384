<template>
<div>
<h2 class="section-title">{{ title }}</h2>
<div class="posts-grid">
<PostCard v-for="post in filteredPosts" :key="post.id" :post="post" @toggle-comments="toggleComments" />
</div>
</div>
</template>


<script setup>
import { computed, ref } from 'vue'
import PostCard from './PostCard.vue'


const props = defineProps({ posts: Array, title: { type: String, default: 'Entradas' }, searchQuery: String })
const showComments = ref({})
function toggleComments(id) { showComments.value[id] = !showComments.value[id] }


const filteredPosts = computed(() => {
if (!props.searchQuery) return props.posts
const q = props.searchQuery.toLowerCase()
return props.posts.filter(p => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q))
})
</script>