<script setup>
defineProps({
  department: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="flex items-center gap-7">
    <img src="/images/fh-logo.jpg" alt="FH Münster" class="h-11" />

    <template v-if="department">
      <div class="h-8 w-px bg-fh-line" />
      <img src="/images/msb.png" alt="FB Wirtschaft – Münster School of Business" class="h-11" />
    </template>
  </div>
</template>
