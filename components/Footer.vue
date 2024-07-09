<template>
    <footer class="w-full" id="contact">
        <UContainer
            class="border-t py-10 w-full flex flex-col sm:flex-row gap-6 sm:justify-between sm:items-center"
        >
            <h3 class="text-xl font-semibold">CONTACT ME</h3>

            <div
                class="flex sm:ml-auto sm:flex-wrap sm:items-center gap-6 sm:gap-20"
            >
                <div class="flex flex-col gap-2">
                    <span class="text-gray-400 uppercase text-xs"
                        >LOCATION</span
                    >
                    <p class="font-medium">LEEDS</p>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-gray-400 uppercase text-xs">EMAIL</span>
                    <NuxtLink
                        class="font-medium"
                        to="mailto:audrey.de18@gmail.com"
                        >audrey.de18@gmail.com</NuxtLink
                    >
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-gray-400 uppercase text-xs"
                        >Phone number</span
                    >
                    <NuxtLink class="font-medium" to="tel:+4407507483727"
                        >+44 07507483727</NuxtLink
                    >
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-gray-400 uppercase text-xs"
                        >INSTAGRAM</span
                    >
                    <NuxtLink
                        to="https://www.instagram.com/bug_life_uk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                        class="font-medium text-primary-300"
                        >bug_life_uk</NuxtLink
                    >
                </div>
            </div>
        </UContainer>
    </footer>
</template>
