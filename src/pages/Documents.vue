<template>
  <div :class="$style.documents" :onClick="onDocumentsContainerClick">
    <SubFrameC/>
    <main :class="$style.frameParentParent" data-scroll-to="groupMain">
      <div :class="$style.frameParent">
        <div :class="$style.profileFrame">
          <div :class="$style.ordonnanceText">
            <img
              :class="$style.iconClipboardFull"
              alt=""
              src="/-icon-clipboard-full.svg"
            />
            <div :class="$style.ordonnance1407">Ordonnance 14/07</div>
          </div>
          <img
            :class="$style.vectorLineIcon"
            alt=""
            src="/vector-14.svg"
          />
        </div>
      </div>
      <FrameContainer />
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import SubFrameC from "../components/SubFrameC.vue";
  import FrameContainer from "../components/FrameContainer.vue";

  export default defineComponent({
    name: "Documents",
    components: { SubFrameC, FrameContainer },
    methods: {
      onDocumentsContainerClick() {
        const anchor = document.querySelector("[data-scroll-to='groupMain']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
    },
  });
</script>
<style module>
  .documentsChild {
    width: 119px;
    height: 46px;
    position: absolute;
    margin: 0 !important;
    top: calc(50% - 418.5px);
    right: 7px;
    z-index: 1;
  }
  .iconClipboardFull {
    height: 26.2px;
    width: 22px;
    position: relative;
  }
  .ordonnance1407 {
    position: relative;
    font-weight: 600;
  }
  .ordonnanceText {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .vectorLineIcon {
    height: 14.9px;
    width: 14.9px;
    position: relative;
  }
  .profileFrame {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .frameParent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-lg) 0px var(--padding-3xs);
  }
  .frameParentParent {
    width: 351px;
    height: 810px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-22xl);
    text-align: left;
    font-size: var(--font-size-sm);
    color: var(--bleu-nuit);
    font-family: var(--font-montserrat);
  }
  .documents {
    width: 100%;
    position: relative;
    border-radius: var(--br-11xl);
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-8xl);
    box-sizing: border-box;
    gap: 37px;
    cursor: pointer;
  }
</style>
