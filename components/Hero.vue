<template>
    <div class="w-full py-20 sm:py-32">
        <UContainer class="grid sm:grid-cols-3 gap-10 sm:gap-4 sm:items-center">
            <div class="flex flex-col gap-10">
                <div class="flex items-center gap-2">
                    <NuxtImg
                        src="/pet-1.jpeg"
                        alt="pet 1"
                        width="50px"
                        height="50px"
                        format="webp"
                    />
                    <NuxtImg
                        src="/pet-2.jpeg"
                        alt="pet 2"
                        width="50px"
                        height="50px"
                        format="webp"
                    />
                </div>

                <h1 class="text-3xl font-semibold sm:text-5xl">
                    I'm a <br />
                    <span class="text-primary-300">UI/UX Designer</span>
                </h1>

                <div class="hidden sm:flex items-center gap-8">
                    <div class="flex flex-col gap-2">
                        <span class="text-gray-400 text-xs uppercase"
                            >Years of experience</span
                        >
                        <span class="text-2xl font-semibold">3+</span>
                    </div>
                    <div class="flex flex-col gap-2">
                        <span class="text-gray-400 text-xs uppercase"
                            >Project Done</span
                        >
                        <span class="text-2xl font-semibold">40+</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-10">
                <NuxtImg
                    src="/hero-image.jpeg"
                    alt="Hero Image"
                    class="max-w-[280px] sm:max-w-xs mx-auto"
                />

                <div class="flex justify-between gap-10 items-center sm:hidden">
                    <div class="flex flex-col gap-2">
                        <span class="text-gray-400 text-xs uppercase"
                            >Years of experience</span
                        >
                        <span class="text-2xl font-semibold">3+</span>
                    </div>
                    <div class="flex flex-col gap-2">
                        <span class="text-gray-400 text-xs uppercase"
                            >Project Done</span
                        >
                        <span class="text-2xl font-semibold">40+</span>
                    </div>
                </div>
            </div>

            <div class="sm:ml-auto flex flex-col w-full max-w-[250px] gap-6">
                <div class="flex flex-col gap-2">
                    <span class="text-gray-400 uppercase">BASED IN</span>
                    <p class="font-medium">Leeds</p>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-gray-400 uppercase">BIOGRAPHY</span>
                    <p class="font-medium">Passionate about beautiful things</p>
                    <p>
                        Inspired by everyday moments, I strive to craft visually
                        compelling and user-friendly experiences.
                    </p>
                </div>

                <div class="flex flex-col gap-2">
                    <span class="text-gray-400 uppercase">SKILLS</span>
                    <p class="font-medium">UI/UX (Figma & Sketch)</p>
                    <p class="font-medium">Digital Markteting</p>
                    <p class="font-medium">Adobe Suite (AI,XD,PS)</p>
                    <p class="font-medium">HTML</p>
                </div>
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts"></script>
