<template>
  <v-app-bar app hide-on-scroll class="custom" dark height="55">
    <v-app-bar-nav-icon> UA</v-app-bar-nav-icon>
    <v-toolbar-title> FOOD BLOG </v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-for="link in links" :key="link.id">
      <v-btn text rounded :to="link.path">
        <v-icon class="pa-1">mdi-{{ link.icon }}</v-icon>
        {{ link.title }}</v-btn
      >
      <v-divider class="mx-1" vertical></v-divider>
    </div>
    <div class="text-center">
      <v-menu open-on-hover top offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text rounded v-bind="attrs" v-on="on">
            <v-icon class="pa-1">mdi-cart</v-icon> Products
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="links in productLinks" :key="links.id">
            <v-list-item-title
              ><v-btn text :to="links.path"
                ><v-icon class="pa-1">mdi-{{ links.icon }}</v-icon
                >{{ links.title }}</v-btn
              ></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: [
        { id: 1, title: "Home", icon: "home", path: "/" },
        { id: 3, title: "About", icon: "information", path: "/about" },
      ],
      productLinks: [
        {
          id: 2,
          title: "Products",
          icon: "format-list-bulleted-square",
          path: "/products",
        },
        { id: 4, title: "Cart", icon: "cart", path: "/checkout" },
      ],
    };
  },
};
</script>

<style scoped>
.custom {
  background-color: #003d00c0 !important;
  border-color: white !important;
  box-shadow: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
}
</style>
