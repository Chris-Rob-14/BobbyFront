<template>
  <div :class="$style.jamesLacyxImage">
    <div :class="$style.jamesLacyxImageChild" />
    <img
      :class="$style.harrisonKuglerKu6ozrjyAwUnIcon"
      alt=""
      :src="harrisonKuglerKu6OZrJyAwU"
    />
    <div :class="$style.quantityAdapter" :style="quantityAdapterStyle">
      <div :class="$style.quantityAdapterChild" />
      <div :class="$style.adapterLesBonnes">Adapter les bonnes quantités</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "JamesLacyxImage",
    props: {
      harrisonKuglerKu6OZrJyAwU: { type: String },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      quantityAdapterStyle(): CSS.Properties {
        return {
          padding: this.propPadding,
        };
      },
    },
  });
</script>
<style module>
  .jamesLacyxImageChild {
    align-self: stretch;
    height: 258px;
    position: relative;
    border-radius: var(--br-11xl);
    background-color: var(--color-gainsboro);
    display: none;
  }
  .harrisonKuglerKu6ozrjyAwUnIcon {
    align-self: stretch;
    height: 181px;
    position: relative;
    border-radius: var(--br-11xl) var(--br-11xl) 0px 0px;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    z-index: 1;
  }
  .quantityAdapterChild {
    height: 78px;
    width: 166px;
    position: relative;
    border-radius: 0px 0px var(--br-11xl) var(--br-11xl);
    background-color: var(--bleu-clair);
    display: none;
  }
  .adapterLesBonnes {
    height: 67px;
    flex: 1;
    position: relative;
    font-weight: 600;
    display: inline-block;
    z-index: 2;
  }
  .quantityAdapter {
    align-self: stretch;
    border-radius: 0px 0px var(--br-11xl) var(--br-11xl);
    background-color: var(--bleu-clair);
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    padding: var(--padding-xs) var(--padding-base) 0px var(--padding-lgi);
    z-index: 1;
  }
  .jamesLacyxImage {
    flex: 1;
    border-radius: var(--br-11xl);
    background-color: var(--color-gainsboro);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px;
    box-sizing: border-box;
    min-width: 148px;
    text-align: left;
    font-size: var(--font-size-sm);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
</style>
