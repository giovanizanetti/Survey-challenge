<template>
  <div>
    <Card v-if="!finishedAnswering">
      <Questions>
        <template v-slot:quote>
          <img :src="questions[imgIndex].img" :alt="questions[imgIndex].author" />
        </template>
        <template v-slot:vote>
          <Vote @select="displayNextQuote" />
        </template>
      </Questions>
    </Card>
    <Card v-else>
      <img src="../assets/img_control_tool_finish.svg" alt="checked" />
    </Card>
  </div>
</template>

<script>
import Card from './Card.vue'
import Questions from './Questions.vue'
import Vote from './Vote.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Survey1',
  components: { Card, Questions, Vote },
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
    },
    ...mapMutations({
      finish: 'finishAnswering',
    }),
  },
}
</script>
