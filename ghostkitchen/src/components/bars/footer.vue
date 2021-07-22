<template>
  <v-footer app absolute dark>
    <!-- <v-row>
      <v-col class="pt-2 mt-1 text-center" cols="12" dark> -->
    <div class="footerContent">
      <strong>
       &copy; {{ new Date().getFullYear() }} — Project developed by Umang A</strong
      >
    </div>
    <!-- </v-col>
    </v-row> -->
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footerContent {
  width: 100vw;
  text-align: center;
}
</style>
