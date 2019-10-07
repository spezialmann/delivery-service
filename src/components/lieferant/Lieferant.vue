<template>
    <v-content>
        <v-container>
            <v-form ref="form" v-if="showForm">
                <v-text-field v-model="lieferant.name" :counter="10" label="Name" required></v-text-field>
                <v-text-field v-model="lieferant.ort" label="Ort" required></v-text-field>
                <v-text-field v-model="lieferant.plz" label="Postleitzahl" required></v-text-field>
                <v-btn color="success" class="mr-4" @click="addLieferantRemote">Hinzufügen</v-btn>
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
                    v-for="(item, index) in lieferantenRemote"
                    v-bind:key="index"
                    v-bind:lieferant="item"
                ></lieferant-card>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
import LieferantCard from "@/components/lieferant/LieferantCard.vue";

export default {
    name: "App",
    components: {
        "lieferant-card": LieferantCard
    },
    props: ["showForm"],
    data: () => ({
        drawer: null,
        lieferant: {
            name: "",
            ort: "",
            plz: "",
        },
        lieferantenRemote: [],
        lieferanten: [
            {
                name: "Hallo Pizza",
                ort: "Leipzig",
                plz: "04275",
                img: require("@/assets/food-pizza.jpg"),
                rating: 4.5,
                rating_count: 20
            },
            {
                name: "Don Alfredo",
                ort: "Dresden",
                plz: "01234",
                img: require("@/assets/food-wrap.jpg"),
                rating: 4.1,
                rating_count: 413
            },
            {
                name: "Pizza Luigi",
                ort: "Bochum",
                plz: "43210",
                img: require("@/assets/food-sushi.jpg"),
                rating: 3.7,
                rating_count: 114
            }
        ]
    }),
    mounted() {
        this.$http.get("http://localhost:8080/lieferant")
            .then(response => {
                return response.json();
            })
            .then(data => {
                // eslint-disable-next-line
                console.log(data);
                this.lieferantenRemote = data;
            }, error => {
                // eslint-disable-next-line
                console.log(error);
            });
    },
    methods: {
        sayHello: function() {
            return "";
        },
        reset() {
            this.$refs.form.reset();
        },
        addLieferant() {
            this.lieferanten.push({
                name: this.lieferant.name,
                ort: this.lieferant.ort,
                plz: this.lieferant.plz,
                img:
                    "https://www.cntry.biz/wp-content/uploads/2015/12/Female-Coders.jpg",
                rating: 0,
                rating_count: 0
            }),
                this.reset();
        },
        addLieferantRemote() {
            this.$http.post("http://localhost:8080/lieferant", this.lieferant)
            .then(response => {
                // eslint-disable-next-line
                console.log(response);
            }, error => {
                // eslint-disable-next-line
                console.log(error);
            });
            this.reset();
        }
    }
};
</script>
