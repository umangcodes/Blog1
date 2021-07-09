<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-card flat>
          <v-card-title> Contact Us</v-card-title>
          <v-card-subtitle
            >Please provide your information and we will contact you
            soon!</v-card-subtitle
          >
          <v-card-text>
            <v-form>
              <v-input-field>Your name</v-input-field>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Services from "@/views/services.vue";
export default {
  components: {
    // Services,
  },
};
</script>
