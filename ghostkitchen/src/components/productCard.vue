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
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>{{ value.title }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="value.ratings"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">{{ value.ratings }}</div>
      </v-row>

      <div class="my-4 text-subtitle-1">Exp$$ • Genre</div>

      <div>
        {{ value.text }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <v-icon>mdi-exclamation-thick</v-icon>allergens:
      {{ value.allergies }}</v-card-text
    >

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="rgba(0,0,0,0.1)" @click="reserve"> Details </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    value: [],
  },
};
</script>

<style lang="scss" scoped></style>
