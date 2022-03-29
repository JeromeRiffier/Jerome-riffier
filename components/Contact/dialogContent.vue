<template>
  <v-row v-if="error">
    <v-col cols="12" align="center" >
      <v-icon color="red" x-large class="pr-3">mdi-robot-dead</v-icon>
    </v-col>
    <v-col cols="12">
      <p>
        {{ $t('Il semble qu\'il y ait eu un problème avec le serveur de messagerie.')}}
      </p>
      <p>
        {{ $t('Mais pas de panique, vous pouvez toujours me joindre via mes autres moyens de contact (ci-dessus')}} <v-icon>mdi-emoticon-wink</v-icon> ).
      </p>
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col cols="12">
      <h2>
        <v-icon color="green" large class="pr-3">mdi-check-decagram</v-icon>
        {{ $t('Message envoyé')}}
      </h2>
    </v-col>
    <v-col cols="12">
      <p>
       {{ $t('Merci, je vous recontacterais au plus vite.')}}
        <v-icon class="pl-1">mdi-emoticon-happy</v-icon>
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "DialogContent",
  props: {
    error: {
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>
