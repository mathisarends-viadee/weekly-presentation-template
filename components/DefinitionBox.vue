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
  <div class="bg-viadee-surface border-l-3 border-viadee-coral px-4 py-2.5">
    <div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-viadee-slate">
      {{ title }}
    </div>
    <p class="m-0 text-[0.96rem] leading-[1.48] text-viadee-ink">
      <slot />
    </p>

    <div v-if="source" class="text-right mt-2">
      <span class="text-[0.74rem] leading-none text-viadee-muted">{{ source }}</span>
    </div>
  </div>
</template>
