<template>
  <div class="filter">
    <div
      class="filterHeader"
      @click="toggleAccordion()"
      :aria-expanded="isOpen"
      :aria-controls="`collapse${_uid}`"
    >
      <slot name="title" />
      <img
        src="../../public/assets/noun-arrow-2601642.svg"
        alt=""
        :class="{ down: isOpen, up: !isOpen }"
      />
    </div>
    <div class="filterContent" v-show="isOpen" :id="`collapse${_uid}`">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AsideAccordion",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.up {
  transform: rotate(180deg);
}

.down {
  transform: rotate(0deg);
}

.filterHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 0 0;
  cursor: pointer;
}

h5 {
  margin: 0;
}

.filterHeader img {
  height: 27px;
}
</style>
