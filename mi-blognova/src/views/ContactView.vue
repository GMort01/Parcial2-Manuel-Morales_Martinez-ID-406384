<template>
<section>
<h2>Contacto</h2>
<div class="contact-container">
<form @submit.prevent="send">
<label>Nombre:</label><input v-model="name" required />
<label>Correo:</label><input v-model="email" type="email" required />
<label>Mensaje:</label><textarea v-model="message" required></textarea>
<button type="submit">Enviar Mensaje →</button>
</form>
</div>
</section>
</template>


<script setup>
import { ref } from 'vue'
const name = ref('')
const email = ref('')
const message = ref('')
function send(){ alert('Mensaje enviado (simulado)') }
</script>