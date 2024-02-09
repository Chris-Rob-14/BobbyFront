<template>
  <section :class="$style.frameContainer">
    <div :class="$style.bilanFrame">
      <div :class="$style.framesStack" />
    </div>
    <div :class="$style.bilanFrame1">
      <div :class="$style.linesFramesParent">
        <div :class="$style.linesFrames">
          <img
            :class="$style.iconMedical"
            alt=""
            src="/-icon-medical.svg"
          />
          <div :class="$style.ordonnanceFrames">
            <div :class="$style.bilan0708">Bilan 07/08</div>
          </div>
        </div>
        <div :class="$style.iconTrayDown">
          <img :class="$style.vectorIcon" alt="" src="/vector-22.svg" />
          <img
            :class="$style.vectorIcon1"
            alt=""
            src="/vector-3.svg"
          />
        </div>
      </div>
    </div>
    <div :class="$style.bilanFrame2">
      <div :class="$style.bilanFrameChild" />
    </div>
    <div :class="$style.bilanFrame3">
      <div :class="$style.frameParent">
        <div :class="$style.iconClipboardFullParent">
          <img
            :class="$style.iconClipboardFull"
            alt=""
            src="/-icon-clipboard-full.svg"
          />
          <div :class="$style.ordonnance1412">Ordonnance 14/12</div>
        </div>
        <img
          :class="$style.iconTrayAndArrowDown"
          alt=""
          src="/-icon-tray-and-arrow-down.svg"
        />
      </div>
    </div>
    <div :class="$style.bilanFrame4">
      <div :class="$style.bilanFrameItem" />
    </div>
    <div :class="$style.bilanFrame5">
      <div :class="$style.frameGroup">
        <div :class="$style.iconClipboardFullGroup">
          <img
            :class="$style.iconClipboardFull1"
            alt=""
            src="/-icon-clipboard-full.svg"
          />
          <div :class="$style.ordonnance14121">Ordonnance 14/12</div>
        </div>
        <img
          :class="$style.iconTrayAndArrowDown1"
          alt=""
          src="/-icon-tray-and-arrow-down.svg"
        />
      </div>
    </div>
    <div :class="$style.bilanFrame6">
      <div :class="$style.bilanFrameInner" />
    </div>
    <div :class="$style.bilanFrame7">
      <div :class="$style.frameDiv">
        <div :class="$style.iconClipboardFullContainer">
          <img
            :class="$style.iconClipboardFull2"
            alt=""
            src="/-icon-clipboard-full.svg"
          />
          <div :class="$style.ordonnance0904">Ordonnance 09/04</div>
        </div>
        <img
          :class="$style.vectorIcon2"
          alt=""
          src="/vector-41.svg"
        />
      </div>
    </div>
    <div :class="$style.bilanFrame8">
      <div :class="$style.lineDiv" />
    </div>
    <div :class="$style.bilanFrame9">
      <div :class="$style.frameParent1">
        <div :class="$style.iconMedicalParent">
          <img
            :class="$style.iconMedical1"
            alt=""
            src="/-icon-medical.svg"
          />
          <div :class="$style.bilan2305Wrapper">
            <div :class="$style.bilan2305">Bilan 23/05</div>
          </div>
        </div>
        <img
          :class="$style.frameChild"
          alt=""
          src="/group-348.svg"
        />
      </div>
    </div>
    <div :class="$style.bilanFrame10">
      <div :class="$style.bilanFrameChild1" />
    </div>
    <div :class="$style.bilanFrame11">
      <div :class="$style.frameParent2">
        <div :class="$style.iconClipboardFullParent1">
          <img
            :class="$style.iconClipboardFull3"
            alt=""
            src="/-icon-clipboard-full.svg"
          />
          <div :class="$style.ordonnance0109">Ordonnance 01/09</div>
        </div>
        <img
          :class="$style.iconTrayAndArrowDown2"
          alt=""
          src="/-icon-tray-and-arrow-down-2.svg"
        />
      </div>
    </div>
    <div :class="$style.bilanFrame12">
      <div :class="$style.bilanFrameChild2" />
    </div>
    <div :class="$style.bilanFrame13">
      <div :class="$style.frameParent3">
        <div :class="$style.iconClipboardFullParent2">
          <img
            :class="$style.iconClipboardFull4"
            alt=""
            src="/-icon-clipboard-full.svg"
          />
          <div :class="$style.ordonnance1610">Ordonnance 16/10</div>
        </div>
        <img
          :class="$style.iconTrayAndArrowDown3"
          alt=""
          src="/-icon-tray-and-arrow-down.svg"
        />
      </div>
    </div>
    <div :class="$style.frameContainerChild" />
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameContainer",
  });
</script>
<style module>
  .framesStack {
    height: 0.5px;
    flex: 1;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .bilanFrame {
    align-self: stretch;
    height: 4px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-9xs);
    box-sizing: border-box;
  }
  .iconMedical {
    height: 28.6px;
    width: 30px;
    position: relative;
  }
  .bilan0708 {
    position: relative;
    font-weight: 600;
  }
  .ordonnanceFrames {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .linesFrames {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl);
  }
  .vectorIcon {
    position: absolute;
    top: 9.1px;
    left: 0px;
    width: 14.9px;
    height: 5.8px;
  }
  .vectorIcon1 {
    position: absolute;
    top: 0px;
    left: 3.3px;
    width: 8.3px;
    height: 10.4px;
  }
  .iconTrayDown {
    height: 15px;
    width: 15px;
    position: relative;
  }
  .linesFramesParent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .bilanFrame1 {
    width: 299px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-7xs);
    box-sizing: border-box;
  }
  .bilanFrameChild {
    height: 0.5px;
    flex: 1;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .bilanFrame2 {
    align-self: stretch;
    height: 7px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-6xs);
    box-sizing: border-box;
  }
  .iconClipboardFull {
    height: 26.2px;
    width: 22px;
    position: relative;
  }
  .ordonnance1412 {
    position: relative;
    font-weight: 600;
  }
  .iconClipboardFullParent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .iconTrayAndArrowDown {
    height: 14.9px;
    width: 14.9px;
    position: relative;
  }
  .frameParent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .bilanFrame3 {
    width: 303px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-3xs);
    box-sizing: border-box;
  }
  .bilanFrameItem {
    height: 0.5px;
    flex: 1;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .bilanFrame4 {
    align-self: stretch;
    height: 8px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-5xs);
    box-sizing: border-box;
  }
  .iconClipboardFull1 {
    height: 26.2px;
    width: 22px;
    position: relative;
  }
  .ordonnance14121 {
    position: relative;
    font-weight: 600;
  }
  .iconClipboardFullGroup {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .iconTrayAndArrowDown1 {
    height: 14.9px;
    width: 14.9px;
    position: relative;
  }
  .frameGroup {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .bilanFrame5 {
    width: 303px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-3xs);
    box-sizing: border-box;
  }
  .bilanFrameInner {
    height: 0.5px;
    flex: 1;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .bilanFrame6 {
    align-self: stretch;
    height: 4px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-9xs);
    box-sizing: border-box;
  }
  .iconClipboardFull2 {
    height: 26.2px;
    width: 22px;
    position: relative;
  }
  .ordonnance0904 {
    position: relative;
    font-weight: 600;
  }
  .iconClipboardFullContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .vectorIcon2 {
    height: 14.9px;
    width: 14.9px;
    position: relative;
  }
  .frameDiv {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .bilanFrame7 {
    width: 303px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-3xs);
    box-sizing: border-box;
  }
  .lineDiv {
    height: 0.5px;
    flex: 1;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .bilanFrame8 {
    align-self: stretch;
    height: 4px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-9xs);
    box-sizing: border-box;
  }
  .iconMedical1 {
    height: 28.6px;
    width: 30px;
    position: relative;
  }
  .bilan2305 {
    position: relative;
    font-weight: 600;
  }
  .bilan2305Wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .iconMedicalParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl);
  }
  .frameChild {
    height: 14.9px;
    width: 14.9px;
    position: relative;
  }
  .frameParent1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .bilanFrame9 {
    width: 299px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-7xs);
    box-sizing: border-box;
  }
  .bilanFrameChild1 {
    height: 0.5px;
    flex: 1;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .bilanFrame10 {
    align-self: stretch;
    height: 7px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-6xs);
    box-sizing: border-box;
  }
  .iconClipboardFull3 {
    height: 26.2px;
    width: 22px;
    position: relative;
  }
  .ordonnance0109 {
    position: relative;
    font-weight: 600;
  }
  .iconClipboardFullParent1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .iconTrayAndArrowDown2 {
    height: 14.9px;
    width: 14.9px;
    position: relative;
  }
  .frameParent2 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .bilanFrame11 {
    width: 303px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-3xs);
    box-sizing: border-box;
  }
  .bilanFrameChild2 {
    height: 0.5px;
    flex: 1;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .bilanFrame12 {
    align-self: stretch;
    height: 8px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-5xs);
    box-sizing: border-box;
  }
  .iconClipboardFull4 {
    height: 26.2px;
    width: 22px;
    position: relative;
  }
  .ordonnance1610 {
    position: relative;
    font-weight: 600;
  }
  .iconClipboardFullParent2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .iconTrayAndArrowDown3 {
    height: 14.9px;
    width: 14.9px;
    position: relative;
  }
  .frameParent3 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .bilanFrame13 {
    width: 303px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-3xs);
    box-sizing: border-box;
  }
  .frameContainerChild {
    align-self: stretch;
    height: 0.5px;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .frameContainer {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-17xl);
    text-align: left;
    font-size: var(--font-size-sm);
    color: var(--bleu-nuit);
    font-family: var(--font-montserrat);
  }
</style>
