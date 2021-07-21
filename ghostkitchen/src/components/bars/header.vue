<template>
  <v-app-bar app class="custom" dark height="55">
    <!-- hide-on-scroll -->
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
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text rounded v-bind="attrs" v-on="on" to="/services">
            <v-icon class="pa-1">mdi-cart</v-icon> Our Services
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
        { id: 91, title: "Home", icon: "home", path: "/" },
        { id: 92, title: "About", icon: "information", path: "/about" },
      ],
      productLinks: [
        {
          id: 911,
          title: "Services",
          icon: "room-service",
          path: "/services",
        },
        {
          id: 912,
          title: "Products",
          icon: "format-list-bulleted-square",
          path: "/products",
        },
        { id: 913, title: "Cart", icon: "cart", path: "/checkout" },
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
