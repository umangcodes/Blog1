<template>
  <v-container class="mt-5">
    <v-row>
      <h1 align="center">Short listed products</h1>
    </v-row>
    <v-row>
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <h2 v-if="!cart">
        Please visit our store to select the products to add them to the cart
      </h2>
      <v-col
        v-for="product in cart"
        :key="`${product.productId}-cart`"
        cols="12"
        md="4"
      >
        <CartCards :product="product" /> </v-col
    ></v-row>
  </v-container>
</template>
5

<script>
import CartCards from "@/components/cartCards.vue";
import { mapState } from "vuex";
export default {
  components: {
    CartCards,
  },
  data() {
    return {};
  },
  methods: {
    removeProduct(id) {
      console.log(id),
        (this.products = this.products.filter((product) => product.id != id));
    },
  },
  computed: {
    ...mapState(["products", "cart"]),
  },
};
</script>

<style scoped></style>
