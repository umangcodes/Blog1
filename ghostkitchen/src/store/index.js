import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        name: "mango-banana",
        category: "Smoothies",
        size: "150/250 ml",
        ratings: 4,
        text: "lorem25",
        price: "100/200 INR",
        shortList: false,
        recommended: true,
        showDetails: false,
        nutriInfo: {
          cal: "200 cal",

          carbs: "100",
          sodium: "",
          protein: "",
          fat: "",
          others: "",
        },
        allergens: ["soy", "nuts"],
      },
      {
        id: 2,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        name: "Vegan milk bottle",
        category: "Vegan Milk",
        size: "300/500 ml",
        ratings: 4.5,
        price: "50/70 INR",
        shortList: false,
        showDetails: false,
        recommended: true,
        nutriInfo: {
          cal: "xxx cal",
          carbs: "",
          sodium: "",
          protein: "",
          fat: "",
          others: "",
        },
        allergens: ["soy", "nuts"],
      },
      {
        id: 3,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        name: "Hummus platter",
        category: "Spreads",
        size: "250/500 gm",
        ratings: 4,
        price: "350/400 INR",
        shortList: false,
        showDetails: false,
        recommended: true,
        nutriInfo: {
          cal: "200 cal",
          carbs: "",
          sodium: "",
          protein: "",
          fat: "",
          others: "",
        },
        allergens: ["soy", "nuts"],
      },
      {
        id: 4,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        name: "sample",
        category: "sample",
        size: "xx ml",
        ratings: 2.5,
        price: "xx/xxx INR",
        shortList: false,
        showDetails: false,
        recommended: true,
        nutriInfo: {
          cal: "200 cal",
          carbs: "",
          sodium: "",
          protein: "",
          fat: "",
          others: "",
        },
        allergens: ["soy", "nuts"],
      },
    ],
    cart: [],
  },
  mutations: {
    SHORTLIST_PRODUCT(state, id) {
      let index = state.products.find((product) => product.id === id);
      console.log("mut1:" + index);
      index = state.products.indexOf(index);
      console.log(index);
      console.log(state.products[index]);
      state.products[index].shortList = !state.products[index].shortList;
      console.log(state.products[index].shortList);
    },
    TOGGLE_DISPLAY(state, id) {
      let index = state.products.find((product) => product.id === id);
      console.log("mut1:" + index);
      index = state.products.indexOf(index);
      console.log(index);
      console.log(state.products[index]);
      state.products[index].showDetails = !state.products[index].showDetails;
      console.log(state.products[index].showDetails);
    },
    UPDATE_CART(state, id) {
      state.cart.push(state.products.find((product) => product.id == id));
    },
    UPDATE_CART_R(state, id) {
      state.cart = state.cart.filter((product) => product.id !== id);
      console.log(state.cart);
      
    },
  },
  actions: {
    shortListProduct({ commit }, id) {
      commit("SHORTLIST_PRODUCT", id);
    },
    toggleDetails({ commit }, id) {
      commit("TOGGLE_DISPLAY", id);
    },
    addToCart({ commit }, id) {
      commit("UPDATE_CART", id);
    },
    removeFromCart({ commit }, id) {
      commit("UPDATE_CART_R", id);
    },
  },
  modules: {},
});
