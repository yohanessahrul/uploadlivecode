<template>
  <div class="galery">
      <h1>Ini Galery coy</h1>
      <div class="list">
          <ul>
              <li v-for="(photo, index) in photos" :key="index">
                  <img style="width:150px; height:150px; float:left; margin-right: 5px;" :src="photo.url" alt="">
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Galery',
    created () {
        this.$store.dispatch('getALlPhotos')
    },
    computed: {
        ...mapState([
            'photos'
        ])
    }
}
</script>

<style>

</style>
