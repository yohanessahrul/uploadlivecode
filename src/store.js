import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: []
  },
  mutations: {
    getAllDataMutation (state, payload) {
      this.state.photos = payload
    }
  },
  actions: {
    getALlPhotos ({commit}) {
      axios.get('http://35.198.212.156/api/image', {
        headers: { authorization: 'UjnphTXZCeJj1Rq3WVqs91' }
      })
        .then( function (response) {
          console.log('masuk sini')
          let data = response.data.images
          console.log('data bersih =====>', data)
          commit('getAllDataMutation', data)
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
})
