<template>
    <v-container fluid>
    </v-container>
</template>

<script>
export default {
  mounted() {
    this.startPixi();
  },
  methods: {
    startPixi() {
      // eslint-disable-next-line no-undef
      const app = new PIXI.Application();
      document.body.appendChild(app.view);
      const img = '';
      app.loader.add('bunny', img).load((loader, resources) => {
        // eslint-disable-next-line no-undef
        const bunny = new PIXI.Sprite(resources.bunny.texture);
        bunny.x = app.renderer.width / 2;
        bunny.y = app.renderer.height / 2;
        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;
        app.stage.addChild(bunny);
        app.ticker.add(() => {
          bunny.rotation += 0.01;
        });
      });
    }
  }
}
</script>

<style scoped>

</style>
