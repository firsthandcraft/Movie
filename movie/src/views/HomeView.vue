<script setup>
import {onBeforeMount} from 'vue'
import {useMovieStore} from '@/stores/movie.js'
import '../assets/main.scss';

const movieStore = useMovieStore();
let sortValue="popularity.desc";
onBeforeMount(()=>{
movieStore.getMoviesList();
})
const getMovie=(num)=>{
  movieStore.getMoviesList(num,sortValue);
}
const handleChange = (event) => {
  sortValue = event.target.value;
  getMovie(1);
}

</script>

<template>
  <main>
    <div class="mainWrap">
      <nav>
        <ul class="menu">
          <li> <RouterLink to="/"><p >영화</p></RouterLink></li>
          <li> <RouterLink to="/"><p >예매</p></RouterLink></li>
   
        </ul>
        <ul class="menu ">
          <li><a href="#">로그인</a></li>
          <li><a href="#">마이페이지</a></li>
        </ul>
      </nav>
      <div class="contentWrap">
        <div class="viewOption"> 
          <select name="languages" @change="handleChange">
            <option value="popularity.desc">인기순</option>
            <option value="release_date.desc">최신순</option>
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
