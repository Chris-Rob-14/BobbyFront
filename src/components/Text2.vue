<template>
  <section :class="$style.text">
    <div :class="$style.text1">
      <div :class="$style.text2">
        <img
          :class="$style.captureDecran20230322A"
          alt=""
          src="/capture-decran-20230322-a-0948-1@2x.png"
        />
        <div :class="$style.iconNavArrowLeftFrame">
          <div :class="$style.iconNavArrowLeftFrameChild" />
          <div :class="$style.commenteEntretenirLes">
            Commente entretenir les griffes de chat ?
          </div>
        </div>
      </div>
      <div :class="$style.leChatUtilise">
        Le chat utilise ses griffes pour marquer son territoire, se défendre,
        chasser, ou encore grimper aux arbres. Elles lui sont indispensables,
        mais il arrive qu’il soit nécessaire d’en couper l’extrémité pour
        améliorer le confort de l’animal. Comment procéder pour entretenir ses
        griffes ?
      </div>
    </div>
    <div :class="$style.quoiServentLes">
      À quoi servent les griffes du chat ?
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Text2",
  });
</script>
<style module>
  .captureDecran20230322A {
    height: 143px;
    width: 320px;
    position: absolute;
    margin: 0 !important;
    top: -141px;
    left: 15px;
    border-radius: var(--br-11xl) var(--br-11xl) 0px 0px;
    object-fit: cover;
    z-index: 1;
  }
  .iconNavArrowLeftFrameChild {
    height: 45px;
    width: 351px;
    position: relative;
    border-radius: var(--br-mini);
    background-color: var(--color-white);
    border: 3px solid var(--bleu-nuit);
    box-sizing: border-box;
    display: none;
  }
  .commenteEntretenirLes {
    position: relative;
    font-weight: 600;
    z-index: 3;
  }
  .iconNavArrowLeftFrame {
    border-radius: var(--br-mini);
    background-color: var(--color-white);
    border: 3px solid var(--bleu-nuit);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-sm) var(--padding-2xs) var(--padding-mini);
    z-index: 2;
  }
  .text2 {
    margin-top: 10rem;
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-12xs) 0px 0px;
    position: relative;
  }
  .leChatUtilise {
    width: 323px;
    height: 160px;
    position: relative;
    line-height: 20px;
    display: inline-block;
    flex-shrink: 0;
  }
  .text1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-3xl);
  }
  .quoiServentLes {
    width: 323px;
    position: relative;
    font-weight: 600;
    display: inline-block;
  }
  .text {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-lgi);
    text-align: left;
    font-size: var(--font-size-mini);
    color: var(--bleu-nuit);
    font-family: var(--font-montserrat);
  }
</style>
