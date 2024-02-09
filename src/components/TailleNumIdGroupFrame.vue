<template>
  <div
    :class="$style.tailleNumIdGroupFrame"
    :style="tailleNumIdGroupFrameStyle"
  >
    <div :class="$style.taille">Mot de passe</div>
    <div :class="$style.tailleNumIdGroupFrameInner">
      <div :class="$style.frameChild" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "TailleNumIdGroupFrame",
    props: {
      propHeight: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      tailleNumIdGroupFrameStyle(): CSS.Properties {
        return {
          height: this.propHeight,
        };
      },
    },
  });
</script>
<style module>
  .taille {
    position: relative;
    z-index: 1;
  }
  .frameChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-smi);
    background-color: var(--bleu-nuit);
    width: 307px;
    height: 46px;
    display: none;
  }
  .tailleNumIdGroupFrameInner {
    align-self: stretch;
    height: 46px;
    position: relative;
    border-radius: var(--br-smi);
    background-color: var(--bleu-nuit);
    z-index: 1;
  }
  .tailleNumIdGroupFrame {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-7xs) 0px var(--padding-8xs);
    gap: var(--gap-8xs);
    text-align: center;
    font-size: var(--font-size-mini);
    color: var(--bleu-middle);
  }
</style>
