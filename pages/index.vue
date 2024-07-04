<template>
  <div>
    <nav>
      <NuxtLink to="/about">A propos</NuxtLink>
      <ul>
        <li v-for="pokemon in pokemons.results.slice(0, 5)" :key="pokemon.name">
          <NuxtLink :to="`/${pokemon.name}`">
            {{ pokemon.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const { data: pokemons } = await useFetch(`https://pokeapi.co/api/v2/pokemon/`);
</script>
