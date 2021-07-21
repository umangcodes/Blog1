<template>
  <v-container class="mt-5">
    <v-row>
      <h1 align="center">Short listed products</h1>
    </v-row>
    <v-row>
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col v-if="cart.length == 0">
        <v-card flat>
          <v-card-title>Nothing added</v-card-title>
          <v-card-text>
            Please visit our store to add products to your cart.
            <v-fab-transition>
              <v-btn
                elevation="1"
                icon
                absolute
                bottom
                right
                large
                @click="toProducts()"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>
        </v-card>
      </v-col>

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
    toProducts() {
      this.$router.push("/products");
    },
  },
  computed: {
    ...mapState(["products", "cart"]),
  },
  created() {
    console.log(this.cart);
  },
};
</script>

<style scoped></style>
