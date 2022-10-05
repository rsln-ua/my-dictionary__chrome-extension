<template>
  <div
    v-if="hasPosition"
    class="popup-container"
    :style="{
      bottom: `${y}px`,
      left: `${x}px`,
    }"
  >
    <button class="popup-container_button" @click="$emit('click')">+</button>
  </div>
</template>

<script>
// TODO: remove temp values
const testValue = 600;

export default {
  emits: ["click"],
  data() {
    return {
      x: null,
      y: null,
    };
  },
  computed: {
    hasPosition() {
      return this.x !== null && this.y !== null;
    },
  },
  created() {
    const { x, y } = this.getPosition();

    this.x = x;
    this.y = y;
  },

  methods: {
    getPosition() {
      // TODO: add real logic

      return {
        x: testValue,
        y: testValue,
      };
    },
  },
};
</script>

<style scoped>
.popup-container {
  position: absolute;
  z-index: 999;
}

.popup-container_button {
  width: 20px;
  height: 20px;

  padding: 0;
}
</style>