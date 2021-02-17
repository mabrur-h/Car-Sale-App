<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-2">Orders</h1>
        <v-list-item two-line>
          <v-list-item-action>
            <v-checkbox
                :input-value="active"
                color="primary"
            ></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Two-line item</v-list-item-title>
            <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn class="primary">Open</v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({

  }),
}
</script>

<style scoped>

</style>