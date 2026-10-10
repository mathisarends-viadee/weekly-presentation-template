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

    <ol class="list-none pl-0 space-y-3">
      <li v-for="(item, index) in items" :key="index" class="flex items-baseline gap-3">
        <span class="min-w-4 shrink-0 font-bold text-viadee-coral-strong tabular-nums">
          {{ start + index }}
        </span>
        <div
          class="flex-1 text-[1rem] leading-[1.45] text-viadee-ink [&_.subtext]:mt-0.5 [&_.subtext]:block [&_.subtext]:text-[0.9rem] [&_.subtext]:leading-[1.45] [&_.subtext]:text-viadee-muted"
        >
          <component :is="item" />
        </div>
      </li>
    </ol>
  </div>
</template>
