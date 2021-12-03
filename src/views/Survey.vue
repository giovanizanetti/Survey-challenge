<template>
  <div>
    <Card v-if="!finishedAnswering">
      <Questions @select="displayNextQuote">
        <img :src="questions[imgIndex].img" alt="Master Splinter quote" />
      </Questions>
    </Card>
    <Card v-else>Finished</Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Questions from '../components/Questions.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Survey',
  components: { Card, Questions },
  data() {
    return {
      imgIndex: 0,
    }
  },
  watch: {
    imgIndex() {
      if (this.imgIndex + 1 == this.questions.length) {
        this.finish()
      }
    },
  },
  computed: mapState({
    questions: (state) => [...state.survey1.questions],
    finishedAnswering: (state) => state.survey1.answered,
  }),

  methods: {
    displayNextQuote() {
      this.imgIndex++
      console.log('imgage Index', this.imgIndex + 1)
      console.log(this.questions.length)
    },
    ...mapMutations({
      finish: 'finishAnswering',
    }),
  },
}
</script>

<style scoped lang="scss"></style>
