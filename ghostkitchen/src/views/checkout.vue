<template>
  <v-container class="mt-5">
    <v-row>
      <h1 align="center">Short listed products</h1>
    </v-row>
    <v-row>
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col
        v-for="product in products"
        :key="product.productId"
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
export default {
  components: {
    CartCards,
  },
  data() {
    return {
      // products: [
      //   {
      //     id: 1,
      //     name: "smoothies",
      //     img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      //     size: "200 ml",
      //     price: "150 INR",
      //     allergens: "None",
      //     show: false,
      //     inList: true,
      //   },
      //   {
      //     id: 2,
      //     name: "Hummus Platter",
      //     img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      //     size: "250 gm",
      //     price: "250 INR",
      //     allergens: "None",
      //     show: false,
      //     inList: true,
      //   },
      //   {
      //     id: 3,
      //     name: "Vegan Milk Bottle",
      //     img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      //     size: "200 ml",
      //     price: "70 INR",
      //     allergens: "may contain Soy!",
      //     show: false,
      //     inList: true,
      //   },
      //   {
      //     id: 4,
      //     name: "sample",
      //     img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      //     size: "xx ml",
      //     price: "xx INR",
      //     allergens: "xxx",
      //     show: false,
      //     inList: true,
      //   },
      //   {
      //     id: 5,
      //     name: "sample",
      //     img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      //     size: "xx ml",
      //     price: "xx INR",
      //     allergens: "xxx",
      //     show: false,
      //     inList: true,
      //   },
      // ],
      products: this.$store.state.products,
    };
  },
  methods: {
    removeProduct(id) {
      console.log(id),
        (this.products = this.products.filter((product) => product.id != id));
    },
  },
};
</script>

<style scoped></style>
