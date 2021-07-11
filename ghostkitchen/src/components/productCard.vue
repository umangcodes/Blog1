<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      class="white--text align-end"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    >
      <v-card-title>{{ product.name }}</v-card-title>
    </v-img>
    <v-card-subtitle class="mx-1">{{ product.category }}</v-card-subtitle>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="product.ratings"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
          class="pa-0 mt-0"
        ></v-rating>

        <div class="grey--text pa-0">{{ product.ratings }}</div>
      </v-row>

      <div class="mx-1 my-4 text-subtitle-1">{{ product.price }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="orange lighten-2" text> Product Details </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="product.showDetails = !product.showDetails">
        <v-icon>{{
          product.showDetails ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-divider class="mx-4"></v-divider>
    <v-expand-transition>
      <div v-show="product.showDetails">
        <v-card flat>
          <!-- TODO:: change this -->
          <v-card-text>
            <strong>whats in it?</strong>
            <v-divider class="mr-16"></v-divider>
            <div>
              {{ product.text }}
            </div>

            <strong>Nutritional Information</strong>
            <v-divider class="mr-16"></v-divider>
            <div v-for="nutrition in product.nutriInfo" :key="nutrition">
              {{ nutrition }}
            </div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <v-icon>mdi-exclamation-thick</v-icon>allergens:
            {{ product.allergens }}</v-card-text
          >
        </v-card>
      </div>
    </v-expand-transition>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="shortList(product.id)"><v-icon>mdi-plus</v-icon></v-btn>
      <v-btn color="rgba(0,0,0,0.1)"> Details </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    product: [],
  },
  methods: {
    shortList(id) {
      console.log(id);
      this.$store.dispatch("shortListProduct", id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
