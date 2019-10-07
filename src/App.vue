<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app>
            <v-list dense>
                <v-list-item v-on:click="changePage('/', 'Lecker Plattform', false)">
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="changePage('/lieferant', 'Lieferanten', true)">
                    <v-list-item-action>
                        <v-icon>mdi-truck-fast</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Lieferanten</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="changePage('/lieferant', 'Mein Profil', true)">
                    <v-list-item-action>
                        <v-icon>mdi-face-profile</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Mein Profil</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="changePage('/lieferant', 'Datenschutz', true)">
                    <v-list-item-action>
                        <v-icon>mdi-file-document</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Datenschutzerklärung</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="indigo" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-btn class="ma-2" color="green" dark @click="showForm = ! showForm" v-if="showAddLieferant">
                Lieferant hinzufügen
                <v-icon dark right>mdi-plus-circle-outline</v-icon>
            </v-btn>
        </v-app-bar>

        <router-view :showForm="showForm"></router-view>

        <v-footer color="indigo" app>
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: "App",
    
    props: {
        source: String,
    },
    data: () => ({
        drawer: false,
        pageTitle: "Lecker Plattform", 
        showAddLieferant: false,
        showForm: false,    
    }),
    methods: {
        changePage: function(path, newPageTitle, showAddLieferant) {
            this.pageTitle = newPageTitle;
            this.$router.push({ path: path })
            this.showAddLieferant = showAddLieferant;
        },
    }
};
</script>
