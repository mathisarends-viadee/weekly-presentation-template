<script setup>
import CoverBackdrop from '@components/CoverBackdrop.vue'
import CoverLogo from '@layouts/CoverLogo.vue'

const info = $slidev.configs?.presentationInfo || {
  title: '',
  subtitle: '',
  event: '',
  authors: []
}
</script>

<template>
  <div class="slide-padding-x h-full bg-white relative overflow-hidden flex flex-col pt-12 pb-14">
    <CoverBackdrop variant="cover" />

    <div class="relative z-10 flex flex-col h-full">
      <CoverLogo />

      <div class="flex-1 flex flex-col justify-center -mt-4">
        <p
          v-if="info.event || info.semester"
          class="text-viadee-coral-strong text-sm font-semibold tracking-[0.28em] uppercase mb-5"
        >
          {{ [info.event || info.semester, info.date].filter(Boolean).join(' · ') }}
        </p>

        <h1 class="text-[5.5rem] leading-[0.95] font-bold text-viadee-ink tracking-tight mb-5">
          {{ info.title }}
        </h1>

        <h2 class="text-3xl font-normal text-viadee-slate leading-snug max-w-xl">
          {{ info.subtitle }}
        </h2>
      </div>

      <div>
        <div class="h-px w-full bg-viadee-line mb-7" />

        <div class="grid grid-cols-3 gap-x-8">
          <div v-for="author in info.authors" :key="author.name">
            <p class="text-[15px] font-bold text-viadee-ink leading-tight tracking-[-0.005em]">
              {{ author.name }}
            </p>
            <p
              v-if="author.role || author.email"
              class="text-[13px] text-viadee-muted leading-tight mt-1.5"
            >
              {{ author.role || author.email }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
