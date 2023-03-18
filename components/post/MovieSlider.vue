<template>
    <div class="movie-slider">
        <div class="movie-slider__img">
            <img class="img-fluid" :src="imgUrl" :alt="movie.title">
            <div class="movie-slider__content">
                <h4>
                    <nuxt-link :to="'/movie/' + movie.id">{{movie.title}}</nuxt-link>
                </h4>
                <div class="movie-item__rate">
                    <i class="fas fa-star"></i>
                    <span>{{movie.vote_average}}/<small>10</small></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MovieSlider",
        props: {
            movie: {
                type: Object,
                required: true,
            }
        },
        computed: {
            imgUrl(){
                return this.movie.poster_path !== null ? 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path : '/img/defaultposter.png'
            }
        }
    }
</script>

<style scoped>

</style>
