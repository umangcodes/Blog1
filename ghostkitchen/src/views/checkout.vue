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
        <v-card>
          <v-img
            :src="product.img"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,0.01), rgba(0,0,0,0.05)"
            height="200px"
          >
            <v-card-title>{{ product.name }}</v-card-title>
          </v-img>
          <v-card-actions>
            <v-btn color="orange lighten-2" text> Explore </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              icon
              @click="removeProduct(product.id)"
              v-show="!product.show"
              ><v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn icon @click="product.show = !product.show">
              <v-icon>{{
                product.show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="product.show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians,
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn rounded text @click="removeProduct(product.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-card-actions>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col></v-row
    >
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "smoothies",
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          size: "200 ml",
          price: "150 INR",
          allergens: "None",
          show: false,
          inList: true,
        },
        {
          id: 2,
          name: "Hummus Platter",
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          size: "250 gm",
          price: "250 INR",
          allergens: "None",
          show: false,
          inList: true,
        },
        {
          id: 3,
          name: "Vegan Milk Bottle",
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          size: "200 ml",
          price: "70 INR",
          allergens: "may contain Soy!",
          show: false,
          inList: true,
        },
        {
          id: 4,
          name: "sample",
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          size: "xx ml",
          price: "xx INR",
          allergens: "xxx",
          show: false,
          inList: true,
        },
        {
          id: 5,
          name: "sample",
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          size: "xx ml",
          price: "xx INR",
          allergens: "xxx",
          show: false,
          inList: true,
        },
      ],
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
