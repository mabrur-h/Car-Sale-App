<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-card class="elevation-12 mx-auto">
          <v-toolbar flat class="primary" dark>
            <v-card-title class="title font-weight-regular">
              Log In
            </v-card-title>
          </v-toolbar>
          <v-form
              ref="form"
              v-model="form"
              class="pa-4 pt-6"
          >
            <v-text-field
                v-model="title"
                :rules="[v => !!v || 'Title is required']"
                required
                filled
                color="blue"
                label="Ad Title"
                style="min-height: 96px"
                type="text"
            ></v-text-field>
            <v-textarea
                v-model="description"
                :rules="[v => !!v || 'Description is required']"
                filled
                color="blue"
                label="Description"
                type="description"
                aria-multiline="true"
            ></v-textarea>
          </v-form>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
                text
                @click="$refs.form.reset()"
            >
              Clear
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                :disabled="!form"
                :loading="isLoading"
                class="white--text"
                color="blue"
                depressed
                @click="onSubmit"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-layout row>
          <v-flex xs12>
            <v-btn>
              Upload
              <v-icon right dark>cloud-upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>