<template>
  <div :class="$style.blog">
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
    <div :class="$style.rectangleParent">
      <div :class="$style.frameChild" />
      <div :class="$style.queRecherchezVous">Que recherchez-vous ?</div>
      <img :class="$style.vectorArrowIcon" alt="" src="/vector-16.svg" />
    </div>
    <div :class="$style.lineSeparator" />
    <div :class="$style.groupingFrame">
      <div :class="$style.bienTreParent">
        <div :class="$style.bienTre">Bien-être</div>
        <div :class="$style.frameItem" />
      </div>
    </div>
    <CommentsFrame /><NutritionSection />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import CommentsFrame from "../components/CommentsFrame.vue";
  import NutritionSection from "../components/NutritionSection.vue";

  export default defineComponent({
    name: "Blog",
    components: { CommentsFrame, NutritionSection },
    methods: {
      onContentFrameContainerClick() {
        this.$router.push("/listeanimaux");
      },
      onMenuBurgerContainerClick() {
        this.$router.push("/mb");
      },
    },
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
  .frameChild {
    height: 42px;
    width: 348px;
    position: relative;
    border-radius: var(--br-mini);
    border: 2px solid var(--bleu-nuit);
    box-sizing: border-box;
    display: none;
  }
  .queRecherchezVous {
    position: relative;
    letter-spacing: 0.05em;
    z-index: 1;
  }
  .vectorArrowIcon {
    height: 15px;
    width: 15px;
    position: relative;
    min-height: 15px;
    z-index: 1;
  }
  .rectangleParent {
    width: 348px;
    border-radius: var(--br-mini);
    border: 2px solid var(--bleu-nuit);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--padding-sm) var(--padding-lg) var(--padding-smi)
      var(--padding-sm);
  }
  .lineSeparator {
    width: 250px;
    height: 1px;
    position: absolute;
    margin: 0 !important;
    top: 175px;
    right: 20px;
    border-top: 1px solid var(--orange);
    box-sizing: border-box;
    z-index: 2;
  }
  .bienTre {
    position: relative;
    font-weight: 600;
  }
  .frameItem {
    height: 31px;
    width: 100px;
    position: relative;
    border-radius: var(--br-mini);
    border: 1px solid var(--orange);
    box-sizing: border-box;
    display: none;
  }
  .bienTreParent {
    border-radius: var(--br-mini);
    border: 1px solid var(--orange);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-6xs) var(--padding-base) var(--padding-7xs)
      var(--padding-sm);
    z-index: 1;
  }
  .groupingFrame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-2xl);
    font-size: var(--font-size-mini);
    color: var(--orange);
    font-family: var(--font-montserrat);
  }
  .blog {
    width: 100%;
    position: relative;
    border-radius: var(--br-11xl);
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-4xl);
    box-sizing: border-box;
    gap: var(--gap-sm);
    text-align: left;
    font-size: var(--font-size-xs);
    color: #b3b3b3;
    font-family: var(--font-inter);
  }
</style>
