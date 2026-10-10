<script setup>
import { useSlots, computed } from 'vue'
import SectionTitle from '@components/SectionTitle.vue'

const { title, start } = defineProps({
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

    <ol class="list-none pl-0 space-y-3.5">
      <li v-for="(item, index) in items" :key="index" class="flex items-baseline">
        <span class="w-5 shrink-0 font-semibold text-viadee-coral-strong">{{ start + index }}</span>
        <div class="flex-1 text-[1rem] leading-[1.35] text-viadee-body">
          <component :is="item" />
        </div>
      </li>
    </ol>
  </div>
</template>
