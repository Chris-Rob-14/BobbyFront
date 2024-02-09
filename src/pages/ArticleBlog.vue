<template>
  <div :class="$style.articleBlog">
    <HeaderFrame /><Text2 />
    <section :class="$style.lorsqueLeChatContainer">
      <p :class="$style.lorsqueLeChat">
        Lorsque le chat a accès à un jardin, il utilise ses griffes pour grimper
        aux arbres, creuser la terre, courir, chasser ses proies ou se défendre
        des attaques des autres chats. Les chats d’intérieur, plus sédentaires,
        ont moins d’occasions d’user leurs griffes, mais leur instinct les
        pousse tout de même à les utiliser… sur des surfaces qui ne font pas
        toujours l’unanimité !
      </p>
      <p :class="$style.blankLine">&nbsp;</p>
      <p :class="$style.lesGriffesDu">
        Les griffes du chat, qu’il ait accès à l’extérieur ou qu’il s’agisse
        d’un chat d’intérieur, lui permettent aussi de marquer son territoire en
        déposant des phéromones grâce à des glandes situées au niveau de ses
        coussinets. Les griffures servent aussi de marquage visuel.
      </p>
      <p :class="$style.blankLine1">&nbsp;</p>
      <p :class="$style.ilEstDonc">
        Il est donc très important, notamment pour les chats d’intérieur, de
        mettre à leur disposition des griffoirspour éviter qu’ils ne s’attaquent
        à votre canapé ou à vos rideaux. Le besoin de griffer étant
        irrépressible, autant que les griffures se fassent sur un support
        adapté.
      </p>
    </section>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import HeaderFrame from "../components/HeaderFrame.vue";
  import Text2 from "../components/Text2.vue";

  export default defineComponent({
    name: "ArticleBlog",
    components: { HeaderFrame, Text2 },
  });
</script>
<style module>
  .lorsqueLeChat {
    margin-block-start: 0;
    margin-block-end: 4px;
  }
  .blankLine {
    margin-block-start: 0;
    margin-block-end: 4px;
  }
  .lesGriffesDu {
    margin-block-start: 0;
    margin-block-end: 4px;
  }
  .blankLine1 {
    margin-block-start: 0;
    margin-block-end: 4px;
  }
  .ilEstDonc {
    margin: 0;
  }
  .lorsqueLeChatContainer {
    width: 362px;
    height: 490px;
    position: relative;
    font-size: var(--font-size-mini);
    line-height: 20px;
    font-family: var(--font-montserrat);
    color: var(--bleu-nuit);
    text-align: left;
    display: inline-block;
    flex-shrink: 0;
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
  }
  .articleBlog {
    width: 100%;
    position: relative;
    border-radius: var(--br-11xl);
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px 87px;
    box-sizing: border-box;
    gap: var(--gap-5xs);
  }
</style>
