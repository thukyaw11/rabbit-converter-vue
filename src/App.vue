<template>
  <div id="app">
    <RabbitBox />
    <More />
  </div>
</template>

<script>
import RabbitBox from '@/components/RabbitBox.vue'
import More from '@/components/More.vue'

export default {
  name: 'App',
  components: {
    RabbitBox,
    More
  }

}
</script>

