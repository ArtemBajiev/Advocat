<!-- eslint-disable max-len -->
<template>
    <div class="article-item">
        <div class="article-item__text">{{ article.text[$store.state.language] }}</div>
    </div>
</template>
<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import VanillaTilt from 'vanilla-tilt';

export default {
  props: ['article'],
  methods: {
    vanila() {
      const element = document.querySelectorAll('.article-item');
      element.forEach((item) => {
        VanillaTilt.init(item, {
          reverse: true,
          max: 4,
          speed: 2300,
          scale: 1.1,
          glare: true,
          reset: true,
          perspective: 500,
          transition: true,
          'max-glare': 0.15,
          'glare-prerender': false,
          gyroscope: true,
          gyroscopeMinAngleX: -45,
          gyroscopeMaxAngleX: 45,
          gyroscopeMinAngleY: -45,
          gyroscopeMaxAngleY: 45,
        });
      });
    },
  },
  mounted() {
    this.vanila();
  },

};
</script>
<style scoped>
.article-item{
    background-color: var(--colorHeaderEl);
    height: 315px;
    padding: 15px;
    border-radius: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.466);
}
.article-item:hover{
    box-shadow: 0px 11px 15px 2px rgba(0, 0, 0, 0.466);
    background-color: #8F755B;
}
.article-item__text
{
    height: 95%;
    overflow: hidden;
    color: var(--fontColor);
    text-align: center;
    font-size: 18px;
}
</style>
