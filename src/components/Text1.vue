<template>
  <section :class="$style.text">
    <div :class="$style.container">
      <div :class="$style.group">
        <div :class="$style.rectangleParent">
          <div :class="$style.frameChild" />
          <div :class="$style.divider">29/03</div>
        </div>
        <div :class="$style.container1">
          <img
            :class="$style.textIcon"
            alt=""
            src="/vector-12.svg"
          />
        </div>
      </div>
      <div :class="$style.shape">
        <div :class="$style.text1">
          <div class="checkbox-container">
                <label for="traitementpris" class="checkbox-label" :class="$style.motDePasse"></label>
  <input type="checkbox" id="traitement1" name="traitement" v-model="traitement1">
</div>
          <div :class="$style.ellipse">
            <div :class="$style.pipetteAdvantix">1/2 Pipette Advantix</div>
            <div :class="$style.text2">18:00</div>
          </div>
        </div>
      </div>
      <div :class="$style.containerChild" />
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Text1",
  });
</script>
<style module>
  .frameChild {
    height: 38px;
    width: 72px;
    position: relative;
    border-radius: var(--br-81xl);
    background-color: var(--bleu-middle);
    border: 1px solid var(--bleu-middle);
    box-sizing: border-box;
    display: none;
  }
  .divider {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .rectangleParent {
    border-radius: var(--br-81xl);
    background-color: var(--bleu-middle);
    border: 1px solid var(--bleu-middle);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-base) var(--padding-3xs)
      var(--padding-mini);
  }
  .textIcon {
    width: 16px;
    height: 8px;
    position: relative;
  }
  .container1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-5xs);
  }
  .group {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .shape1 {
    height: 21px;
    width: 21px;
    position: relative;
    border-radius: 50%;
    border: 1px solid var(--bleu-nuit);
    box-sizing: border-box;
  }
  .pipetteAdvantix {
    flex: 1;
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .text2 {
    width: 45px;
    position: relative;
    font-weight: 600;
    text-align: right;
    display: inline-block;
    flex-shrink: 0;
    margin-left: -25px;
  }
  .ellipse {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 177px;
  }
  .text1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .shape {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xs) 0px var(--padding-sm);
    color: var(--color-darkslateblue-200);
  }
  .containerChild {
    width: 311.5px;
    height: 0.5px;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-lgi);
  }
  .text {
    width: 382px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-9xl);
    box-sizing: border-box;
    text-align: left;
    font-size: var(--font-size-mini);
    color: var(--color-white);
    font-family: var(--font-montserrat);
  }
</style>
