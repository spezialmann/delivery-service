<template>
  <v-col>
    <v-card class="mx-auto my-12" max-width="374">
      <v-img height="250" :src="lieferant.img"></v-img>

      <v-card-title>{{ lieferant.name }}</v-card-title>
      <v-card-text>
        <v-row align="center">
          <v-rating
            :value="lieferant.rating"
            color="amber"
            half-increments
            dense
            size="14"
            readonly
          ></v-rating>

          <div class="grey--text ml-4">{{lieferant.rating}} ({{lieferant.rating_count}})</div>
        </v-row>

        <div class="my-4 subtitle-1 black--text">{{ lieferant.plz }} • {{ lieferant.ort }}</div>

        <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="deep-purple accent-4" text x>Bestellung aufgeben</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ['lieferant']
};
</script>