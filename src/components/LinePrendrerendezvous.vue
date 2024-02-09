<template>
  <section :class="$style.linePrendrerendezvous">
    <div :class="$style.frameParent">
      <div :class="$style.rectangleParent">
        <div :class="$style.frameChild" />
        <div :class="$style.aujourdhui">Aujourd’hui</div>
      </div>
      <div :class="$style.menuItemWrapper">
        <div :class="$style.menuItem">
          <div class="checkbox-container">
                <label for="traitementpris" class="checkbox-label" :class="$style.motDePasse"></label>
  <input type="checkbox" id="traitement1" name="traitement" v-model="traitement1">
</div>
          <div :class="$style.icon">
            <div :class="$style.pipetteAdvantix">1/2 Pipette Advantix</div>
            <div :class="$style.frame">18:00</div>
          </div>
        </div>
      </div>
      <div :class="$style.container1" />
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "LinePrendrerendezvous",
  });
</script>
<style module>
  .frameChild {
    height: 38px;
    width: 122px;
    position: relative;
    border-radius: var(--br-81xl);
    background-color: var(--bleu-middle);
    border: 1px solid var(--bleu-middle);
    box-sizing: border-box;
    display: none;
  }
  .aujourdhui {
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
    padding: var(--padding-3xs) var(--padding-lg) var(--padding-3xs)
      var(--padding-mini);
  }
  .container {
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
  }
  .frame {
    width: 45px;
    position: relative;
    font-weight: 600;
    text-align: right;
    display: inline-block;
    flex-shrink: 0;
    z-index: 1;
    margin-left: -24px;
  }
  .icon {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 178px;
  }
  .menuItem {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
    gap: var(--gap-base);
  }
  .menuItemWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-sm);
    color: var(--color-darkslateblue-200);
  }
  .container1 {
    width: 311.5px;
    height: 0.5px;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .frameParent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-lgi);
  }
  .linePrendrerendezvous {
    width: 379px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-8xl);
    box-sizing: border-box;
    text-align: left;
    font-size: var(--font-size-mini);
    color: var(--color-white);
    font-family: var(--font-montserrat);
  }
</style>
