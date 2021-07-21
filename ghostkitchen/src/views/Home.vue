<template>
  <v-container class="mx-auto my-5">
    <v-row>
      <v-col cols="12" md="6">
        <!-- <v-card>
          <v-img
            height="400"
            class="white--text align-center"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
          </v-img>
        </v-card> -->
        <v-card flat>
          <v-card-title> Welcome to Food Blog. </v-card-title>
          <v-card-subtitle>
            This site is under development. Please contact the developer for
            details.
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title> Taking a site tour </v-card-title>
          <v-card-subtitle>Feel free to look around!</v-card-subtitle>
          <v-card-text>
            Features:
            <ul>
              <li>
                This site can show case your special and regular products.
              </li>
              <li>Use the carousel to display new offers</li>
              <li>
                Gallery can display awesome pictures of your awesome products
              </li>
              <li>
                Your clients can get in touch with you using the contact us
              </li>
              <li>
                Display your credentials and other important docs on a special
                customised page.
              </li>
              <li>For more details and demo, please visit the link below.</li>
            </ul>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text to="/services">services Page</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card min-height="308">
          <v-card-title> Developer contact</v-card-title>
          <v-card-subtitle>Feel free to contact me! </v-card-subtitle>
          <v-card-text>
            <ul>
              <li>
                <v-btn text @click="redirectToDevLi()"
                  ><v-icon>mdi-account</v-icon> Umang A</v-btn
                >
              </li>
              <li>
                <v-btn text @click="redirectToDevGh()"
                  ><v-icon>mdi-github</v-icon>GitHub repo</v-btn
                >
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  methods: {
    getNewProducts() {
      this.$store.dispatch("getNewProducts");
    },
    redirectToDevLi() {
      window.open("https://www.linkedin.com/in/umanga-eng/").focus();
    },
    redirectToDevGh() {
      window.open("https://github.com/umangcodes").focus();
    },
  },
  computed: {
    ...mapState(["newProducts"]),
  },
};
</script>

<style scoped>
.blur-white {
  background: rgba(255, 255, 255, 0.2) !important;
  border: 0px !important;
}
</style>
