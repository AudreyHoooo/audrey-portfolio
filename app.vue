<template>
    <div class="w-full">
        <Header />
        <Hero />
        <FloatingButton />
        <ShowcaseList type="graphic" />
        <ShowcaseList type="desktop" />
        <ShowcaseList type="mobile" />
        <Footer />
    </div>
</template>

<script setup>
useHead({
    htmlAttrs: {
        class: "scroll-pt-20",
    },
});
</script>

<style scoped>
div {
    font-family: "Mulish", "Roboto", sans-serif;
}
</style>
