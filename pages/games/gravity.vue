<template>
     <v-container fluid>
        <div id="game-container" class="d-flex justify-center">
          <canvas id="pixi-canvas"></canvas>
        </div>
    </v-container>
</template>

<script>
import * as PIXI from 'pixi.js';
global.PIXI = PIXI;
require("pixi-projection");
// eslint-disable-next-line no-unused-vars
const renderer = PIXI.autoDetectRenderer();

/* eslint-disable no-undef */
export default {
    data () {
        return {
          pageTitle : 'Simulation de la Gravité',
          app : null,
          earth : null,
          sun : null
        }
    },
    mounted() {
        this.startPixi();
    },
    methods: {
        startPixi() {
            this.app = new PIXI.Application({
                view: document.getElementById("pixi-canvas"),
                resolution: window.devicePixelRatio || 1,
                backgroundColor: 0x0000000c,
                transparent: true,
                width: 640,
                height: 480,
                });

            this.sun = PIXI.Sprite.from(`/game/planets/sun.png`);
                this.sun.name = 'sun'
                this.sun.anchor.set(0.5);
                this.sun.width = 100
                this.sun.height = 100
                this.sun.direction = 0;
                this.sun.speed = 0;
                this.sun.mass = 100
                this.sun.x =   this.app.screen.width/2;
                this.sun.y =  this.app.screen.height/2;

                this.app.stage.addChild(this.sun);

            this.earth = PIXI.Sprite.from(`/game/planets/earth.png`);
                this.earth.name = 'earth'
                this.earth.anchor.set(0.5);
                this.earth.width = 45
                this.earth.height = 45
                this.earth.direction = Math.random() * Math.PI * 2;
                this.earth.speed = (2 + Math.random() * 2) ;
                this.earth.mass = 10
                this.earth.x =  this.randomIntFromInterval(this.earth.width, this.app.screen.width - this.earth.width);
                this.earth.y =  this.randomIntFromInterval(this.earth.height, this.app.screen.height - this.earth.height);

                this.app.stage.addChild(this.earth);

        // Listen for animate update
        this.app.ticker.add(delta => this.gameLoop(delta));
        },
        gameLoop(delta) {
            this.app.stage.children.forEach(child => {
                this.updateMovement(child)
            });
        },
        updateMovement(object) {
            object.x += Math.sin(object.direction) * (object.speed * object.scale.y);
            object.y += Math.cos(object.direction) * (object.speed * object.scale.y);
        },
        randomIntFromInterval(min, max) { // min and max included
           return Math.floor(Math.random() * (max - min + 1) + min)
        }
    },
    head() {
      return {
        title: this.pageTitle,
      }
    },
    beforeDestroy() {
        this.app.destroy()
    }
}
</script>

<style scoped>
    #game-container >>> canvas {
        max-width: 100%;
        color: #0000000c;
    }
</style>
