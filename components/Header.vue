<template>
    <div class="w-full flex justify-center fixed top-0 bg-white z-40">
        <UContainer
            class="w-full relative py-4 inline-flex gap-4 justify-between items-center"
        >
            <NuxtLink to="/" class="text-xl uppercase inline-flex gap-1">
                <span class="font-medium">AUDREY</span>
                <span>HO</span>
            </NuxtLink>

            <div
                class="hidden sm:flex max-w-sm justify-center items-center gap-4 absolute top-0 bottom-0 left-0 right-0 m-auto"
            >
                <a href="#graphic">Graphic</a>
                <a href="#desktop">Desktop UI</a>
                <a href="#mobile">Mobile UI</a>
            </div>

            <UButton
                color="black"
                size="lg"
                class="px-6 py-3 hidden sm:inline-flex"
                to="#contact"
                label="CONTACT"
            />

            <div class="sm:hidden">
                <UButton
                    color="black"
                    variant="ghost"
                    size="xl"
                    class="p-1 pr-0"
                    @click="menuOpen = true"
                >
                    <span>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23.1818 17.6856H4.81818C4.36627 17.6856 4 17.961 4 18.3007C4 18.6404 4.36627 18.9157 4.81818 18.9157H23.1818C23.6337 18.9157 24 18.6404 24 18.3007C24 17.961 23.6337 17.6856 23.1818 17.6856ZM23.1818 11.9453H0.818182C0.366273 11.9453 0 12.2207 0 12.5604C0 12.9001 0.366273 13.1754 0.818182 13.1754H23.1818C23.6337 13.1754 24 12.9001 24 12.5604C24 12.2207 23.6337 11.9453 23.1818 11.9453ZM4.81818 7.23007H23.1818C23.6337 7.23007 24 6.95474 24 6.61503C24 6.27533 23.6337 6 23.1818 6H4.81818C4.36627 6 4 6.27533 4 6.61503C4 6.95474 4.36627 7.23007 4.81818 7.23007Z"
                                fill="black"
                            />
                        </svg>
                    </span>
                </UButton>
            </div>
        </UContainer>

        <USlideover v-model="menuOpen">
            <div class="w-full min-h-screen">
                <UContainer class="flex flex-col gap-4 py-4">
                    <div class="flex items-center justify-between">
                        <NuxtLink
                            to="/"
                            class="text-xl uppercase inline-flex gap-1"
                            @click="menuOpen = false"
                        >
                            <span class="font-medium">AUDREY</span>
                            <span>HO</span>
                        </NuxtLink>

                        <UButton
                            color="black"
                            variant="ghost"
                            size="xl"
                            icon="i-heroicons-x-mark"
                            @click="menuOpen = false"
                        >
                        </UButton>
                    </div>

                    <div class="flex-1 divide-y">
                        <div class="flex flex-col gap-8 flex-1 py-10">
                            <a
                                @click="menuOpen = false"
                                href="#graphic"
                                class="text-2xl"
                            >
                                Graphic
                            </a>
                            <a
                                @click="menuOpen = false"
                                href="#desktop"
                                class="text-2xl"
                            >
                                Desktop UI
                            </a>
                            <a
                                @click="menuOpen = false"
                                href="#mobile"
                                class="text-2xl"
                            >
                                Mobile UI
                            </a>
                        </div>

                        <div class="py-10">
                            <h3 class="text-xl font-semibold pb-10">
                                CONTACT ME
                            </h3>

                            <div
                                class="flex flex-col sm:flex-row sm:ml-auto sm:flex-wrap sm:items-center gap-6 sm:gap-20"
                            >
                                <div class="flex flex-col gap-2">
                                    <span
                                        class="text-gray-400 uppercase text-xs"
                                        >LOCATION</span
                                    >
                                    <p class="font-medium">LEEDS</p>
                                </div>
                                <div class="flex flex-col gap-2">
                                    <span
                                        class="text-gray-400 uppercase text-xs"
                                        >EMAIL</span
                                    >
                                    <NuxtLink
                                        @click="menuOpen = false"
                                        class="font-medium"
                                        to="mailto:audrey.de18@gmail.com"
                                        >audrey.de18@gmail.com</NuxtLink
                                    >
                                </div>
                                <div class="flex flex-col gap-2">
                                    <span
                                        class="text-gray-400 uppercase text-xs"
                                        >Phone number</span
                                    >
                                    <NuxtLink
                                        @click="menuOpen = false"
                                        class="font-medium"
                                        to="tel:+4407507483727"
                                        >+44 07507483727</NuxtLink
                                    >
                                </div>
                                <div class="flex flex-col gap-2">
                                    <span
                                        class="text-gray-400 uppercase text-xs"
                                        >INSTAGRAM</span
                                    >
                                    <NuxtLink
                                        @click="menuOpen = false"
                                        to="https://www.instagram.com/bug_life_uk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                                        class="font-medium text-primary-300"
                                        >bug_life_uk</NuxtLink
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </UContainer>
            </div>
        </USlideover>
    </div>
</template>

<script setup lang="ts">
const menuOpen = ref(false);
</script>
