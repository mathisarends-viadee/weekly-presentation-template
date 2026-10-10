<script setup>
defineProps({
  source: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="bg-viadee-surface border-l-3 border-viadee-coral py-2.5 px-4 relative">
    <p class="text-gray-700 text-base leading-normal m-0 pr-24">
      <slot />
    </p>
    <span v-if="source" class="absolute bottom-3 right-4 text-gray-500 text-xs">
      {{ source }}
    </span>
  </div>
</template>

<style scoped></style>
