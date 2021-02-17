<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm8 md6 class="mx-auto pt-12">
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
              v-model="password"
              :rules="[rules.password, rules.length(6)]"
              filled
              color="blue"
              counter="6"
              label="Password"
              style="min-height: 96px"
              type="password"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="[rules.email]"
              filled
              color="blue"
              label="Email address"
              type="email"
            ></v-text-field>
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
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    form: false,
    isLoading: false,
    email: undefined,
    password: undefined,
    rules: {
      email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
      length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      password: v => !! (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
      required: v => !!v || 'This field is required'
    }
  }),
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
        this.$refs.form.reset();
      }
    }
  }
}
</script>

<style scoped>

</style>