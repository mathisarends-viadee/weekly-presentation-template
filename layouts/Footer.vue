<script setup>
import { computed } from 'vue'

const info = $slidev.configs?.presentationInfo || {
  title: '',
  subtitle: '',
  chapters: []
}

const props = defineProps({
  chapter: {
    type: String,
    default: ''
  },
  section: {
    type: String,
    default: ''
  },
  currentPage: {
    type: Number,
    required: true
  }
})

const chapterTitle = computed(() => {
  const chapter = info.chapters?.find(ch => ch.number === parseInt(props.chapter))
  return chapter?.title || ''
})

const deckTitle = computed(() => info.shortTitle || info.title)
</script>

<template>
  <footer class="footer flex justify-between items-center pt-3">
    <div class="flex items-center min-w-0">
      <span class="text-viadee-body">{{ deckTitle }}</span>
      <template v-if="chapterTitle">
        <span class="mx-2.5 h-2.5 w-px bg-viadee-gray" aria-hidden="true" />
        <span class="truncate">{{ chapterTitle }}</span>
      </template>
    </div>
    <span class="page tabular-nums">{{ currentPage - 1 }}</span>
  </footer>
</template>

<style scoped>
.footer {
  font-size: 11px;
  line-height: 1;
  letter-spacing: 0.01em;
  color: var(--viadee-muted);
}

.page {
  font-family: var(--font-mono);
  color: var(--viadee-slate);
}
</style>
