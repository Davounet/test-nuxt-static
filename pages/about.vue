<template>
  <div>
    <NuxtLink to="/">Retour</NuxtLink>
    <pre class="text-xs">{{ hello }}</pre>
  </div>
</template>

<script setup>
const { data: hello } = useAsyncData("hello", () => $fetch("/api/hello"));
</script>
