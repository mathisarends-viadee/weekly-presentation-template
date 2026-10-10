<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <h3 class="section-title mb-0.75 text-[1.18rem] leading-[1.2] font-normal tracking-[-0.012em]">
    <slot>{{ text }}</slot>
  </h3>
</template>

<style scoped>
.section-title {
  color: #00549a;
}
</style>
