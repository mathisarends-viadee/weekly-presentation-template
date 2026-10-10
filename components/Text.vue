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

    <div class="measure text-[1rem] leading-[1.5] text-viadee-body">
      <slot />
    </div>
  </div>
</template>
