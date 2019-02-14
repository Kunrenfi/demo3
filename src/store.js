import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  lists:[{
      title:'证照1',
      content:'xxxxxxxxxxxxx'
  }
  ]
  },
  mutations: {
      addItem(state,value){
        state.lists.push(value)
      }
  },
  actions: {

  }
})
