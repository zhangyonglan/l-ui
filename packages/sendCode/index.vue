<template>
  <el-button
    class="send-code-btn"
    :class="{'send-code-text': type=='text'}"
    :type="type"
    :disabled="validBtnDisabled"
    @click="sendShortMsg"
    @clear="clear"
  >{{computedValidCodeText}}</el-button>
</template>
<script>
export default {
  name: "SendCode",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    mobile: {
      type: String,
      default: ""
    },
    isNewMobile: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "primary"
    },
  },
  data() {
    return {
      validCodeText: "获取验证码",
      validBtnDisabled: this.disabled,
      time: null,
      seconds: 60
    };
  },
  computed: {
    computedValidCodeText() {
      return this.validCodeText;
    }
  },
  methods: {
    sendShortMsg() {
      this.$emit("sendValidCode", this.clockTime);
    },
    clear() {
      this.seconds = 60;
      this.validCodeText = "获取验证码";
      this.validBtnDisabled = false;
      clearInterval(this.time);
    },
    clockTime() {
      this.seconds = 60;
      this.time = setInterval(() => {
        if (this.seconds > -1) {
          this.validBtnDisabled = true;
          this.validCodeText = this.seconds + " s";
          this.seconds--;
        } else {
          this.validCodeText = "获取验证码";
          this.validBtnDisabled = false;
          clearInterval(this.time);
        }
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.send-code-btn {
  border-radius: 0;
  background-color: #3187ee;
  &.is-disabled {
    background-color: #3187ee80;
    border-color: #3187ee60;
  }
  &.send-code-text {
    background-color: #ffffff!important;
    border: none!important;
  }
}
</style>
