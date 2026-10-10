<script setup>
defineProps({
  department: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="flex items-center gap-7">
    <img src="/images/viadee-logo.svg" alt="viadee" class="w-40 h-auto" />

    <template v-if="department">
      <div class="h-8 w-px bg-viadee-line" />
      <span class="text-sm text-viadee-slate">IT-Unternehmensberatung</span>
    </template>
  </div>
</template>
