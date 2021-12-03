<template>
  <div class="flex">
    <Survey1 />
    <div class="next"><router-link to="survey2">></router-link></div>
  </div>
</template>

<script>
import Survey1 from '../views/Survey1.vue'
export default {
  name: 'home',
  components: {
    Survey1,
  },
}
</script>

<style lang="scss" scoped>
$rounded: 7px;
.flex {
  display: flex;
}
.next {
  width: 3rem;
  background: gray;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  align-self: center;
  border-radius: $rounded;
}
</style>
