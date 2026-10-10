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
  <div class="relative">
    <!-- Title Badge -->
    <div class="inline-block bg-fh-blue px-3 py-0.75 text-[0.84rem] font-semibold tracking-[0.01em] text-white">
      {{ title }}
    </div>

    <div class="bg-gray-100 -mt-0.5 px-2.5 py-1.5">
      <p class="m-0 text-[0.94rem] leading-[1.45] text-gray-800">
        <slot />
      </p>

      <div v-if="source" class="text-right mt-2">
        <span class="text-[0.72rem] leading-none text-gray-500">{{ source }}</span>
      </div>
    </div>
  </div>
</template>
