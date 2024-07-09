<template>
    <div class="w-full flex justify-center fixed top-0 bg-white z-40">
        <UContainer
            class="w-full relative py-4 inline-flex gap-4 justify-between items-center"
        >
            <NuxtLink to="/" class="text-md uppercase inline-flex gap-1">
                <span class="font-medium">AUDREY</span>
                <span>HO</span>
            </NuxtLink>

            <div
                class="hidden sm:flex max-w-sm justify-center items-center gap-4 absolute top-0 bottom-0 left-0 right-0 m-auto"
            >
                <NuxtLink to="/#graphic">Graphic</NuxtLink>
                <NuxtLink to="/#desktop-ui">Desktop UI</NuxtLink>
                <NuxtLink to="/#mobile-ui">Mobile UI</NuxtLink>
            </div>

            <UButton color="black" size="lg" to="/#contact" label="CONTACT" />

            <div class="sm:hidden"></div>
        </UContainer>
    </div>
</template>

<script lang="ts"></script>
