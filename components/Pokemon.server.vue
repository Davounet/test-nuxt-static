<template>
  <div>
    <h1>{{ pokemon.name }}</h1>
    <p>{{ pokemon.id }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["slug"]);

const { data: pokemon } = await useAsyncData(
  `pokemon:${props.slug}`,
  async () => {
    console.log(`calling pokemon api for slug ${props.slug}`);

    try {
      const result = await $fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.slug}`,
        {
          transform: (input) => ({ id: input.id, name: input.name }),
        }
      );
      return result;
    } catch (e) {
      return { name: "missing", id: 0 };
    }
  }
);
</script>
