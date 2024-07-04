<template>
  <div>
    <NuxtLink to="/">Retour</NuxtLink>
    <Pokemon :slug="slug" />
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;
</script>
