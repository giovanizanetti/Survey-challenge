<template>
  <div>
    <Card v-if="!finishedAnswering">
      <Questions>
        <template v-slot:quote>
          <img :src="questions[imgIndex].img" :alt="questions[imgIndex].author" />
        </template>
        <template v-slot:vote><Rate @select="displayNextQuote" /></template>
      </Questions>
    </Card>
    <Card v-else>
      <img src="../assets/img_control_tool_finish.svg" alt="checked" />
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Questions from '../components/Questions.vue'
import Rate from '../components/Rate.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Survey2',
  components: { Card, Questions, Rate },
  data() {
    return {
      imgIndex: 0,
    }
  },
  watch: {
    imgIndex() {
      if (this.imgIndex == this.questions.length) {
        this.finish(2)
      }
    },
  },
  computed: mapState({
    questions: (state) => [...state.survey2.questions],
    finishedAnswering: (state) => state.survey2.answered,
  }),

  methods: {
    displayNextQuote() {
      this.imgIndex++
    },
    ...mapMutations({
      finish: 'finishAnswering',
    }),
  },
}
</script>
