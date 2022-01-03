import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    survey1: {
      answered: false,
      questions: [
        {
          author: 'Dumbledore',
          img: require('@/assets/img_statement_1.png'),
          id: 1,
        },
        {
          author: 'Snape',
          img: require('@/assets/img_statement_2.png'),
          id: 2,
        },
        {
          author: 'Dr Who',
          img: require('@/assets/img_statement_4.png'),
          id: 2,
        },

        {
          author: 'Master Splinter',
          img: require('@/assets/img_statement_3.png'),
          id: 4,
        },
      ],
    },
    survey2: {
      answered: false,
      questions: [
        {
          author: 'Dumbledore',
          img: require('@/assets/img_statement_1.png'),
          id: 1,
        },
        {
          author: 'Snape',
          img: require('@/assets/img_statement_2.png'),
          id: 2,
        },
        {
          author: 'Dr Who',
          img: require('@/assets/img_statement_4.png'),
          id: 2,
        },
        {
          author: 'Nelson Mandela',
          img: require('@/assets/img_statement_5.png'),
          id: 5,
        },
        {
          author: 'Captan Patric Stwart',
          img: require('@/assets/img_statement_6.png'),
          id: 6,
        },
      ],
    },
  },
  mutations: {
    finishAnswering(state, survey = 1) {
      console.log(survey)
      survey == 1 ? (state.survey1.answered = true) : (state.survey2.answered = true)
    },
  },
  actions: {},
  modules: {},
})
