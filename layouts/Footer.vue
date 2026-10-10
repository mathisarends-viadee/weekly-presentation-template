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
  if (!props.chapter || !info.chapters) {
    return ''
  }
  const chapterNum = parseInt(props.chapter)
  const chapter = info.chapters.find(ch => ch.number === chapterNum)
  return chapter?.title || ''
})

const deckTitle = computed(() => info.shortTitle || info.title)
</script>

<template>
  <footer class="footer flex justify-between items-baseline pt-3">
    <span class="truncate">{{ chapterTitle || deckTitle }}</span>
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
