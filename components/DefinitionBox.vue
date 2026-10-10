<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  source: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div
    class="bg-viadee-surface border-l-3 border-viadee-coral rounded-r-[var(--slidev-code-radius)] px-4 py-3"
  >
    <div class="text-[0.96rem] leading-[1.45] font-semibold text-viadee-ink">
      {{ title }}
    </div>
    <p class="m-0 mt-0.5 text-[0.96rem] leading-[1.45] text-viadee-body">
      <slot />
    </p>

    <div v-if="source" class="text-right mt-2">
      <span class="text-[0.74rem] leading-none text-viadee-muted">{{ source }}</span>
    </div>
  </div>
</template>
