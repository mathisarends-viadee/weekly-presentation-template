<script setup>
import SectionTitle from '@components/SectionTitle.vue'

defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="text-content">
    <SectionTitle v-if="title" :text="title" />

    <div class="text-[1rem] leading-[1.5] text-viadee-ink">
      <slot />
    </div>
  </div>
</template>
