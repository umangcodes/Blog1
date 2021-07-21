<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card-title class="pl-0 pr-0">About us</v-card-title>
        <v-card-subtitle class="pl-0 pr-0"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ducimus
          dolor repellendus ex exercitationem voluptatibus iste consequuntur,
          sapiente, provident accusamus autem eveniet consequatur nesciunt ea at
          porro rerum est delectus deleniti, placeat possimus. Voluptas laborum
          illum aspernatur adipisci et eveniet, molestias aut, excepturi
          molestiae est, eum vero nihil minus qui!</v-card-subtitle
        >
      </v-col>
    </v-row>
    <v-row class="mt-2 mb-2">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title> Contact Us </v-card-title>
          <v-card-subtitle>
            Fill the following form to contact us
          </v-card-subtitle>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                prepend-icon="mdi-account"
                label="Your name"
                type="text"
                :rules="formRules.nameRules"
                v-model="order.name"
                required
              ></v-text-field>

              <v-text-field
                prepend-icon="mdi-email"
                label="Your email"
                type="email"
                :rules="formRules.emailRules"
                v-model="order.email"
                required
              >
              </v-text-field>

              <v-dialog
                ref="orderDate"
                v-model="order.modal"
                :return-value.sync="order.date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="order.date"
                    label="Order date"
                    prepend-icon="mdi-calendar"
                    readonly
                    :rules="formRules.dateRules"
                    v-bind="attrs"
                    v-on="on"
                    required
                  ></v-text-field>
                </template>
                <v-date-picker v-model="order.date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="order.modal = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.orderDate.save(order.date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>

              <v-autocomplete
                prepend-icon="mdi-message-alert-outline"
                label="Where did you hear about us?"
                :items="referenceClassItems"
                v-model="order.referenceClass"
              ></v-autocomplete>
              <v-text-field
                prepend-icon="mdi-wallet-giftcard"
                label="Refered by"
                v-model="order.reference"
              >
              </v-text-field>

              <v-text-field
                prepend-icon="mdi-sale"
                label="coupon code"
                v-model="order.coupon"
              >
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="submitForm()">Submit</v-btn>
            <v-btn color="warning">Reset</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card elevation="1" class="rounded-xl">
          <v-card-title>Ghost Kitchen 1</v-card-title>
          <v-card-subtitle>Promoting health and hygiene</v-card-subtitle>
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            src="https://picsum.photos/id/11/500/300"
            elevation="1"
          ></v-img>
          <v-card-text
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id et
            minima quas hic? Asperiores fugit dolor tempore quis eum ipsa amet
            iusto consectetur voluptas culpa.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon><v-icon>mdi-instagram</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-twitter</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-reddit</v-icon></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Services from "@/views/services.vue";
export default {
  components: {
    // Services,
  },
  data() {
    return {
      order: {
        name: "",
        email: "",
        date: "",
        reference: "",
        coupon: "",
        referenceClass: "",
        modal: false,
      },
      referenceClassItems: [
        "Facebook",
        "Instagram",
        "Friend/Family",
        "Ads",
        "Web search",
      ],

      formRules: {
        nameRules: [
          (value) => value.length >= 3 || "Name must be longer than 2 letters",
          (value) =>
            value.length < 15 || "Name must be shorter than 15 letters",
        ],
        emailRules: [
          (value) =>
            value.indexOf("@") != 0 || "provide a valid email username ",
          (value) => value.includes("@" || "Email must have @ symbol"),
          (value) =>
            value.indexOf(".") - value.indexOf("@") > 3 ||
            "Provide a valid domain name",
          (value) =>
            value.length - value.indexOf(".") >= 2 ||
            "Provide a valid email extension",
        ],
        dateRules: [(value) => !!value || "Date required"],
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Submit clicked");
      console.log(this.order);
    },
    formReset() {
      console.log("form clear");
    },
  },
};
</script>
