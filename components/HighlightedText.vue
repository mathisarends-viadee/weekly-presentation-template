<script setup>
defineProps({
  color: {
    type: String,
    default: 'var(--viadee-highlight)'
  },
  weight: {
    type: String,
    default: '600'
  }
})
</script>

<template>
  <span class="highlighted-text">
    <slot />
  </span>
</template>

<style scoped>
.highlighted-text {
  color: v-bind(color);
  font-weight: v-bind(weight);
}
</style>
