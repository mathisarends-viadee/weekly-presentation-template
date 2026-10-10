<script setup>
import CoverBackdrop from '@components/CoverBackdrop.vue'
import CoverLogo from '@layouts/CoverLogo.vue'

const info = $slidev.configs?.presentationInfo || { authors: [] }
</script>

<template>
  <div class="slide-padding-x h-full bg-white relative overflow-hidden flex flex-col pt-12 pb-14">
    <CoverBackdrop variant="closing" />

    <div class="relative z-10 flex flex-col h-full">
      <CoverLogo />

      <div class="flex-1 flex flex-col justify-center -mt-8">
        <h1 class="text-[5.5rem] leading-[0.95] font-black text-viadee-ink tracking-tight mb-5">
          {{ info.closingTitle || 'Vielen Dank' }}
        </h1>
        <p class="text-3xl text-viadee-highlight font-normal">
          {{ info.closingSubtitle || 'Gibt es noch Fragen?' }}
        </p>
      </div>

      <div v-if="info.authors?.length">
        <div class="h-px w-full bg-viadee-line mb-7" />

        <div class="grid grid-cols-3 gap-x-8">
          <div v-for="author in info.authors" :key="author.name">
            <p class="text-[15px] font-bold text-viadee-ink leading-tight tracking-[-0.005em]">
              {{ author.name }}
            </p>
            <p class="text-[13px] text-viadee-muted leading-tight mt-1.5">{{ author.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
