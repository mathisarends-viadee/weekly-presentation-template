<script setup>
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
  },
  // 'neutral' marks visited chapters in the outline; only the active badge is coral.
  tone: {
    type: String,
    default: 'brand',
    validator: value => ['brand', 'neutral'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: value => ['sm', 'md'].includes(value)
  }
})
</script>

<template>
  <div
    class="grid place-items-center rounded-full font-semibold flex-shrink-0 tabular-nums"
    :class="[
      {
        'bg-viadee-coral-strong text-white': active,
        'bg-viadee-ink text-white': !active && !disabled && tone === 'brand',
        'bg-viadee-slate text-white': !active && !disabled && tone === 'neutral',
        'bg-viadee-gray text-white': disabled && !active
      },
      size === 'sm' ? 'w-4 h-4 text-[11px] leading-4' : 'w-5.5 h-5.5 text-sm leading-5.5'
    ]"
  >
    {{ number }}
  </div>
</template>
