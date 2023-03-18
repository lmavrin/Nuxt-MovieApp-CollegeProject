<template>
    <div class="movie-area p-40">
        <div class="container">
            <div class="section-title">
                <h2>{{pageTitle || 'Movies'}}</h2>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3" v-for="movie in movies" :key="movie.id">
                    <Movie :movie="movie" :key="movie.id" />
                </div>
            </div>
        </div>

        <!--Pagination-->
        <Pagination :page="page" :totalPages="totalPages" />
    </div>
</template>

<script>
    import Movie from '~/components/post/Movie'
    import Pagination from '~/components/common/Pagination'

    export default {
        name: "PostList",
        props: {
            movies: {
                type: Array,
                required: true,
            },
            page: {
                type: Number
            },
            totalPages: {
                type: Number
            },
            pageTitle: {
                type: String,
            }
        },
        components: {
            Movie,
            Pagination
        },
        methods: {
            loadMore () {
                let processing;

                window.onscroll = () => {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

                    if (processing)
                        return false;

                    if (bottomOfWindow && this.page !== this.totalPages) {
                        let listType = !this.$route.params.id ? 'popular' : this.$route.params.id.replace('-','_');
                        processing = true;

                        this.$store.commit('setLoading', true);
                        this.$store.dispatch('loadMorePages', {
                            listType: listType,
                            page: this.page + 1,
                            processing: processing
                        }).then(res => {
                            processing = null;
                        })
                    }
                };
            },
        },
        mounted() {
            // this.loadMore();
        },
    }
</script>

<style scoped>

</style>
