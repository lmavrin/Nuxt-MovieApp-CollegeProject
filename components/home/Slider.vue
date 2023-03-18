<template>
    <div class="home-slider">
        <div class="container">
            <div class="movie-slider-row">
                <VueSlickCarousel v-bind="settings">
                    <MovieSlider v-for="movie in movies" :movie="movie" :key="movie.id" />
                </VueSlickCarousel>
            </div>
        </div>
    </div>
</template>

<script>
    import MovieSlider from '~/components/post/MovieSlider'

    export default {
        name: "Slider",
        components: {
            MovieSlider,
        },
        props: {
            movies: {
                type: Array,
                required: true,
            },
        },
        data(){
            return {
                settings: {
                    "dots": true,
                    "arrows": false,
                    "focusOnSelect": true,
                    "infinite": true,
                    "speed": 1500,
                    "autoplay": true,
                    "autoplaySpeed": 5000,
                    "slidesToShow": 5,
                    "slidesToScroll": 5,
                    "touchThreshold": 7,
                    "pauseOnDotsHover": true,
                    "responsive": [
                        {
                            "breakpoint": 1024,
                            "settings": {
                                "slidesToShow": 3,
                                "slidesToScroll": 3,
                            }
                        },
                        {
                            "breakpoint": 600,
                            "settings": {
                                "slidesToShow": 2,
                                "slidesToScroll": 2,
                                "initialSlide": 2
                            }
                        },
                        {
                            "breakpoint": 480,
                            "settings": {
                                "slidesToShow": 1,
                                "slidesToScroll": 1,
                                "dots": false,
                            }
                        }
                    ]
                }
            }
        }
    }
</script>
