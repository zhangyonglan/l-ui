<template>
  <button
    :disabled="disableBtn"
    class="hover-btn raised hoverable"
    type="button"
    @click="handleClick"
  >
    <div class="anim"></div>
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "hoverButton",
  props: {
    disableBtn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: #3187ee;
$dark: #2a6ec0;
.hover-btn {
  position: relative;
  font-weight: 400;
  padding: 0 25px;
  line-height: 36px;
  overflow: hidden;
  position: relative;
  z-index: 0;
  cursor: pointer;
  color: #ffffff;
  background: $blue;
  border-radius: 10px;
  border: none;
}
.hover-btn[disabled] {
  cursor: not-allowed;
  background: #999999;
}
.hover-btn.is-disabled {
  opacity: 0.8;
  cursor: not-allowed;
  background-image: none;
}
.anim {
  -moz-transform: translateY(-50%) translateX(-50%);
  -ms-transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
}
.anim:before {
  position: relative;
  content: "";
  display: block;
  margin-top: 100%;
}
.anim:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
}

.clickable .toggle:checked + .anim {
  -moz-animation: anim-in 0.75s;
  -webkit-animation: anim-in 0.75s;
  animation: anim-in 0.75s;
}
.clickable .toggle:checked + .anim:after {
  -moz-animation: anim-in-pseudo 0.75s;
  -webkit-animation: anim-in-pseudo 0.75s;
  animation: anim-in-pseudo 0.75s;
}
.clickable .toggle:not(:checked) + .anim {
  -moz-animation: anim-out 0.75s;
  -webkit-animation: anim-out 0.75s;
  animation: anim-out 0.75s;
}
.clickable .toggle:not(:checked) + .anim:after {
  -moz-animation: anim-out-pseudo 0.75s;
  -webkit-animation: anim-out-pseudo 0.75s;
  animation: anim-out-pseudo 0.75s;
}

.hoverable:hover .anim {
  -moz-animation: anim-out 0.75s;
  -webkit-animation: anim-out 0.75s;
  animation: anim-out 0.75s;
}
.hoverable:hover .anim:after {
  -moz-animation: anim-out-pseudo 0.75s;
  -webkit-animation: anim-out-pseudo 0.75s;
  animation: anim-out-pseudo 0.75s;
}
@-webkit-keyframes anim-in {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@-moz-keyframes anim-in {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@-ms-keyframes anim-in {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes anim-in {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@-webkit-keyframes anim-in-pseudo {
  0% {
    background: rgba(0, 0, 0, 0.25);
  }
  100% {
    background: transparent;
  }
}
@-moz-keyframes anim-in-pseudo {
  0% {
    background: rgba(0, 0, 0, 0.25);
  }
  100% {
    background: transparent;
  }
}
@-ms-keyframes anim-in-pseudo {
  0% {
    background: rgba(0, 0, 0, 0.25);
  }
  100% {
    background: transparent;
  }
}
@keyframes anim-in-pseudo {
  0% {
    background: rgba(0, 0, 0, 0.25);
  }
  100% {
    background: transparent;
  }
}
@-webkit-keyframes anim-out {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@-moz-keyframes anim-out {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@-ms-keyframes anim-out {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes anim-out {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@-webkit-keyframes anim-out-pseudo {
  0% {
    background: rgba(0, 0, 0, 0.25);
  }
  100% {
    background: transparent;
  }
}
@-moz-keyframes anim-out-pseudo {
  0% {
    background: rgba(0, 0, 0, 0.25);
  }
  100% {
    background: transparent;
  }
}
@-ms-keyframes anim-out-pseudo {
  0% {
    background: rgba(0, 0, 0, 0.25);
  }
  100% {
    background: transparent;
  }
}
@keyframes anim-out-pseudo {
  0% {
    background: rgba(0, 0, 0, 0.25);
  }
  100% {
    background: transparent;
  }
}
</style>
