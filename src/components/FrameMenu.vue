<template>
  <section :class="$style.frameMenu">
    <div :class="$style.frameProfile">
      <div :class="$style.frameMaskgroup">
        <img :class="$style.maskGroupIcon" alt="" src="/mask-group@2x.png" />
        <img
          :class="$style.frameMaskgroupChild"
          alt=""
          src="/group-153.svg"
        />
      </div>
      <RalphDetails
        propMinWidth="103px"
        propWidth="121px"
        propPaddingRight="20px"
        propPadding="0px var(--padding-xl) 0px 0px"
        propPadding1="0px var(--padding-xl) 0px 0px"
      />
      <div :class="$style.frameAujourdhui">
        <div :class="$style.framePipetteAdvantix" />
        <img
          :class="$style.vectorIcon"
          alt=""
          src="/vector-21.svg"
          @click="onVectorIconClick"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import RalphDetails from "./RalphDetails.vue";

  export default defineComponent({
    name: "FrameMenu",
    components: { RalphDetails },
    methods: {
      onVectorIconClick() {
        this.$router.push("/ajoutermodifieranimal");
      },
    },
  });
</script>
<style module>
  .maskGroupIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 101px;
    height: 101px;
    object-fit: cover;
  }
  .frameMaskgroupChild {
    position: absolute;
    top: 75px;
    left: 75px;
    width: 26px;
    height: 26px;
    z-index: 1;
  }
  .frameMaskgroup {
    height: 101px;
    width: 101px;
    position: relative;
  }
  .framePipetteAdvantix {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    background-color: var(--bleu-middle);
    width: 33px;
    height: 33px;
  }
  .vectorIcon {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    z-index: 1;
  }
  .frameAujourdhui {
    height: 33px;
    width: 33px;
    position: relative;
  }
  .frameProfile {
    width: 331px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-lgi);
  }
  .frameMenu {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-lgi) 0px var(--padding-22xl);
  }
</style>
