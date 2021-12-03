<template>
  <div class="card-container flex-column">
    <h1 class="card-header">How do you fell about these quotes?</h1>
    <div class="card-body flex-column">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  methods: {
    test() {
      console.log('BLSA')
    },
  },
}
</script>

<style scoped lang="scss">
$rounded: 10px;
$color_blue: #17a6e0;

.card-container {
  min-height: 50vw;
  background: $color_blue;
  width: 50vw;
  align-items: center;
  border-radius: $rounded;
  color: #f2f2f2;

  .card-header {
    opacity: 0.9;
    border-bottom: solid 1px #f2f2f2;
    width: 100%;
    padding: 1.5rem 0;
    font-family: sans-serif;
    font-size: 1rem;
    margin: 0;
  }
  .card-body {
    padding: 1.4rem 2rem;
    max-width: 100%;

    height: 100%;
    justify-content: space-around;
  }
}
</style>
