<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-2">Orders</h1>
        <v-list-item
            two-line
            v-for="order in orders"
            :key="order.id"
        >
          <v-list-item-action>
            <v-checkbox
                :input-value="order.done"
                color="indigo"
            ></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ order.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn
                :to="'/ad/' + order.adId"
                class="primary"
            >Open</v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: '21daok9',
          name: 'Mabrur',
          phone: '99-999-88-90',
          adId: '123',
          done: false
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>