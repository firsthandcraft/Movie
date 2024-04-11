<script setup>
    import { onBeforeMount } from 'vue';
    import { useRoute,useRouter } from 'vue-router';
    import { useMovieStore } from '@/stores/movie.js';
    const route =useRoute();
    const movieStore = useMovieStore();
    onBeforeMount(()=>{
        console.log(route.params.id)
        movieStore.getMovieDetail(route.params.id);
        movieStore.getMoviesVideo(route.params.id);
        movieStore.getMoviesCredits(route.params.id);
    })
    const getVideoEmbedLink = (videoKey) => {
    return `https://www.youtube.com/embed/${videoKey}`;
    }
</script>
<template>
  <div class="contentDetail">
    
    <div v-if="!movieStore.isLoading">
      <ul class="titleWrap">
        <li class="imgWrap">
          <img :src="`https://image.tmdb.org/t/p/w500${movieStore.movieDetail?.poster_path}`" alt="">
        </li>
        <li>
          <h3>{{ movieStore.movieDetail?.title }}</h3>
          <section> 
            <span class="subTitle">장르</span> 
            <p v-if="movieStore.movieDetail?.genres">
              <span v-for="(genre, index) in movieStore.movieDetail.genres" :key="genre.id">
                {{ genre.name }}
                <!-- 마지막 요소 뒤에는 쉼표를 표시하지 않음 -->
                <span v-if="index !== movieStore.movieDetail.genres.length - 1">, </span>
              </span>
            </p>
          </section>
          <section> <span class="subTitle">개봉일</span>{{ movieStore.movieDetail?.release_date }}</section>
          <section> <span class="subTitle">평점</span>{{ movieStore.movieDetail?.vote_average }}</section>
          <section v-if="movieStore.movieCredits?.cast"> 
            <span class="subTitle">출연</span>
            <p>
                <span v-for="(cast,index) in movieStore.movieCredits.cast.slice(0, 4)" :key="cast.id">
                  {{ cast.name }}     
                   <i v-if="index !== 3 && index !== 3">, </i>          
                </span>
               
            </p>
          </section>
          <section v-if="movieStore.movieCredits?.cast"> 
            <span class="profile" v-for="(cast) in movieStore.movieCredits.cast.slice(0, 4)" :key="cast.id">
                <img :src="`https://image.tmdb.org/t/p/w500${cast.profile_path}`" alt="">
            </span>
          </section>

        </li>
      </ul>
      <div class="note">
        <p>{{ movieStore.movieDetail?.overview }}</p>
      
      </div>
   </div>
   <div v-else>isLoading...</div>
  </div>
</template>


