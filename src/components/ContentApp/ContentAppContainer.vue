<template>
  <show-popup v-if="showPopup" @click="onClick" />
</template>

<script>
import { getSelection } from "@/helpers/selection";
import ShowPopup from "./ShowPopup.vue";

export default {
  components: {
    ShowPopup,
  },
  data() {
    return {
      text: null,
      showPopup: false,
      showModal: false,
    };
  },
  computed: {
    hasSelection() {
      return Boolean(this.text);
    },
  },
  watch: {
    text() {
      this.calcShowPopup();
    },
    showModal() {
      this.calcShowPopup();
    },
  },
  created() {
    this.listenEvents();
  },
  methods: {
    syncText() {
      this.text = getSelection();
    },
    listenEvents() {
      const onEvent = this.syncText.bind(this);

      document.addEventListener("click", onEvent);
      document.addEventListener("keypress", onEvent);
    },
    calcShowPopup() {
      this.showPopup = this.hasSelection && !this.showModal;
    },
    onClick() {
      // TODO: open modal
    },
  },
};
</script>

<style>
</style>