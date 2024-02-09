<template>
  <section :class="$style.listAnimalsFrame">
    <div :class="$style.frameParent">
      <img
        :class="$style.frameChild"
        alt=""
        src="/group-170@2x.png"
      />
      <div :class="$style.frameGroup">
        <div :class="$style.dodoParent">
          <h2 :class="$style.dodo">Dodo</h2>
          <img
            :class="$style.frameItem"
            alt=""
            src="/group-152.svg"
            @click="onGroupIconClick"
          />
        </div>
        <div :class="$style.menuBurgerLine">
          <div :class="$style.lapinNain">Lapin nain</div>
          <img
            :class="$style.backgroundFrameIcon"
            alt=""
            src="/vector-4.svg"
          />
        </div>
        <div :class="$style.monthFrame">
          <div :class="$style.mars2022">4 mars 2022</div>
          <img
            :class="$style.vectorLineIcon"
            alt=""
            src="/vector-11.svg"
          />
        </div>
      </div>
    </div>
    <div :class="$style.rectangleParent" @click="onGroupContainerClick">
      <div :class="$style.frameInner" />
      <div :class="$style.jeConsulteLe">Je consulte le profil de Dodo</div>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ListAnimalsFrame",
    methods: {
      onGroupIconClick() {
        this.$router.push("/ajoutermodifieranimal");
      },
      onGroupContainerClick() {
        this.$router.push("/profil-animal");
      },
    },
  });
</script>
<style module>
  .frameChild {
    height: 101px;
    width: 101px;
    position: relative;
    object-fit: cover;
  }
  .dodo {
    margin: 0;
    height: 41px;
    width: 101px;
    position: relative;
    font-size: inherit;
    font-weight: 600;
    font-family: inherit;
    display: inline-block;
    flex-shrink: 0;
  }
  .frameItem {
    height: 33px;
    width: 33px;
    position: relative;
    cursor: pointer;
  }
  .dodoParent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  .lapinNain {
    position: relative;
    font-weight: 600;
  }
  .backgroundFrameIcon {
    height: 17px;
    width: 11.9px;
    position: relative;
  }
  .menuBurgerLine {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    gap: var(--gap-10xs);
    font-size: var(--font-size-xl);
  }
  .mars2022 {
    position: relative;
    font-weight: 600;
  }
  .vectorLineIcon {
    height: 14.9px;
    width: 14px;
    position: relative;
  }
  .monthFrame {
    height: 17px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-9xs);
    font-size: var(--font-size-smi);
  }
  .frameGroup {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frameParent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-7xs);
    gap: var(--gap-lgi);
  }
  .frameInner {
    height: 34px;
    width: 290px;
    position: relative;
    border-radius: var(--br-mini);
    background-color: var(--bleu-middle);
    border: 3px solid var(--bleu-middle);
    box-sizing: border-box;
    display: none;
  }
  .jeConsulteLe {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .rectangleParent {
    border-radius: var(--br-mini);
    background-color: var(--bleu-middle);
    border: 3px solid var(--bleu-middle);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-38xl) var(--padding-4xs)
      var(--padding-37xl);
    cursor: pointer;
    font-size: var(--font-size-xs);
    color: var(--color-white);
  }
  .listAnimalsFrame {
    width: 375px;
    height: 190px;
    border-radius: var(--br-mini);
    background-color: var(--ivoire);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-smi);
    box-sizing: border-box;
    gap: var(--gap-6xl);
    text-align: left;
    font-size: var(--font-size-13xl);
    color: var(--bleu-middle);
    font-family: var(--font-montserrat);
  }
</style>
