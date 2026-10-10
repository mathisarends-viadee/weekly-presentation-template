<script setup>
defineProps({
  title: {
    type: String,
    default: 'Grundlegende Begriffe'
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="flex-1 mt-2">
    <h1 class="text-3xl font-bold text-viadee-ink m-0 leading-tight tracking-tight mt-0.5">
      {{ title }}
    </h1>
    <p v-if="subtitle" class="text-xl mt-0.5 text-viadee-slate font-normal">
      {{ subtitle }}
    </p>
  </div>
</template>
