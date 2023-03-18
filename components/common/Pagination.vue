<template>
    <div class="pagination-area mt-2" v-if="totalPages > 1">
        <div class="container">
            <div class="pagination-inner text-center">
                <nuxt-link :to="{path: $route.fullPath, query: {page: page > 1 ? page-1 : page}}"
                           :class="{disabled: page === 1}">
                    <i class="fas fa-angle-left"></i> prev
                </nuxt-link>
                <span>{{page}}/{{totalPages}}</span>
                <nuxt-link :to="{path: $route.fullPath, query: {page: page !== totalPages ? page + 1 : page}}"
                           :class="{disabled: page === totalPages}">
                    next <i class="fas fa-angle-right"></i>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            totalPages: {
                type: Number,
                required: false,
            },
            page: {
                type: Number,
                required: false,
            }
        },
    }
</script>

<style scoped>

</style>
