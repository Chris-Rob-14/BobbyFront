<template>
  <div :class="$style.priserdv">
    <SubFrameC /><MainFrame /><DocsFrame />
    
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FRAMEparent from "../components/FRAMEparent.vue";
  import MainFrame from "../components/MainFrame.vue";
  import DocsFrame from "../components/DocsFrame.vue";
import SubFrameC from "../components/SubFrameC.vue";

  export default defineComponent({
    name: "PriseRDV",
    components: { FRAMEparent, MainFrame, DocsFrame, SubFrameC },
  });
</script>
<style module>
  .priserdvChild {
    width: 119px;
    height: 46px;
    position: absolute;
    margin: 0 !important;
    top: calc(50% - 337.5px);
    right: 1px;
  }
 
  .priserdv {
    width: 100%;
    position: relative;
    border-radius: var(--br-11xl);
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px 33px;
    box-sizing: border-box;
    gap: var(--gap-17xl);
  }
</style>
