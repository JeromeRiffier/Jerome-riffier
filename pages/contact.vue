<template>
    <v-container fluid>
      <v-card>
        <v-form v-model="valid" ref="form">
          <v-container>
            <v-row>
              <v-col
                sm="12"
                md="4"
              >
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="Nom"
                  required
                >
                </v-text-field>
              </v-col>

              <v-col
                sm="12"
                md="4"
              >
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Entreprise"
                  required
                >
                </v-text-field>
              </v-col>

              <v-col
                sm="12"
                md="4"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col
                sm="12"
                md="12"
              >
                <v-textarea
                  :loading="sending"
                  outlined
                  name="input-7-4"
                  label="Message"
                >
                </v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn
                  primary
                  :disabled="!valid"
                  @click="submit"
                  class="float-right">
                  Envoyer
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    pageTitle : 'Me contacter',
    valid: false,
    sending: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    submit () {
      this.sending = true
      this.$refs.observer.validate()
    },
  },
  head() {
    return {
      title: this.pageTitle,
    }
  }
}
</script>

<style scoped>
.v-card {
  background-color: rgba(255, 255, 255, 0.3);
}
.theme--dark .v-card {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
