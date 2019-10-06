<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app>
            <v-list dense>
                <v-list-item v-on:click="sayHello">
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="sayHello">
                    <v-list-item-action>
                        <v-icon>mdi-contact-mail</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Contact</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="indigo" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Liste der Lieferanten</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-btn class="ma-2" color="green" dark @click="showForm = ! showForm">
                Lieferant hinzufügen
                <v-icon dark right>mdi-plus-circle-outline</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <v-container>
                <v-form ref="form" v-if="showForm">
                    <v-text-field v-model="name" :counter="10" label="Name" required></v-text-field>
                    <v-text-field v-model="ort" label="Ort" required></v-text-field>
                    <v-text-field v-model="plz" label="Postleitzahl" required></v-text-field>
                    <v-btn color="success" class="mr-4" @click="addLieferant">Hinzufügen</v-btn>
                    <v-btn color="info" class="mr-4" @click="reset">Reset Form</v-btn>
                </v-form>
            </v-container>

            <v-container>
                <v-row>
                    <lieferant-card
                        cols="12"
                        sm="12"
                        md="4"
                        lg="3"
                        v-for="(item, index) in lieferanten"
                        v-bind:key="index"
                        v-bind:lieferant="item"
                    ></lieferant-card>
                </v-row>
            </v-container>
        </v-content>

        <v-footer color="indigo" app>
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
import Lieferant from "@/components/Lieferant";

export default {
    name: "App",
    components: {
        "lieferant-card": Lieferant
    },
    props: {
        source: String
    },
    data: () => ({
        drawer: null,
        showForm: false,
        name: "",
        ort: "",
        plz: "",
        lieferanten: [
            {
                name: "Hallo Pizza",
                ort: "Leipzig",
                plz: "04275",
                img: require('@/assets/food-pizza.jpg'),
                rating: 4.5,
                rating_count: 20
            },
            {
                name: "Don Alfredo",
                ort: "Dresden",
                plz: "01234",
                img: require('@/assets/food-wrap.jpg'),
                rating: 4.1,
                rating_count: 413
            },
            {
                name: "Pizza Luigi",
                ort: "Bochum",
                plz: "43210",
                img: require('@/assets/food-sushi.jpg'),
                rating: 3.7,
                rating_count: 114
            }
        ]
    }),
    methods: {
        sayHello: function() {
            return "";
        },
        reset() {
            this.$refs.form.reset();
        },
        addLieferant() {
          this.lieferanten.push({
            name: this.name,
            ort: this.ort,
            plz: this.plz,
            img: 'https://www.cntry.biz/wp-content/uploads/2015/12/Female-Coders.jpg',
            rating: 0,
            rating_count: 0
            }),
          this.reset();
        }
    }
};
</script>
