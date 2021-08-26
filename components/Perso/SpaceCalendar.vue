<template>
    <div>
        <v-sheet
            tile
            height="54"
            class="d-flex"
        >
            <v-card-text>
                <h1>Date des futures lancement spatiaux</h1>
            </v-card-text> 
            <v-btn
                icon
                class="ma-2"
                @click="$refs.calendar.prev()"
            >
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-select
                v-model="type"
                :items="types"
                dense
                outlined
                hide-details
                class="ma-2"
                label="Type"
            ></v-select>
            <v-select
                v-model="mode"
                :items="modes"
                dense
                outlined
                hide-details
                label="event-overlap-mode"
                class="ma-2"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn
                icon
                class="ma-2"
                @click="$refs.calendar.next()"
            >
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </v-sheet>
        <v-sheet height="600">
            <v-calendar
                ref="calendar"
                v-model="value"
                :weekdays="weekday"
                :type="type"
                :events="events"
                :event-overlap-mode="mode"
                :event-overlap-threshold="30"
                @click:event="showEvent"
            >
            </v-calendar>
        </v-sheet>
        <v-dialog v-model="dialog.state">
            <v-card>
                <v-card-title class="text-h5 grey lighten-2" v-bind="dialog">
                {{dialog.title}}
                </v-card-title>

                <v-row no-gutters>
                    <v-col cols="12" md="4">
                        <v-img :src="dialog.img"></v-img>
                    </v-col>
                    <v-col cols="12" md="8" v-if="dialog.content.mission">
                        <v-card-text v-if="dialog.content.mission">Description de la mission: {{dialog.content.mission.description}}</v-card-text>
                        <v-row no-gutters>
                            <v-col cols="12" md="8">
                                <v-card-text class="ma-0 pa-2 pl-5" v-if="dialog.content.mission">Type d'orbit: {{dialog.content.mission.orbit.name}}</v-card-text>
                                <v-card-text class="ma-0 pa-2 pl-5" v-if="dialog.content.pad">Pays: {{dialog.content.pad.location.country_code}}</v-card-text>
                                <v-card-text class="ma-0 pa-2 pl-5" v-if="dialog.content.pad">Pas de tir: {{dialog.content.pad.location.name}} 
                                    <a target="blank" :href="dialog.content.pad.map_url">Ouvrir dans maps</a>
                                </v-card-text>
                                <v-card-text class="ma-0 pa-2 pl-5" v-if="dialog.content.rocket">Lanceur: {{dialog.content.rocket.configuration.full_name}}</v-card-text>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-img class="float-right" :src="dialog.content.pad.map_image"></v-img>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row></v-row>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click.stop="dialog.state = false"
                >
                    Fermer
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
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
                    'text': 'Moi'
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
            mode: 'stack',
            modes: ['stack', 'column'],
            weekday: [1, 2, 3, 4, 5, 6, 0],
            value: '',
            events: [],
            colors: {
                'Falcon' : 'blue',
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
            console.log(this.dialog);
        }
    }
}
</script>

<style scoped>

</style>