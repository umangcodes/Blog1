<template>
  <v-container>
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
          v-show="!product.showDetails"
          ><v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn icon @click="toggle(product.id)">
          <v-icon>{{
            product.showDetails ? "mdi-chevron-up" : "mdi-chevron-down"
          }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="product.showDetails">
          <v-divider></v-divider>

          <v-card-text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dicta,
            odio quos fuga cum illum porro doloremque id, voluptatum incidunt
            quod velit impedit vel at?</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded text @click="removeProduct(product.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    product: [],
  },
  methods: {
    removeProduct(id) {
      console.log(id),
        // (this.product = this.product.filter((product) => product.id != id));
        this.$store.dispatch("removeFromCart", id);
      this.$router.push("/checkout");
    },
    toggle(id) {
      this.$store.dispatch("toggleDetails", id);
    },
  },
};
</script>

<style scoped></style>
