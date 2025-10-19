<template>
<a href="#" class="profile-menu-item" @click.prevent="go">
{{ label }}
</a>
</template>


<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({ label: String, to: String })
const router = useRouter()
function go() { router.push(props.to) }
</script>


---