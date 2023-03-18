<template>
    <div>

        <!--Movie area-->
        <MovieList :movies="movies.results" :page="movies.page" :totalPages="movies.total_pages" :pageTitle="searchPageTitle" />
    </div>
</template>

<script>
    import Search from '~/components/home/Search'
    import MovieList from '~/components/post/MovieList'
    import {mapGetters} from 'vuex'

    export default {
        name: "index",
        components: {
            Search,
            MovieList,
        },
        computed: {
            ...mapGetters({
                movies: 'getSearchResults'
            }),

            searchPageTitle(){
                return `Search Results: "${this.$route.query.q}"`;
            }
        },
        async fetch({store, query}){
            await store.dispatch('fetchSearchMovies', {
                keyword: query.q,
                page: query.page !== undefined ? query.page : 1,
            });
        },
        watchQuery: ['q','page'],
    }
</script>

<style scoped>

</style>
