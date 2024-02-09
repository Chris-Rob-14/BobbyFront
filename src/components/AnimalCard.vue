<template>
  <section :class="$style.animalCard">
    <div :class="$style.carteanimalchien">
      <div :class="$style.dateFrame">
        <img
          :class="$style.dateFrameChild"
          alt=""
          src="/group-154@2x.png"
        /><RalphDetails />
        <img
          :class="$style.dateFrameItem"
          alt=""
          src="/group-152.svg"
          @click="onGroupIconClick"
        />
      </div>
      <div :class="$style.rectangleParent" @click="onGroupContainerClick">
        <div :class="$style.frameChild" />
        <div :class="$style.jeConsulteLe">Je consulte le profil de Ralph</div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import RalphDetails from "./RalphDetails.vue";

  export default defineComponent({
    name: "AnimalCard",
    components: { RalphDetails },
    methods: {
      onGroupIconClick() {
        this.$router.push("/ajoutermodifieranimal");
      },
      onGroupContainerClick() {
        this.$router.push("/profil-animal");
      },
    },
  });
</script>
<style module>
  .dateFrameChild {
    height: 101px;
    width: 101px;
    position: relative;
    object-fit: cover;
  }
  .dateFrameItem {
    height: 33px;
    width: 33px;
    position: relative;
    cursor: pointer;
  }
  .dateFrame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-6xs);
    gap: var(--gap-lgi);
  }
  .frameChild {
    height: 34px;
    width: 290px;
    position: relative;
    border-radius: var(--br-mini);
    background-color: var(--bleu-middle);
    border: 3px solid var(--bleu-middle);
    box-sizing: border-box;
    display: none;
  }
  .jeConsulteLe {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .rectangleParent {
    border-radius: var(--br-mini);
    background-color: var(--bleu-middle);
    border: 3px solid var(--bleu-middle);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-36xl) var(--padding-4xs)
      var(--padding-37xl);
    cursor: pointer;
    font-size: var(--font-size-xs);
    color: var(--color-white);
  }
  .carteanimalchien {
    flex: 1;
    border-radius: var(--br-mini);
    background-color: var(--ivoire);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-smi);
    gap: var(--gap-4xl);
  }
  .animalCard {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mid) 0px var(--padding-xl);
    text-align: left;
    font-size: var(--font-size-13xl);
    color: var(--bleu-middle);
    font-family: var(--font-montserrat);
  }
</style>
