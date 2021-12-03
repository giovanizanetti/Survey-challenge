<template>
  <div>
    <div class="quote">
      <slot name="quote"></slot>
    </div>
    <slot name="vote"></slot>
  </div>
</template>

<script>
export default {
  name: 'Questions',
}
</script>

<style lang="scss" scoped>
$rounded: 10px;
.quote {
  img {
    width: 100%;
    border-radius: $rounded;
  }
}
</style>
