import {defineStore} from "pinia"
import {ref} from 'vue';

export const useMovieStore= defineStore ("movie",()=>{
  const movie = ref(null);
  const movieDetail = ref(null);
  const movieDetailVideo = ref(null);
  const movieCredits = ref(null);
  const MoviesCertification = ref(null);
  const isLoading = ref(false);

    const fetchAPI = async (url) => {
      isLoading.value = true;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTUwNzc3Zjg2YTNhNDZjZDYzZDgzY2NjZGUyYjRhYiIsInN1YiI6IjY1MGU0YWVmZTFmYWVkMDEwMGU3ZjBhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ljo6Zx-6_kL8WMzv07A_xXCPZllYUhAqJHSK041zD-Y'
        }
      };
      
      const data= await fetch(`https://api.themoviedb.org/3${url}`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
      isLoading.value = false;
      return data;
    }

/**fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
   */
    
    const getMoviesList = async(page = 1,sort)=>{//release_date.desc,,popularity.desc
      const data = await fetchAPI(`/discover/movie?include_adult=false&include_video=false&language=ko&page=${page}&sort_by=${sort}`);
      movie.value = data.results;
    };
  
    
    const getMoviesCertification = async(page = 1)=>{
      const data = await fetch('/certification/movie/list', options)
      movie.value = data.results;
    };

    const getMovieDetail = async(id) => {
      const data = await fetchAPI(`/movie/${id}?language=ko`)
      movieDetail.value = data;
      // const options = {
      //   method: 'GET',
      //   headers: {
      //     accept: 'application/json',
      //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTUwNzc3Zjg2YTNhNDZjZDYzZDgzY2NjZGUyYjRhYiIsInN1YiI6IjY1MGU0YWVmZTFmYWVkMDEwMGU3ZjBhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ljo6Zx-6_kL8WMzv07A_xXCPZllYUhAqJHSK041zD-Y'
      //   }
      // };
      //  return await fetch(`/movie/${id}?language=en-US`, options)

      //   .then((response) => response.json())
      //   .then((response) => (movieDetail.value = response))
      //   .catch((err) => console.error(err));
      //   idLoading.value=false;
    };
    const getMoviesVideo = async(id)=>{
      const data = await fetchAPI(`/movie/${id}/videos?language=en-US`);
      movieDetailVideo.value = data;
    };
    const getMoviesCredits = async (id) => {
      const data = await fetchAPI(`/movie/${id}/credits?`)
      movieCredits.value = data;
      console.log(data);
    };
    return {
      movie,
      movieDetail,
      movieDetailVideo,
      isLoading,
      movieCredits,
      MoviesCertification,
      getMoviesList,
      getMovieDetail,
      getMoviesVideo,
      getMoviesCredits,
      getMoviesCertification
    }
});