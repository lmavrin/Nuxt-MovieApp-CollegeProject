<template>
    <div>
        <!--Slider-->
        <Slider :movies="sliderMovies" />

        <!--Search area-->
        

        <!--Movie area-->
        <MovieList :movies="movies.results" :page="movies.page" :totalPages="movies.total_pages" />
    </div>
</template>

<script>
    import Slider from '~/components/home/Slider'
    import Search from '~/components/home/Search'
    import MovieList from '~/components/post/MovieList'
    import {mapGetters} from 'vuex'

    export default {
        components: {
            Slider,
            Search,
            MovieList,
        },
        computed: {
            ...mapGetters({
                movies: 'getMovies',
                sliderMovies: 'getMovieSlider',
            }),
        },
        async fetch({store, query}){
            await store.dispatch('fetchMoviesSlider');

            await store.dispatch('fetchMovies', {
                listType: 'popular',
                page: query.page !== undefined ? query.page : 1,
            })
        },
        watchQuery: ['page'],
    }
</script>

<style>

</style>
