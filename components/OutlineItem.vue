<script setup>
import OutlineBadge from './NumberBadge.vue'

defineProps({
  number: {
    type: [Number, String],
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="flex items-center gap-2.5">
    <OutlineBadge
      :number="number"
      :active="active"
      :disabled="disabled"
      :size="'sm'"
      tone="neutral"
    />
    <span
      class="text-lg font-medium"
      :class="{
        'text-viadee-ink': active,
        'text-viadee-slate': !active
      }"
    >
      <slot />
    </span>
  </div>
</template>
