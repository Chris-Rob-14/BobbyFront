<template>
  <div
    :class="$style.medicamentCapture"
    :style="medicamentCaptureStyle"
    @click="onGroupContainerClick"
  >
    <div :class="$style.instructionText" :style="instructionTextStyle">
      <img
        :class="$style.medicamentChien06274265040Icon"
        alt=""
        :src="medicamentChien0627426504"
      />
      <img
        :class="$style.medicamentChien06274265040Icon1"
        alt=""
        :src="medicamentChien06274265041"
      />
    </div>
    <div :class="$style.menuBurgerContainer">
      <div
        :class="$style.menuBurgerContainerChild"
        :style="rectangleDivStyle"
      />
      <div :class="$style.horizontalLines" :style="horizontalLinesStyle">
        <div :class="$style.commentDonnerUn" :style="commentDonnerUnStyle">
          {{commentDonnerUnMdicamentM}}
        </div>
        <div :class="$style.horizontalLinesChild" />
        <div :class="$style.commentDonnerUn1">
          {{commentDonnerUnMdicamentM1}}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "MedicamentCapture",
    props: {
      medicamentChien0627426504: { type: String },
      medicamentChien06274265041: { type: String },
      commentDonnerUnMdicamentM: { type: String },
      commentDonnerUnMdicamentM1: { type: String },
      propAlignSelf: { type: String },
      propFlex: { type: String },
      propBackgroundImage: { type: String },
      propAlignSelf1: { type: String },
      propHeight: { type: [Object, Array, String, Number, Boolean] },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      onGroupContainerClick: { type: Function },
    },
    computed: {
      medicamentCaptureStyle(): CSS.Properties {
        return {
          alignSelf: this.propAlignSelf,
          flex: this.propFlex,
        };
      },
      instructionTextStyle(): CSS.Properties {
        return {
          backgroundImage: this.propBackgroundImage,
        };
      },
      rectangleDivStyle(): CSS.Properties {
        return {
          alignSelf: this.propAlignSelf1,
          height: this.propHeight,
        };
      },
      horizontalLinesStyle(): CSS.Properties {
        return {
          padding: this.propPadding,
        };
      },
      commentDonnerUnStyle(): CSS.Properties {
        return {
          width: this.propWidth,
        };
      },
    },
  });
</script>
<style module>
  .medicamentChien06274265040Icon {
    align-self: stretch;
    width: 166px;
    position: relative;
    border-radius: var(--br-11xl) var(--br-11xl) 0px 0px;
    max-height: 100%;
    object-fit: cover;
    display: none;
    min-height: 180px;
  }
  .medicamentChien06274265040Icon1 {
    height: 180px;
    flex: 1;
    position: relative;
    border-radius: var(--br-11xl) var(--br-11xl) 0px 0px;
    max-width: 100%;
    overflow: hidden;
    object-fit: cover;
  }
  .instructionText {
    align-self: stretch;
    border-radius: var(--br-11xl) var(--br-11xl) 0px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 1;
  }
  .menuBurgerContainerChild {
    align-self: stretch;
    width: 166px;
    position: relative;
    border-radius: 0px 0px var(--br-11xl) var(--br-11xl);
    background-color: var(--bleu-clair);
    display: none;
  }
  .commentDonnerUn {
    height: 68px;
    width: 133px;
    position: relative;
    font-weight: 600;
    display: none;
    flex-shrink: 0;
  }
  .horizontalLinesChild {
    height: 78px;
    width: 166px;
    position: relative;
    border-radius: 0px 0px var(--br-11xl) var(--br-11xl);
    background-color: var(--bleu-clair);
    display: none;
  }
  .commentDonnerUn1 {
    height: 68px;
    flex: 1;
    position: relative;
    font-weight: 600;
    display: inline-block;
    z-index: 1;
  }
  .horizontalLines {
    flex: 1;
    border-radius: 0px 0px var(--br-11xl) var(--br-11xl);
    background-color: var(--bleu-clair);
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    padding: var(--padding-2xs) var(--padding-mid) 0px var(--padding-base);
  }
  .menuBurgerContainer {
    align-self: stretch;
    border-radius: 0px 0px var(--br-11xl) var(--br-11xl);
    background-color: var(--bleu-clair);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .medicamentCapture {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    font-size: var(--font-size-sm);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
</style>
