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
    <div class="inline-block bg-fh-blue px-4 py-0.75 text-[0.84rem] font-semibold tracking-[0.01em] text-white">
      {{ title }}
    </div>

    <div class="bg-gray-100 border-l-4 border-fh-blue -mt-0.5 px-2.5 py-2">
      <p class="m-0 text-[0.96rem] leading-[1.48] text-gray-800">
        <slot />
      </p>

      <div v-if="source" class="text-right mt-2">
        <span class="text-[0.76rem] leading-none text-gray-500">{{ source }}</span>
      </div>
    </div>
  </div>
</template>
