<template>
  <div>
    <div class="quote">
      <slot></slot>
    </div>
    <div class="vote">
      <div class="vote-option flex-column">
        <button @click="$emit('select')">
          <img src="../assets/img_cat_happy.png" alt="happy" />
        </button>
        <span>Hiss</span>
      </div>
      <div class="vote-option flex-column">
        <button @click="$emit('select')"><img src="../assets/img_cat_neutral.png" alt="neutral" /></button>
        <span>Meau</span>
      </div>
      <div class="vote-option flex-column">
        <button @click="$emit('select')">
          <img src="../assets/img_cat_supersad.png" alt="supersad" />
        </button>
        <span>Prr</span>
      </div>
    </div>
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

.vote {
  display: flex;
  justify-content: center;
  padding: 2rem 2rem 4rem 2rem;

  .vote-option {
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
