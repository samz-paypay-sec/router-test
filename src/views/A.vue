<template>
  <h2>This is</h2>
  <h1>A</h1>
  <router-link to="/b">
    <button>Go to B</button>
  </router-link>
</template>

<script setup lang="ts"></script>

<style scoped>
h1 {
  font-size: 48px;
  text-align: center;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b883;
}
</style>