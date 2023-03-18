<template>
    <div>
        <!--Movie area-->
        <MovieList :movies="movies.results" :page="movies.page" :totalPages="movies.total_pages" :pageTitle="pageTitle" />
    </div>
</template>

<script>
    import Search from '~/components/home/Search'
    import MovieList from '~/components/post/MovieList'
    import Pagination from '~/components/common/Pagination'
    import {mapGetters} from 'vuex'

    export default {
        components: {
            Search,
            MovieList,
            Pagination,
        },
        computed: {
            ...mapGetters({
                movies: 'getMovies'
            }),

            pageTitle(){
                return this.$route.params.id.replace('-',' ');
            }
        },
        async fetch({store, params, query}){
            await store.dispatch('fetchMovies', {
                listType: params.id,
                page: query.page !== undefined ? query.page : 1,
            });
        },
        watchQuery: ['page'],
    }
</script>

<style>

</style>
