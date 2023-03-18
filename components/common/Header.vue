<template>
    <header class="header">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <nuxt-link class="navbar-brand" to="/">Movie</nuxt-link>
                <div><svg-icon /></div>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control search-box__input"
                                placeholder="Search..."
                                aria-describedby="button-addon2"
                                @keyup.enter="search"
                                v-model="searchWord">
                            <div class="input-group-append">
                               <button class="btn btn-outline-secondary search-box__btn" type="button" @click="search">
                                   <i class="fas fa-search"></i>
                               </button>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>


  import SvgIcon from '~/components/svg/SvgIcon.vue'

    export default {
        name: "Search",
        components: { SvgIcon },
        data(){
            return {
                searchWord: ''
            }
        },
        methods: {
            search(){
                this.$router.push({path: '/search', query: {q: this.searchWord}});
            }
        
    }
    }
</script>
