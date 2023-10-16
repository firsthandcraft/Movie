<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from './components/HeaderView.vue'
</script>

<template>
  <div class="bodyWrap">
    <HeaderView/>
    <RouterView />
  </div>
</template>

<style lang="scss">
$back:#222;
$secondary:royalblue;
.bodyWrap{background:$back;height:100vh;}

</style>