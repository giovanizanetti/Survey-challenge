<template>
  <div class="rate">
    <div v-for="index in 5" :key="index">
      <img @mouseover="handleMouseEnter" src="../assets/star-regular.svg" />
    </div>
  </div>
</template>
src/assets/star-solid.svg

<script>
export default {
  data() {
    return {
      hover: false,
    }
  },
  methods: {
    handleMouseEnter() {
      this.hover = true
    },
  },
}
</script>

<style lang="scss" scoped>
$rounded: 10px;

.rate {
  display: flex;
  justify-content: center;
  padding: 2rem 2rem 4rem 2rem;
  img {
    width: 3rem;
  }

  .rate-option {
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
</style>
