<script setup>
import CoverBackdrop from '@components/CoverBackdrop.vue'
import CoverLogo from '@layouts/CoverLogo.vue'

const info = $slidev.configs?.presentationInfo || {
  title: '',
  subtitle: '',
  semester: '',
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
          v-if="info.semester"
          class="text-fh-orange text-sm font-semibold tracking-[0.28em] uppercase mb-3"
        >
          {{ info.semester }}
        </p>

        <h1 class="text-[5.5rem] leading-[0.95] font-black text-fh-navy tracking-tight mb-6">
          {{ info.title }}
        </h1>

        <h2 class="text-3xl font-normal text-fh-slate leading-snug max-w-xl">
          {{ info.subtitle }}
        </h2>
      </div>

      <div>
        <div class="h-px w-full bg-fh-line mb-7" />

        <div class="grid grid-cols-3 gap-x-8">
          <div v-for="author in info.authors" :key="author.name">
            <p class="text-[15px] font-bold text-fh-navy leading-tight tracking-[-0.005em]">
              {{ author.name }}
            </p>
            <p class="text-[13px] text-fh-muted leading-tight mt-1.5">
              Matrikelnummer {{ author.matrikelnummer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
