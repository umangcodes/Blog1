<template>
  <v-app-bar app hide-on-scroll>
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
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: [
        { id: 1, title: "Home", icon: "home", path: "/home" },
        { id: 2, title: "Products", icon: "cart", path: "/products" },
        { id: 3, title: "About", icon: "information", path: "/about" },
        { id: 4, title: "List", icon: "cart", path: "/checkout" },
      ],
    };
  },
};
</script>

<style scoped></style>
