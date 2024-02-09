<template>
  <header :class="$style.component1">
    <div :class="$style.header" />
    <div :class="$style.groupParent" @click="onGroupContainerClick">
      <img
        :class="$style.groupIcon"
        alt=""
        src="/group-1.svg"
      />
      <img
        :class="$style.groupIcon1"
        alt=""
        src="/group2.svg"
      />
    </div>
    <div :class="$style.frameParent">
      <img :class="$style.frameIcon" alt="" />
      <img :class="$style.frameIcon1" alt="" />
    </div>
  </header>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Component",
    methods: {
      onGroupContainerClick() {
        this.$router.push("/listeanimaux");
      },
    },
  });
</script>
<style module>
  .header {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    border-radius: var(--br-11xl) var(--br-11xl) 0px 0px;
    background-color: var(--bleu-clair);
  }
  .groupIcon {
    position: absolute;
    height: 100%;
    width: 66.47%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 33.53%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .groupIcon1 {
    position: absolute;
    height: 80.61%;
    width: 28.22%;
    top: 13.94%;
    right: 71.78%;
    bottom: 5.45%;
    left: 0%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .groupParent {
    position: absolute;
    height: 38.82%;
    width: 48.33%;
    top: 30.59%;
    right: 46.79%;
    bottom: 30.59%;
    left: 4.87%;
    cursor: pointer;
    z-index: 1;
  }
  .frameIcon {
    position: absolute;
    height: 100%;
    width: 92.31%;
    top: 0%;
    right: 7.69%;
    bottom: 0%;
    left: 0%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .frameIcon1 {
    position: absolute;
    height: 100%;
    width: 92.31%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 7.69%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
    z-index: 1;
  }
  .frameParent {
    position: absolute;
    height: 28.24%;
    width: 6.67%;
    top: 41.18%;
    right: 4.36%;
    bottom: 30.59%;
    left: 88.97%;
    z-index: 1;
  }
  .component1 {
    align-self: stretch;
    height: 85px;
    position: relative;
  }
</style>
