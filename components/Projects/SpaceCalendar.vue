<template>
    <v-card class="mb-10">
      <v-card-title>Calendrier des lancements spatiaux</v-card-title>
      <v-sheet
            tile
            class="pl-5 pr-5"
        >
            <v-row >
                <v-col cols="12" md="6" align-self="center">
                        <h2 class="pa-2">Date des futures lancement spatiaux</h2>
                </v-col>
                <v-col cols="12" md="6">
                    <v-row>
                        <v-col cols="3">
                            <v-btn
                                icon
                                class="ma-2"
                                @click="$refs.calendar.prev()"
                            >
                                <v-icon>mdi-chevron-left</v-icon>
                            </v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-select
                                v-model="type"
                                :items="types"
                                dense
                                outlined
                                hide-details
                                item-color="secondary"
                                class="ma-2"
                                label="Type"
                            ></v-select>
                        </v-col>
                        <v-col cols="3">
                            <v-btn
                                icon
                                class="ma-2"
                                @click="$refs.calendar.next()"
                            >
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12">
                    <v-calendar
                        ref="calendar"
                        v-model="value"
                        color="secondary"
                        locale="fr"
                        :weekdays="weekday"
                        :type="type"
                        :events="events"
                        :event-overlap-mode="mode"
                        :event-overlap-threshold=46
                        :event-height=20
                        :event-margin-bottom=3
                        @click:event="showEvent"
                        @click:date="showDate"
                    >

                    </v-calendar>
                </v-col>
            </v-row>
        </v-sheet>
        <v-dialog v-model="dialog.state">
            <v-card v-if="dialog.content">
                <v-card-title class="text-h5" v-bind="dialog">
                    {{dialog.title}}
                    <v-btn
                        color="accent"
                        text
                        class="ml-auto"
                        @click.stop="dialog.state = false">
                        Fermer
                    </v-btn>
                </v-card-title>

                <v-row no-gutters>
                    <v-col cols="12" md="4">
                        <v-img :src="dialog.img" contain class="ma-5 mt-0 mt-md-0"></v-img>
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-row no-gutters>
                            <v-col cols="12">
                                <v-card-text v-if="dialog.content.mission">Description de la mission: {{dialog.content.mission.description}}</v-card-text>
                            </v-col>
                            <v-col cols="12" md="8">
                                <v-card-text v-if="dialog.content.mission" class="ma-0 pa-2 pl-5"><div class="secondary--text">Type d'orbite:</div> {{dialog.content.mission.orbit.name}}</v-card-text>
                                <v-card-text v-if="dialog.content.pad" class="ma-0 pa-2 pl-5"><div class="secondary--text">Pays:</div> {{dialog.content.pad.location.country_code}}</v-card-text>
                                <v-card-text v-if="dialog.content.rocket" class="ma-0 pa-2 pl-5"><div class="secondary--text">Lanceur:</div> {{dialog.content.rocket.configuration.full_name}}</v-card-text>
                                <v-card-text v-if="dialog.content.pad" class="ma-0 pa-2 pl-5"><div class="secondary--text">Pas de tir:</div> {{dialog.content.pad.location.name}}
                                    <a target="blank" :href="dialog.content.pad.map_url">Voir sur maps</a>
                                </v-card-text>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-img v-if="dialog.content.pad" class="ma-5 d-none d-md-block rounded" :src="dialog.content.pad.map_image" :elevation="5" max-width="300"></v-img>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" class="d-block d-md-none">
                        <v-img v-if="dialog.content.pad" class="ma-5 mt-0 ma-md-0" :src="dialog.content.pad.map_image"></v-img>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
import moment from 'moment'
export default {
    data  () {
        return {
            dialog: {
                state: false,
                title: '',
                img: '',
                content: []
            },
            launchesDatas: [],
            type: 'month',
            types: [
                {
                    'value':'month',
                    'text': 'Mois'
                },
                {
                    'value':'week',
                    'text': 'Semaine'
                },
                {
                    'value':'day',
                    'text': 'Jour'
                }
            ],
            mode: 'column',
            weekday: [1, 2, 3, 4, 5, 6, 0],
            value: '',
            events: [],
            colors: {
                'Falcon' : 'cyan',
                'Soyuz' : 'red',
                'Atlas V 511' : 'purple',
                'Terran' : 'grey'
            },
        }
    },
    async fetch() {
      this.launchesDatas = await fetch(
        'https://lldev.thespacedevs.com/2.0.0/launch/upcoming/'
      ).then(res => res.json())
      this.launchesDatas.results.forEach(launch => {
          if(moment.duration(moment(String(launch.window_end)).diff(moment(String(launch.window_start)))).asDays() < 2) {
            this.events.push({
                name: launch.name,
                start: moment(String(launch.window_start)).format('YYYY-MM-DD hh:mm'),
                end: moment(String(launch.window_end)).format('YYYY-MM-DD hh:mm'),
                color: this.colors[launch.rocket.configuration.family],
                timed: true,
                image: launch.image,
                mission: launch.mission,
                rocket: launch.rocket,
                pad: launch.pad
            })
          }
      });
    },
    methods: {
        showEvent(event) {
            this.dialog.img = event.event.image;
            this.dialog.title = event.event.name;
            this.dialog.content = event.event;
            this.dialog.state = !this.dialog.state;
        },
        showDate(event) {
            this.focus = event.date
            this.type = 'day'
            console.log(event);
        }
    }
}
</script>

<style scoped>
.v-calendar {
    height: 600px;
}
.v-calendar >>> .v-calendar-weekly__day {
    padding: 0px 15px 0px 15px;
}
.v-calendar >>> .v-calendar-weekly__day >>> .v-event {
    margin-bottom: 3px;
}
</style>
