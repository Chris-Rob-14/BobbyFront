<template>
  <section :class="$style.headerFrame">
    <header :class="$style.header">
      <div
        :class="$style.vectorInstance"
        @click="onVectorInstanceContainerClick"
      >
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
        <div :class="$style.menuBurger" @click="onMenuBurgerContainerClick">
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
          <div :class="$style.commentText" />
        </div>
      </div>
    </header>
    <div :class="$style.logoInstanceWrapper">
      <div :class="$style.logoInstance">
        <img
          :class="$style.iconNavArrowLeft"
          alt=""
          src="/-icon-nav-arrow-left.svg"
        />
        <div :class="$style.groupParent">
          <div :class="$style.group">
            <div :class="$style.groupChild" />
            <img
              :class="$style.iconNavArrowLeft1"
              alt=""
              src="/-icon-nav-arrow-left-1.svg"
              @click="onIconNavArrowLeftClick"
            />
          </div>
          <div :class="$style.bienTreParent">
            <div :class="$style.bienTre">Bien-être</div>
            <div :class="$style.frameChild" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "HeaderFrame",
    methods: {
      onVectorInstanceContainerClick() {
        this.$router.push("/listeanimaux");
      },
      onMenuBurgerContainerClick() {
        this.$router.push("/mb");
      },
      onIconNavArrowLeftClick() {
        this.$router.push("/blog");
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
    gap: var(--gap-3xs);
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
  .commentText {
    position: absolute;
    height: 16.67%;
    width: 111.11%;
    top: 33.33%;
    right: -5.56%;
    bottom: 50%;
    left: -5.56%;
    border-top: 4px solid var(--bleu-nuit);
    box-sizing: border-box;
  }
  .menuBurger {
    height: 24px;
    width: 36px;
    position: relative;
    cursor: pointer;
  }
  .vectorInstance {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
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
  .iconNavArrowLeft {
    width: 7.3px;
    height: 19.8px;
    position: absolute;
    margin: 0 !important;
    bottom: 0.4px;
    left: 17px;
  }
  .groupChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-mini);
    background-color: var(--orange);
    width: 45px;
    height: 31px;
    display: none;
  }
  .iconNavArrowLeft1 {
    position: absolute;
    top: 9.3px;
    left: 16px;
    width: 7.3px;
    height: 15.1px;
    cursor: pointer;
    z-index: 1;
  }
  .group {
    height: 31px;
    width: 45px;
    position: relative;
    border-radius: var(--br-mini);
    background-color: var(--orange);
  }
  .bienTre {
    position: relative;
    font-weight: 600;
  }
  .frameChild {
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
  .groupParent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-8xs);
  }
  .logoInstance {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-16xl);
    position: relative;
  }
  .logoInstanceWrapper {
    height: 68px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-lg);
    box-sizing: border-box;
  }
  .headerFrame {
    align-self: stretch;
    height: 278px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-smi);
    text-align: left;
    font-size: var(--font-size-mini);
    color: var(--orange);
    font-family: var(--font-montserrat);
  }
</style>
