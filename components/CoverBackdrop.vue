<script setup>
defineProps({
  variant: {
    type: String,
    default: 'cover'
  }
})
</script>

<template>
  <svg
    class="absolute inset-0 h-full w-full pointer-events-none"
    viewBox="0 0 1280 720"
    fill="none"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <template v-if="variant === 'cover'">
      <circle
        cx="1010"
        cy="180"
        r="330"
        stroke="var(--viadee-ink)"
        stroke-opacity="0.09"
        stroke-width="1"
      />
      <circle
        cx="1235"
        cy="430"
        r="190"
        stroke="var(--viadee-coral)"
        stroke-opacity="0.38"
        stroke-width="1"
      />
    </template>
    <template v-else>
      <circle
        cx="985"
        cy="95"
        r="200"
        stroke="var(--viadee-coral)"
        stroke-opacity="0.32"
        stroke-width="1"
      />
      <circle
        cx="215"
        cy="640"
        r="330"
        stroke="var(--viadee-ink)"
        stroke-opacity="0.08"
        stroke-width="1"
      />
      <circle
        cx="1210"
        cy="470"
        r="150"
        stroke="var(--viadee-ink)"
        stroke-opacity="0.05"
        stroke-width="1"
      />
    </template>
  </svg>
</template>
