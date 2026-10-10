<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <h3 class="section-title mb-1 text-[1.125rem] leading-[1.3] font-semibold tracking-[-0.01em]">
    <slot>{{ text }}</slot>
  </h3>
</template>

<style scoped>
.section-title {
  color: var(--viadee-ink);
}
</style>
