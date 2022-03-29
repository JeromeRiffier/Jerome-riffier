<template>
  <v-form ref="form" v-model="valid" >
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
            v-model="message"
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
      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <contact-dialog-content :error="error"></contact-dialog-content>
      </v-dialog>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    pageTitle : 'Me contacter',
    valid: false,
    sending: false,
    firstname: '',
    lastname: '',
    message: '',
    dialog: true,
    error: false,
    nameRules: [
      v => !!v || 'Le nom ou l\'entreprise est requis',
    ],
    email: '',
    emailRules: [
      v => !!v || 'L\'E-mail est requis',
      v => /.+@.+/.test(v) || 'E-mail invalide',
    ],
  }),
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
    }
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  },
  methods: {
    async submit() {
      this.sending = true
      try {
        const token = await this.$recaptcha.execute('login')

        axios.post("https://formspree.io/f/xoqrnwrb", {
          firstname: this.firstname,
          lastname: this.lastname,
          message: this.message,
          email: this.email,
          'g-recaptcha-response': token
        }).then((response) => {
          this.error = false
          this.dialog = true
          this.sending = false
        }).catch((err) => {
          this.error = true
          this.dialog = true
          this.sending = false
        })
        // send token to server alongside your form data
      } catch (error) {
        this.error = true
        this.dialog = true
      }
    },
  }
}
</script>

<style scoped>

</style>
