<template>
  <div>
    <el-row>
      <el-col
        :xs="24"
        :md="12"
      >
        <div class="uni-c">
          <h3>Unicode</h3>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="unicode"
            v-model="unicode"
          ></textarea>
        </div>
      </el-col>
      <el-col
        :xs="24"
        :md="12"
      >
        <div class="zaw-c">
          <h3>Zawgyi</h3>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="zawgyi"
            v-model="zawgyi"
          ></textarea>
        </div>
      </el-col>
    </el-row>
    <ControlBar />
  </div>

</template>

<script>
import ControlBar from '@/components/ControlBar'
import { uni2zg, zg2uni } from '../rabbit.js'
import { bus } from '../main'
export default {
  components: {
    ControlBar
  },
  data () {
    return {
      zawgyi: '',
      unicode: ''
    }
  },
  created () {
    bus.$on('clearText', () => {
      this.zawgyi = ''
      this.unicode = ''
    }),
      bus.$on('copytoClip', (payload) => {
        this.copyClip(payload);
      })
  },
  watch: {
    zawgyi (val) {
      this.unicode = zg2uni(val);
    },
    unicode (val) {
      this.zawgyi = uni2zg(val);
    }
  },
  methods: {
    copyClip (type) {

      if (this.zawgyi == '' || this.unicode == '') {
        return
      }
      let sentenceToCopy = document.querySelector(`.${type}`)
      sentenceToCopy.select()
      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'ကော်ပီကူးပြီးပါပြီ' : 'ကော်ပီရာတွင် မအောင်မြင်ပါ';
        alert(msg);
      } catch (err) {
        alert('ကော်ပီရာတွင် မအောင်မြင်ပါ');
      }
      sentenceToCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    },
  }

}
</script>

<style scoped>
textarea {
  padding: 10px;
  height: 450px;
  outline: none;
  border-radius: 5px;
}
h3 {
  font-family: "Poppins", sans-serif;
}
.zawgyi {
  font-family: "Noto Sans Zawgyi";
  width: 90%;
  margin: 10px;
  margin: 0 auto;
}
.unicode {
  width: 90%;
  font-family: "Noto Sans Myanmar";
  margin: 10px;
  margin: 0 auto;
}
.uni-c,
.zaw-c {
  text-align: center;
}
</style>