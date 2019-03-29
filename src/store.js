import Vue from 'vue'
import Vuex from 'vuex'

import list from './store/ListDetial.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  lists:[{
    "listId":"0",
    "listName":"证照0",
      "listNumber":"000000",
      "listDetails":"111111111111111111"
  }
  ],
username:""
  },
  mutations: {
      addItem(state,value){
          state.lists=value
      },
      adduser(state,value){
          state.username=value
      }
  }
})
