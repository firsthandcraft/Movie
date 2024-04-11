<script setup>
import { RouterLink, RouterView } from 'vue-router'
import "../assets/header.scss";

 </script>
<template>
  <div class="headerWrap">
    <header>
      <RouterLink to="/"><p class="logo"><img src="@/img/logo.svg" alt="logo"></p></RouterLink>
      <ul class="menu">
        <li> <RouterLink to="/"><p >무비차트</p></RouterLink></li>
        <li> <RouterLink to="/"><p >상영예정작</p></RouterLink></li>
      </ul>
    </header>
  </div>
</template>
<style lang="scss">
</style>