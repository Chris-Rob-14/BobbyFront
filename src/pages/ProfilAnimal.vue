<template>
  <div :class="$style.profilAnimal">
    <header :class="$style.header">
      <div :class="$style.menuBurger">
        <div :class="$style.logo">
          <img
            :class="$style.vectorIcon"
            alt=""
            src="/vector1.svg"
          />
          <img
            :class="$style.groupIcon"
            alt=""
            src="/group1.svg"
          />
        </div>
        <div :class="$style.menuBurger1" @click="onMenuBurgerContainerClick">
          <img
            :class="$style.menuBurgerChild"
            alt=""
            src="/line-1.svg"
          />
          <img
            :class="$style.menuBurgerItem"
            alt=""
            src="/line-1.svg"
          />
          <div :class="$style.menuBurgerInner" />
        </div>
      </div>
    </header>
    <section :class="$style.profilanimalWrapper">
      <div :class="$style.profilanimal">
        <div :class="$style.profilanimalChild" />
        <Frame1 /><frame />
      </div>
    </section>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameComponent from "../components/FrameComponent.vue";
  import Frame1 from "../components/Frame1.vue";
  import Frame from "../components/Frame.vue";

  export default defineComponent({
    name: "ProfilAnimal",
    components: { FrameComponent, Frame1, Frame },
  });
</script>
<style module>

.vectorIcon {
    height: 28.9px;
    width: 53.2px;
    position: relative;
  }
  .groupIcon {
    height: 33px;
    width: 125.3px;
    position: relative;
  }
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-2xs);
  }
  .menuBurgerChild {
    position: absolute;
    height: 16.67%;
    width: 58.33%;
    top: 0%;
    right: 5.56%;
    bottom: 83.33%;
    left: 36.11%;
    border-radius: var(--br-3xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .menuBurgerItem {
    position: absolute;
    height: 16.67%;
    width: 58.33%;
    top: 100%;
    right: 5.56%;
    bottom: -16.67%;
    left: 36.11%;
    border-radius: var(--br-3xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .menuBurgerInner {
    position: absolute;
    height: 16.67%;
    width: 111.11%;
    top: 41.67%;
    right: -11.11%;
    bottom: 41.67%;
    left: 0%;
    border-top: 4px solid var(--bleu-nuit);
    box-sizing: border-box;
  }
  .menuBurger1 {
    height: 24px;
    width: 36px;
    position: relative;
    cursor: pointer;
  }
  .menuBurger {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .header {
    align-self: stretch;
    border-radius: var(--br-11xl) var(--br-11xl) 0px 0px;
    background-color: var(--bleu-clair);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xl) var(--padding-lg);
  }

  .profilanimalChild {
    width: 351px;
    height: 250px;
    position: relative;
    border-radius: var(--br-mini);
    background-color: var(--ivoire);
    display: none;
  }
  .profilanimal {
    flex: 1;
    border-radius: var(--br-mini);
    background-color: var(--ivoire);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-10xs) var(--padding-3xs) var(--padding-lgi)
      var(--padding-9xl);
    gap: var(--gap-3xl);
  }
  .profilanimalWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-3xl) 0px var(--padding-mid);
  }
  .profilAnimal {
        height: 100vh;
    width: 100%;
    position: relative;
    border-radius: var(--br-11xl);
    background-color: var(--bleu-nuit);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px 475px;
    box-sizing: border-box;
    gap: var(--gap-14xl);
  }
</style>
