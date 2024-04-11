<script setup>
import {onBeforeMount} from 'vue'
import {useMovieStore} from '@/stores/movie.js'
import '../assets/main.scss';

const movieStore = useMovieStore();
onBeforeMount(()=>{
movieStore.getMoviesList();
})

const getMovie=(num)=>{
  movieStore.getMoviesList(num);
}

</script>

<template>
  <main>
    <div class="mainWrap">
      <nav>
        <ul class="menu">
          <li> <RouterLink to="/"><p >예매</p></RouterLink></li>
          <li> <RouterLink to="/"><p >영화</p></RouterLink></li>
          <li> <RouterLink to="/"><p >극장</p></RouterLink></li>
          <li> <RouterLink to="/"><p >이벤트</p></RouterLink></li>
        </ul>
        <ul class="menu ">
          <li><a href="#">로그인</a></li>
          <li><a href="#">마이페이지</a></li>
        </ul>
      </nav>
      <div class="contentWrap">
        <div class="viewOption"> 
          <select name="languages" id="lang">
            <option value="javascript">최신순</option>
            <option value="php">별점순</option>
          </select>
        </div>
        <ul>
          <li v-for="movie in movieStore.movie" :key="movie.id">
            <router-link :to="`/detail/${movie.id}`">
            <img :src="`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`" alt="">
            <p class="title">{{ movie.title }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
   
  </main>
</template>
