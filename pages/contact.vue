<template>
    <v-container fluid>
        <v-form v-model="valid" >
            <v-container>
                <v-row>
                    <v-col
                    sm="12"
                    md="6"
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
                    md="6"
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
                    md="6"
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
                        md="6"
                    >
                        <v-textarea
                            loading
                            outlined
                            name="input-7-4"
                            label="Message"
                        >
                        </v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col>
                        <v-btn 
                            primary
                            right>
                            Envoyer
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-container>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>