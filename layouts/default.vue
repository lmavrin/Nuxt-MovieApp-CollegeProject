<template>
  <div class="wrapper">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
  import Header from '~/components/common/Header'
  import Footer from '~/components/common/Footer'

  export default {
      components: {
          Header,
          Footer,
      },
      mounted() {
          if (!process.server) {
              let scripts = [
                  {src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js'},
                  {src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'},
                  {src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js'},
              ];

              for(let i = 0; i < scripts.length; i++){
                  const script = document.createElement("script");
                  script.src = scripts[i].src;
                  document.body.appendChild(script)
              }
          }
      },
  }
</script>

<style>

</style>
