<template>
  <h1>Guard Page</h1>
  <button @click="next">Next</button>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const next = async () => {
  if (typeof route.query.targetUrl === 'string') {
    await router.replace(route.query.targetUrl)

    history.replaceState({ ...history.state, guardFinished: true }, '')
  } else {
    throw new Error('no target')
  }
}
</script>

<style scoped>
h1 {
  font-size: 48px;
  text-align: center;
  color: #fd5c5c;
}
</style>
