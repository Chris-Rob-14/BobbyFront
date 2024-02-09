<template>
  <section :class="$style.nutritionSection" @click="onNutritionSectionClick">
    <div :class="$style.imageAdapter" />
    <div :class="$style.goodQuantities">
      <div :class="$style.nutrition">Nutrition</div>
      <div :class="$style.goodQuantitiesChild" />
    </div>
    <div :class="$style.recipeAdaptation">
      <JamesLacyxImage
        harrisonKuglerKu6OZrJyAwU="/harrisonkuglerku6ozrjy-awunsplash@2x.png"
      /><JamesLacyxImage
        harrisonKuglerKu6OZrJyAwU="/jameslacyxe-mtmixlwunsplash@2x.png"
        propPadding="var(--padding-xs) var(--padding-smi) 0px var(--padding-3xl)"
      />
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import JamesLacyxImage from "./JamesLacyxImage.vue";

  export default defineComponent({
    name: "NutritionSection",
    components: { JamesLacyxImage },
    methods: {
      onNutritionSectionClick() {
        this.$router.push("/article-blog");
      },
    },
  });
</script>
<style module>
  .imageAdapter {
    width: 250px;
    height: 1px;
    position: absolute;
    margin: 0 !important;
    top: 17px;
    right: 20px;
    border-top: 1px solid var(--orange);
    box-sizing: border-box;
  }
  .nutrition {
    position: relative;
    font-weight: 600;
  }
  .goodQuantitiesChild {
    height: 31px;
    width: 100px;
    position: relative;
    border-radius: var(--br-mini);
    border: 1px solid var(--orange);
    box-sizing: border-box;
    display: none;
  }
  .goodQuantities {
    width: 100px;
    border-radius: var(--br-mini);
    border: 1px solid var(--orange);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-6xs) var(--padding-mid) var(--padding-7xs)
      var(--padding-sm);
    z-index: 1;
  }
  .recipeAdaptation {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-base);
    font-size: var(--font-size-sm);
    color: var(--color-black);
  }
  .nutritionSection {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-2xl) var(--padding-12xs);
    position: relative;
    gap: var(--gap-mini);
    cursor: pointer;
    text-align: left;
    font-size: var(--font-size-mini);
    color: var(--orange);
    font-family: var(--font-montserrat);
  }
</style>
