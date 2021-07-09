<template>
  <v-container class="mx-auto my-5">
    <v-row>
      <v-col cols="12" lg="12">
        <v-card>
          <v-img
            height="400"
            class="white--text align-center"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
            <v-card class="blur-white" flat>
              <v-card-title style="justify-content: center"
                >Home page image</v-card-title
              >
            </v-card>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  components: {},
};
</script>

<style scoped>
.blur-white {
  background: rgba(255, 255, 255, 0.2) !important;
  border: 0px !important;
}
</style>
