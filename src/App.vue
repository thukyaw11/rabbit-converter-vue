<template>
  <div id="app">
    <RabbitBox />
    <More />
  </div>
</template>

<script>
import RabbitBox from '@/components/RabbitBox.vue'
import More from '@/components/More.vue'
import { page } from 'vue-analytics'

export default {
  name: 'App',
  components: {
    RabbitBox,
    More
  },
  methods: {
    track () {
      page('/')
    }
  }

}
</script>

