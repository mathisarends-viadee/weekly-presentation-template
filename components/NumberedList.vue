<script setup>
import { useSlots, computed } from 'vue'
import SectionTitle from '@components/SectionTitle.vue'
import NumberBadge from '@components/NumberBadge.vue'

const { title, size, start } = defineProps({
  title: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'sm',
    validator: value => ['sm', 'md'].includes(value)
  },
  start: {
    type: Number,
    default: 1
  }
})

const slots = useSlots()

const items = computed(() => {
  const defaultSlot = slots.default?.() || []
  return defaultSlot.filter(vnode => vnode.type === 'li')
})
</script>

<template>
  <div>
    <SectionTitle v-if="title" :text="title" />

    <ol class="list-none pl-0 space-y-2.5">
      <li v-for="(item, index) in items" :key="index" class="flex gap-3">
        <div class="flex-shrink-0 mt-1.5">
          <NumberBadge :number="start + index" :size="size" />
        </div>
        <div
          class="flex-1 text-[1rem] leading-[1.4] text-gray-800 [&_.subtext]:mt-0.5 [&_.subtext]:block [&_.subtext]:text-[0.88rem] [&_.subtext]:leading-[1.38] [&_.subtext]:text-gray-500"
        >
          <component :is="item" />
        </div>
      </li>
    </ol>
  </div>
</template>
