<template>
  <v-container class="pt-8 pb-8">
    <!-- <v-card flat height="100vh" background="rgba(0,0,0,1)"> -->
    <v-row>
      <h1 class="pa-1">Featured Products</h1>
    </v-row>
    <v-row class="mt-1 mb-1">
      <v-divider></v-divider>
    </v-row>
    <v-row class="mt-2 mb-2 pt-2 pb-2">
      <ProductsCarousel />
    </v-row>
    <v-row class="mt-1 mb-1">
      <v-divider></v-divider>
    </v-row>
    <!-- </v-card> -->
    <v-row>
      <h1 class="pa-1">Our Range</h1>
    </v-row>
    <v-row class="mt-1 mb-1">
      <!-- <v-col v-for="demo in demos" :key="demo.id" cols="12" md="4">
        <v-hover v-slot="{ hover }">
          <v-card
            class="pa-2"
            :elevation="hover ? 5 : 2"
            :class="{ 'on-hover': hover }"
            color="rgba(255,255,255,0.2)"
            max-width="400"
          >
            <v-card-title>{{ demo.title }}</v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  small
                  half-increments
                  :value="demo.ratings"
                  size="8"
                ></v-rating>
                <div class="ms-4">
                  {{ demo.ratings }}
                </div>
              </v-row>
              <v-row>
                <div class="ma-4">
                  {{ demo.text }}
                </div>
              </v-row></v-card-text
            >
          </v-card>
        </v-hover>
      </v-col> -->
      <v-col
        v-for="demo in products"
        :key="`${demo.id}-product-card`"
        cols="12"
        sm="4"
      >
        <ProductCard :product="demo" />
      </v-col>
    </v-row>
    <v-row>
      <Specials />
    </v-row>
  </v-container>
</template>

<script>
import ProductsCarousel from "@/components/productsCarousel.vue";
import ProductCard from "@/components/productCard.vue";
import Specials from "@/components/specials.vue";
import { mapState } from "vuex";
export default {
  name: "Products",
  components: {
    ProductsCarousel,
    ProductCard,
    Specials,
  },
  data() {
    return {
      // demos: [
      //   {
      //     id: 1,
      //     title: "Card 1",
      //     ratings: 5,
      //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni quaerat repudiandae. Quia itaque harum tempora tempore vitae porro aspernatur iure doloribus, autem molestias corrupti!",
      //     allergies: "None",
      //   },
      //   {
      //     id: 2,
      //     title: "Card 2",
      //     ratings: 3.5,
      //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni quaerat repudiandae. Quia itaque harum tempora tempore vitae porro aspernatur iure doloribus, autem molestias corrupti!",
      //     allergies: "Nuts, soy",
      //   },
      //   {
      //     id: 3,
      //     title: "Card 3",
      //     ratings: 4,
      //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni quaerat repudiandae. Quia itaque harum tempora tempore vitae porro aspernatur iure doloribus, autem molestias corrupti!",
      //     allergies: "None",
      //   },
      // ],
      demos: this.$store.state.products,
    };
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style scoped>
.on-hover {
  transition: 0.3s;
}
</style>
