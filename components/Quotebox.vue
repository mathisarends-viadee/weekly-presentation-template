<script setup>
defineProps({
  source: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div
    class="bg-viadee-surface border-l-3 border-viadee-coral rounded-r-[var(--slidev-code-radius)] py-3 px-4 relative"
  >
    <p class="text-viadee-body pr-24 text-base leading-normal m-0">
      <slot />
    </p>
    <span v-if="source" class="absolute bottom-3 right-4 text-viadee-muted text-xs">
      {{ source }}
    </span>
  </div>
</template>

<style scoped></style>
