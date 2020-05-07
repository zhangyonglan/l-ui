<template>
  <div style="padding: 0 15px;" @click="toggleClick">
    <svg
      :class="{ 'is-active': isActive }"
      class="hamburger"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
    >
      <path
        d="M815.5 309h-458c-17.6 0-32-14.4-32-32s14.4-32 32-32h458c17.6 0 32 14.4 32 32s-14.4 32-32 32z"
        fill="#ffffff"
        p-id="6423"
      />
      <path
        d="M208.5 277m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
        fill="#ffffff"
        p-id="6424"
      />
      <path
        d="M815.5 544h-458c-17.6 0-32-14.4-32-32s14.4-32 32-32h458c17.6 0 32 14.4 32 32s-14.4 32-32 32z"
        fill="#ffffff"
        p-id="6425"
      />
      <path
        d="M208.5 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
        fill="#ffffff"
        p-id="6426"
      />
      <path
        d="M815.5 779h-458c-17.6 0-32-14.4-32-32s14.4-32 32-32h458c17.6 0 32 14.4 32 32s-14.4 32-32 32z"
        fill="#ffffff"
        p-id="6427"
      />
      <path
        d="M208.5 747m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
        fill="#ffffff"
        p-id="6428"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Hamburger",
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick() {
      this.$emit("toggleClick");
    }
  }
};
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
