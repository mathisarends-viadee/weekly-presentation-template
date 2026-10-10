<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <h3 class="section-title mb-1.5 text-[1.25rem] leading-[1.25] font-bold tracking-[-0.015em]">
    <slot>{{ text }}</slot>
  </h3>
</template>

<style scoped>
.section-title {
  color: var(--viadee-ink);
}
</style>
