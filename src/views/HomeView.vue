<template>
  <div
    class="flex flex-column align-items-center justify-content-center h-full sw-background"
  >
    <div class="bg-animation">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
    </div>
    <div class="sw-text mb-3 sw-title">STAR WARS SEARCH ENGINE</div>
    <star-wars-search />
  </div>
</template>

<script setup>
import StarWarsSearch from "@/components/StarWarsSearch.vue";
</script>
