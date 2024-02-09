<template>
  <div :class="$style.nomgroup" :style="nomgroupStyle">
    <div :class="$style.nom">pseudo</div>
    <div :class="$style.rectangleParent">
      <div :class="$style.frameChild" />
      <div :class="$style.tmoin">Mot de passe</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Nomgroup",
    props: {
      propFlex: { type: String },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      nomgroupStyle(): CSS.Properties {
        return {
          flex: this.propFlex,
          width: this.propWidth,
        };
      },
    },
  });
</script>
<style module>
  .nom {
    position: relative;
    z-index: 1;
    font-weight: 600;
    font-family: var(--font-montserrat);
  }
  .frameChild {
    height: 46px;
    width: 307px;
    position: relative;
    border-radius: var(--br-smi);
    background-color: var(--bleu-nuit);
    display: none;
  }
  .tmoin {
    position: relative;
    z-index: 1;
    font-weight: 600;
    font-family: var(--font-montserrat);
  }
  .rectangleParent {
    align-self: stretch;
    border-radius: var(--br-smi);
    background-color: var(--bleu-nuit);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-mini) var(--padding-mid) var(--padding-base);
    white-space: nowrap;
    z-index: 1;
  }
  .nomgroup {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-8xs);
    text-align: center;
    font-size: var(--font-size-mini);
    color: var(--bleu-middle);
  }
</style>
