<template>
    <div class="movie-item">
        <div class="movie-item__img">
            
                <img :src="imgUrl"
                     :alt="movie.title" class="img-fluid">
            
        </div>
        <div class="movie-item__content">
            <h4 class="movie-item__title">
                {{movie.title}}
            </h4>
            <div class="movie-item__rate">
                <i class="fas fa-star"></i>
                <span>{{movie.vote_average}}/<small>10</small></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post",
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
