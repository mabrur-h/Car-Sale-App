<template>

  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
            v-for="ad in ads"
            :key="ad.id"
            :src="ad.imageSrc"
            >
              <div class="carousel-link">
                <v-btn
                    class="error"
                    :to="'/ad/' + ad.id"
                >{{ad.title}}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg>
      <v-layout row wrap class="pt-10">
        <v-flex
            xs12
            sm6
            md4
            v-for="ad of ads"
            :key="ad.id"
        >
          <v-card
              max-width="400"
              class="mx-auto"
          >
            <v-img
                :src="ad.imageSrc"
                height="200px"
            >
            </v-img>
            <v-card-text class="text--primary">
              <h3>{{ ad.title }}</h3>
              <p>{{ ad.description }}</p>
            </v-card-text>
            <v-card-actions>

              <v-btn :to="'/ad' + ad.id">Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ads: [
        {
          title: 'First ad',
          description: 'Hello I am description',
          promo: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          id: '123'
        },
        {
          title: 'Second ad',
          description: 'Hello I am description',
          promo: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          id: '1234'
        },
        {
          title: 'Third ad',
          description: 'Hello I am description',
          promo: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          id: '12345'
        }

      ]
    }
  }
}
</script>

<style scoped>
  .carousel-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, 0.3);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
</style>