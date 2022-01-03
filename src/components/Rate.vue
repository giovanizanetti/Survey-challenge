<template>
  <div class="rate">
    <div v-for="index in 5" :key="index">
      <img
        @click="handleClick(index)"
        @mouseover="handleMouseEnter(index)"
        @mouseout="handleMouseOut"
        :src="userRate >= index || hovered >= index ? solidStar : regularStar"
      />
    </div>
  </div>
</template>
src/assets/star-solid.svg

<script>
import RegularStar from '../assets/star-regular.svg'
import SolidStar from '../assets/star-solid.svg'

export default {
  data() {
    return {
      hovered: null,
      userRate: null,
      regularStar: RegularStar,
      solidStar: SolidStar,
    }
  },
  methods: {
    handleMouseEnter(index) {
      this.hovered = index
    },
    handleClick(index) {
      this.userRate = index
      this.$emit('select')
      this.userRate = null
      this.hovered = null
    },
    handleMouseOut() {
      this.hovered = null
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
