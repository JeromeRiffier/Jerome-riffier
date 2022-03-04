<template>
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
      v => !!v || 'Le nom ou l\'entreprise est requis',
    ],
    email: '',
    emailRules: [
      v => !!v || 'L\'E-mail est requis',
      v => /.+@.+/.test(v) || 'E-mail invalide',
    ],
  }),
  methods: {
    submit () {
      this.sending = true
      this.$refs.observer.validate()
    }
  }
}
</script>

<style scoped>

</style>
