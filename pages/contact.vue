<template>
    <v-container fluid>
      <v-container class="my-4 pa-0 pb-4">
        <v-row>
          <v-col
            v-for="(card, title) of CONTACT.cards"
           :key="card.text"
           cols="12" md="3"
            class="mb-2"
          >
            <v-card :href="card.link">
              <v-row>
                <v-col cols="2" class="d-flex align-center">
                  <v-icon color="accent" large left style="margin-left: 10px">{{ card.icon }}</v-icon>
                </v-col>
                <v-col cols="10" class="pl-5">
                  <v-card-title class="pa-1">{{ title }}</v-card-title>
                  <v-card-text class="pa-1">
                    {{ card.text }}
                    <v-icon v-if="card.copy" right @click="copyToClipboard(card.text)">mdi-content-copy</v-icon>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-card class="px-4 py-2">
        <v-form ref="form" v-model="valid">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :label="$t('Nom') + '*'"
                  required
                >
                </v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :label="$t('Entreprise') + '*'"
                  required
                >
                </v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail*"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
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
                  color="accent"
                  class="float-right"
                  @click="submit">
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
import {get} from 'vuex-pathify'

export default {
  data: () => ({
    pageTitle : 'Me contacter',
    valid: false,
    sending: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Le nom ou l\'entreprise est requis',
    ],
    email: '',
    emailRules: [
      v => !!v || 'L\'E-mail est requis',
      v => /.+@.+/.test(v) || 'E-mail invalide',
    ],
  }),
  head() {
    return {
      title: this.pageTitle,
    }
  },
  computed: {
    ...get('contact/', ['CONTACT']),
  },
  methods: {
    submit () {
      this.sending = true
      this.$refs.observer.validate()
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text)
    }
  }
}
</script>

<style scoped>
.v-text-field, .v-text-field .v-label{
  color: black!important;
  caret-color: black!important;
}
</style>
