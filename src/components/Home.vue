<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>PLZ, Ort oder Name des Lieferanten</v-toolbar-title>
              <div class="flex-grow-1"></div>
              
              
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field label="Suche nach ..." name="login" prepend-icon="mdi-pizza" type="text"></v-text-field>

                
              </v-form>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="primary">Und los gehts!</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    pageTitle: "Lecker Lecker Plattform"
  })
};
</script>