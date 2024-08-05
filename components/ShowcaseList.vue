<template>
  <section :id="type">
    <UContainer class="py-10" v-for="(item, index) in list" :key="index">
      <div class="flex flex-col sm:flex-row items-start gap-10 relative">
        <div class="flex-1 sm:max-w-xs text-balance flex flex-col gap-2">
          <span class="text-gray-400 uppercase">{{ item.type }}</span>
          <h2 class="sm:max-w-[300px] capitalize text-4xl font-semibold">
            {{ item.title }}
          </h2>
          <span>{{ item.subtitle }}</span>
          <NuxtLink
            class="underline text-primary-300"
            target="_blank"
            v-if="item.link"
            :to="item.link"
            >{{ item.link }}</NuxtLink
          >
        </div>

        <div class="flex-1 flex flex-col gap-5">
          <img
            format="webp"
            v-for="img in item.imgUrls"
            :src="img"
            :alt="img"
          />
        </div>

        <p
          class="text-gray-500 text-sm max-w-xs sm:absolute left-0 bottom-0"
          v-html="item.description"
        ></p>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import showcase from '@/assets/showcase.json'

const { type } = defineProps<{
  type: string
}>()

const list = showcase.filter((item) => item.type === type)
</script>
