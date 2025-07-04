<template>
  <v-container class="text-center">
    <h2>Login</h2>
    <v-text-field v-model="email" label="Email" />
    <v-text-field v-model="password" label="Password" type="password" />
    <v-btn color="primary" @click="login">Login</v-btn>
  </v-container>
</template>

<script setup>
const email = ref('')
const password = ref('')
const { $auth } = useNuxtApp()

const login = async () => {
  try {
    await $auth.signInWithEmailAndPassword(email.value, password.value)
    alert('Login berhasil')
  } catch (e) {
    alert('Gagal login: ' + e.message)
  }
}
</script>