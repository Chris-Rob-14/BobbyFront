<template>
  <div :class="$style.ralphDetails" :style="ralphDetailsStyle">
    <h2 :class="$style.ralph" :style="ralphStyle">{{ animal.name }}</h2>
    <div :class="$style.dogImage" :style="dogImageStyle">
      <div :class="$style.carlin">{{ animal.type }}</div>
      <img
        :class="$style.phdogFillIcon"
        alt=""
        src="@\assets\AnimalIcon\icons8-chien-25.png"
      />
    </div>
    <div :class="$style.lalaProfile" :style="lalaProfileStyle">
      <div :class="$style.mai2019">{{ animal.age }} ans</div>
      <img
        :class="$style.vectorIcon"
        alt=""
        src="@\assets\AnimalIcon\icons8-anniversaire-25.png"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "RalphDetails",
    props: {
      animal: {},
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propPaddingRight: { type: [Object, Array, String, Number, Boolean] },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
      propPadding1: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      ralphDetailsStyle(): CSS.Properties {
        return {
          minWidth: this.propMinWidth,
        };
      },
      ralphStyle(): CSS.Properties {
        return {
          width: this.propWidth,
          paddingRight: this.propPaddingRight,
        };
      },
      dogImageStyle(): CSS.Properties {
        return {
          padding: this.propPadding,
        };
      },
      lalaProfileStyle(): CSS.Properties {
        return {
          padding: this.propPadding1,
        };
      },
    },
  });
</script>
<style module>
  .ralph {
    margin: 0;
    height: 41px;
    position: relative;
    font-size: inherit;
    font-weight: 600;
    font-family: inherit;
    display: inline-block;
    flex-shrink: 0;
  }
  .carlin {
    position: relative;
    font-weight: 600;
  }
  .phdogFillIcon {
    height: 17px;
    width: 17px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .dogImage {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-10xs);
    font-size: var(--font-size-xl);
  }
  .mai2019 {
    position: relative;
    font-weight: 600;
  }
  .vectorIcon {
    height: 14.9px;
    width: 14px;
    position: relative;
  }
  .lalaProfile {
    height: 17px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
    font-size: var(--font-size-smi);
  }
  .ralphDetails {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 92px;
    text-align: left;
    font-size: var(--font-size-13xl);
    color: #E3EFFF;
    font-family: var(--font-montserrat);
  }
</style>
