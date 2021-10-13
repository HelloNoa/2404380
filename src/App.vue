<template>
  <v-app>
    <v-main>
      <Main/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Main from './components/main';
import Footer from './components/footer';

export default {
  name: 'App',

  components: {
    Main,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import './css/reset.css';
</style>
