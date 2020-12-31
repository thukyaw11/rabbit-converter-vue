<template>
  <div>
    <p
      @click="more = !more"
      class="more"
    >Learn More</p>
    <div
      v-if="more"
      class="more-c"
    >
      This site is created by using <a
        href="https://www.rabbit-converter.org/Rabbit/rabbit.js"
        target="blank"
      >Rabbit JS</a> and credit goes to <a
        href="https://www.rabbit-converter.org/Rabbit/"
        target="blank"
      >Rabbit Converter</a><br>
      <a
        href="https://github.com/thukyaw11/rabbit-converter-vue"
        target="blank"
      >source code</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      more: false
    }
  }
}
</script>

<style scoped>
.more {
  text-decoration: underline;
  color: blue;
  cursor: pointer;
  text-align: center;
  font-family: "Poppins", sans-serif;
}
.more-c {
  text-align: center;
  font-family: "Poppins", sans-serif;
}
</style>