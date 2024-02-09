<template>
  <header :class="$style.profilAnimalInner">
    <div :class="$style.frameWrapper">
      <div :class="$style.headerParent">
        <div :class="$style.header" />
        <div :class="$style.groupParent" @click="onGroupContainerClick">
          <img
            :class="$style.groupIcon"
            alt=""
            src="/group2.svg"
          />
          <img
            :class="$style.groupIcon1"
            alt=""
            src="/group-1.svg"
          />
        </div>
        <div :class="$style.vectorParent" @click="onGroupContainer1Click">
          <img
            :class="$style.frameChild"
            alt=""
            src="/line-1.svg"
          />
          <img
            :class="$style.frameItem"
            alt=""
            src="/line-1.svg"
          />
          <div :class="$style.frameInner" />
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent",
    methods: {
      onGroupContainerClick() {
        this.$router.push("/listeanimaux");
      },
      onGroupContainer1Click() {
        this.$router.push("/mb");
      },
    },
  });
</script>
<style module>
  .header {
    height: 86px;
    width: 404px;
    position: relative;
    background-color: var(--bleu-clair);
    display: none;
  }
  .groupIcon {
    height: 26.6px;
    width: 53.2px;
    position: relative;
  }
  .groupIcon1 {
    height: 33px;
    width: 125.3px;
    position: relative;
  }
  .groupParent {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-2xs);
    cursor: pointer;
    z-index: 1;
  }
  .frameChild {
    position: absolute;
    top: 0px;
    left: 13px;
    border-radius: var(--br-3xs);
    width: 21px;
    height: 4px;
    object-fit: contain;
  }
  .frameItem {
    position: absolute;
    top: 24px;
    left: 13px;
    border-radius: var(--br-3xs);
    width: 21px;
    height: 4px;
    object-fit: contain;
  }
  .frameInner {
    position: absolute;
    top: 10px;
    left: 0px;
    border-top: 4px solid var(--bleu-nuit);
    box-sizing: border-box;
    width: 40px;
    height: 4px;
  }
  .vectorParent {
    height: 24px;
    width: 36px;
    position: relative;
    cursor: pointer;
    z-index: 1;
  }
  .headerParent {
    flex: 1;
    background-color: var(--bleu-clair);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-7xl) var(--padding-9xl) var(--padding-8xl)
      var(--padding-13xl);
  }
  .frameWrapper {
    width: 399px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
  }
  .profilAnimalInner {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px 0px 0px;
  }
</style>
