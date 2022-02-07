<template>
  <div id="game-container" class="d-flex justify-center">
    <canvas id="pixi-canvas"></canvas>
  </div>
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
      pageTitle : 'Découverte de PixiJs',
      app : ''
    }
  },
  head() {
    return {
      title: this.pageTitle,
    }
  },
  mounted() {
    this.startPixi();
  },
  beforeDestroy() {
    this.app.destroy()
  },
  methods: {
    startPixi() {
      this.app = new PIXI.Application({
          view: document.getElementById("pixi-canvas"),
          resolution: window.devicePixelRatio || 1,
          backgroundColor: 0x6495ed,
          width: 640,
          height: 480,
         });
        // app.ticker.maxFPS = 2 //For debug purpose

      //  Creation/ declaration des sprites
      const moon = PIXI.Sprite.from(`/game/planets/moon.png`);
        moon.name = 'moon'
        moon.anchor.set(0.5);
        moon.width = 45
        moon.height = 45
        moon.vy = 5;
        moon.vx = 5;
        moon.x =  this.randomIntFromInterval(moon.width, this.app.screen.width - moon.width);
        moon.y =  this.randomIntFromInterval(moon.height, this.app.screen.height - moon.height);

        this.app.stage.addChild(moon);

      const mars = PIXI.Sprite.from(`/game/planets/mars.png`);
        mars.name = 'mars'
        mars.anchor.set(0.5);
        mars.width = 50
        mars.height = 50
        mars.vy = 1;
        mars.vx = 3;
        mars.x =  this.randomIntFromInterval(mars.width, this.app.screen.width - mars.width);
        mars.y =  this.randomIntFromInterval(mars.height, this.app.screen.height - mars.height);

        this.app.stage.addChild(mars);

      const earth = PIXI.Sprite.from(`/game/planets/earth.png`);
        earth.name = 'earth'
        earth.anchor.set(0.5);
        earth.width = 50
        earth.height = 50
        earth.vy = 4;
        earth.vx = 2;
        earth.x =  this.randomIntFromInterval(earth.width, this.app.screen.width - earth.width);
        earth.y =  this.randomIntFromInterval(earth.height, this.app.screen.height - earth.height);

        this.app.stage.addChild(earth);

        // Listen for animate update
        this.app.ticker.add(delta => this.gameLoop(delta));
    },
    gameLoop(delta) {
        this.app.stage.children.forEach(child => {
          this.outOfBorder(child)
          this.bounceChild(child)
          child.x += child.vx;
          child.y += child.vy;
        });

    },
    outOfBorder(object) {
     const objectBox = object.getBounds();
     if (objectBox.x + objectBox.width > this.app.renderer.screen.width || objectBox.x <= 0) {
       object.vx = -object.vx;
     }else if(objectBox.y + objectBox.height > this.app.renderer.screen.height || objectBox.y <= 0) {
      object.vy = -object.vy;
     }
    },
    bounceChild(child) {
      this.app.stage.children.forEach(otherChild => {
        if(child.name !== otherChild.name) {
          if(this.collisionDetectionCircle(child,otherChild)) {
            child.vx = -child.vx;
            child.vy = -child.vy;
          }
        }
      })
    },
    collisionDetectionRect(objectA, objectB) {
      const aBox = objectA.getBounds();
      const bBox = objectB.getBounds();

      return aBox.x + aBox.width > bBox.x  &&
             aBox.x < bBox.x + bBox.width  &&
             aBox.y + aBox.height > bBox.y &&
             aBox.y < bBox.y + bBox.height

    },
    collisionDetectionCircle(objectA, objectB) {
      const dx = objectA.x - objectB.x;
      const dy = objectA.y - objectB.y;
      const distance = Math.sqrt(dx * dx + dy * dy)
      return distance < objectA.width/2 + objectB.width/2
    },
    randomIntFromInterval(min, max) { // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }
}
</script>

<style scoped>
  #game-container >>> canvas {
  max-width: 100%;
  }
</style>
