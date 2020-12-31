<template>
  <div class="controlbar">
    <el-button
      type="primary"
      @click="copyClip('unicode')"
      size="mini"
    >Copy Unicode</el-button>
    <el-button
      type="primary"
      @click="clearText()"
      size="mini"
    >Clear</el-button>
    <el-button
      type="primary"
      @click="copyClip('zawgyi')"
      size="mini"
    >Copy Zawgyi</el-button>
  </div>
</template>

<script>
import { bus } from '../main'
export default {
  methods: {
    clearText () {
      bus.$emit('clearText')
    },
    copyClip (type) {
      bus.$emit('copytoClip', type);
    }
  }
}
</script>

<style scoped>
.controlbar {
  text-align: center;
  margin-top: 10px;
}
button {
  margin-right: 5px;
}
</style>