<template>
  <v-app>
    <Header />

    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/bars/footer.vue";
import Header from "@/components/bars/header.vue";
export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
}
</style>
