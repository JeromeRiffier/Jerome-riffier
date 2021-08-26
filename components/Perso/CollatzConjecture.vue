<template>
    <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="spark.range"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="range">
              <p>
                {{ range.index + 1}}
              </p>
          </template>
        </v-sparkline>
        <v-row>
            <v-col justify="center" align="center">
                Nombre d'iteration = {{spark.iteration}}
            </v-col>
            <v-col justify="center" align="center">
                Valeur max = {{spark.max}}
            </v-col>
            <v-spacer></v-spacer>
            <v-col lg=4 md=6 cols=12>
                <v-slider
                    v-model="slider.val"
                    :label="slider.label"
                    :thumb-color="slider.color"
                    thumb-label="always"
                    min="1"
                    max="100"
                    @change="start"
                ></v-slider>
            </v-col>
        </v-row>
      </v-sheet>
</template>

<script>
export default {
    data () {
      return {
        slider: { label: 'Valeur de N', val: 1, color: 'red' },
        spark : {
            range: [4, 2, 1],
            max: 4,
            iteration: 4
        }
      }
    },
    methods : {
        start(val) {
            this.spark.range = []
            this.spark.max = 0
            this.spark.iteration = 0
            this.fill(val)
        },
        fill(val, limit) {
            this.spark.range.push(val)
            this.spark.iteration ++
            if(this.spark.max < val) {
                this.spark.max = val
            }

            if (val === 1) {
                if (limit === true) {
                    return true
                }else {
                    limit = true;
                }
            }

            if (val%2) {
                val = val*3+1
            } else{
                val = val/2
            }
            
            setTimeout(() => this.fill(val,limit), 50);
        }
    }
  }
</script>