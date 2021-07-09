<template>
  <v-container>
    <h1>Services</h1>
    <v-divider class="mx-auto my-2"></v-divider>
    <v-row>
      <v-col cols="8">
        <v-card flat>
          <v-card-title>Products</v-card-title>
          <v-card-subtitle>list of products</v-card-subtitle>
          <v-card-text
            >Find your favourite items in our menu. Visit xxxxx for finding
            exciting new dishes and drinks.</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="goToProducts()"
              ><v-icon>mdi-silverware</v-icon> Bon Appetite!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-img
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="mx-auto my-2"></v-divider>
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-img
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card flat>
          <v-card-title>Cart</v-card-title>
          <v-card-subtitle>Short list dishes you like!</v-card-subtitle>
          <v-card-text
            >The site is under development, you can short list the items you
            want and then call the restaurant for placing an order. Do not
            forget to ask about exciting new offers.</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="goToCart()"
              ><v-icon>mdi-cart</v-icon> Let's Go!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="mx-auto my-2"></v-divider>
  </v-container>
</template>

<script>
export default {
  methods: {
    goToProducts() {
      this.$router.push("/products");
    },
    goToCart() {
      this.$router.push("/checkout");
    },
  },
};
</script>

<style scoped>
.service-cards {
  background-color: #ff2b0f17 !important;
  border-color: white !important;
  box-shadow: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
}
</style>
