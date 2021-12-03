<template>
  <div class="card-container flex-column">
    <h1 class="card-header">How do you fell about these quotes?</h1>
    <div class="card-body flex-column">
      <div class="card-body__quote">
        <slot></slot>
      </div>
      <div class="card-body__vote">
        <div class="card-body__vote-option flex-column">
          <button @click="$emit('select')">
            <img src="../assets/img_cat_happy.png" alt="happy" />
          </button>
          <span>Hiss</span>
        </div>
        <div class="card-body__vote-option flex-column">
          <button @click="$emit('select')"><img src="../assets/img_cat_neutral.png" alt="neutral" /></button>
          <span>Meau</span>
        </div>
        <div class="card-body__vote-option flex-column">
          <button @click="$emit('select')">
            <img src="../assets/img_cat_supersad.png" alt="supersad" />
          </button>
          <span>Prr</span>
        </div>
      </div>
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

.flex-column {
  display: flex;
  flex-direction: column;
}

.card-container {
  min-height: 50vw;
  background: $color_blue;
  width: 50vw;
  align-items: center;
  border-radius: $rounded;
  color: #f2f2f2;

  .card-header {
    opacity: 0.9;
    border-bottom: solid 1px gray;
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

    .card-body__quote {
      img {
        width: 100%;
        border-radius: $rounded;
      }
    }

    .card-body__vote {
      display: flex;
      justify-content: center;
      padding: 2rem 2rem 4rem 2rem;

      .card-body__vote-option {
        display: flex;
        height: 6rem;
        margin: 0 0.4rem;

        button {
          cursor: pointer;
          border-color: #efefef;
          border-radius: $rounded;
          img {
            width: 5rem;
            padding: 0.4rem 0;
          }
        }
        span {
          padding: 0.2rem;
        }
      }
    }
  }
}
</style>
