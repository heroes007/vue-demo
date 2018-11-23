import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const moduleA = {
  state:{
    count:0,
    price:22
  },
  mutations:{
    ADD(state){
      state.count++
    },
    REDUCE(state){
      state.count--
    },
    CHANGE(state,payload){
      state.count = payload
    }
  },
  getters:{
    counter(state){
      return state.count * state.price
    }
  },
  actions:{
    handleAsync(store,payload){
      setTimeout(()=>{
        store.commit('CHANGE',payload)
      },1000)
    }
  }
}

const store = new Vuex.Store({
  modules:{
    a : moduleA
  }
})


export default store
