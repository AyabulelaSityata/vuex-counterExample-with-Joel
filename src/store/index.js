import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: null
  },
  getters: {
  },
  mutations: {
    addition(state) {
      state.counter++
    },
    subtraction(state) {
      if(state.counter > 0)
      state.counter--
    }
  },
  actions: {
    increment(context) {
      context.commit('addition')
    },
    decrement(context) {
      context.commit('subtraction')
    }
  },
  modules: {
  }
})
