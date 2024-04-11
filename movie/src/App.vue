<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from './components/HeaderView.vue'
import './assets/reset.css'
import './assets/style.scss'
</script>

<template>
  <div class="bodyWrap">
    <HeaderView/>
    <RouterView />
  </div>
</template>

<style lang="scss">


</style>