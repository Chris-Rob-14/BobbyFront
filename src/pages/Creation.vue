<template>
  <div :class="$style.creation">
    <main :class="$style.connexion">
      <div :class="$style.connexionChild" />
      <section :class="$style.logoInstance">
        <div :class="$style.logo">
          <img
            :class="$style.vectorIcon"
            alt=""
            src="/vector.svg"
          />
          <img
            :class="$style.groupIcon"
            alt=""
            src="/group.svg"
          />
        </div>
      </section>
      <SignUpFrame />
      <div :class="$style.rectangleParent" @click="onGroupContainerClick">
        <div :class="$style.frameChild" />
        <div :class="$style.jeCrerMon">Je me connecte</div>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import SignUpFrame from "../components/SignUpFrame.vue";

  export default defineComponent({
    name: "Creation",
    components: { SignUpFrame },
    methods: {
      onGroupContainerClick() {
        this.$router.push("/listeanimaux");
      },
    },
  });
</script>
<style module>
  .connexionChild {
    width: 390px;
    height: 844px;
    position: relative;
    background-color: var(--bleu-middle);
    display: none;
    max-width: 100%;
  }
  .vectorIcon {
    height: 52.1px;
    width: 95.9px;
    position: relative;
  }
  .groupIcon {
    height: 59.5px;
    width: 226px;
    position: relative;
  }
  .logo {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lg);
    max-width: 100%;
    z-index: 2;
  }
  .logoInstance {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 102px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .frameChild {
    height: 53px;
    width: 307px;
    position: relative;
    border-radius: var(--br-11xl);
    background-color: var(--orange);
    display: none;
  }
  .jeCrerMon {
    position: relative;
    z-index: 1;
  }
  .rectangleParent {
    border-radius: var(--br-11xl);
    background-color: var(--orange);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-mid) var(--padding-51xl) var(--padding-mid)
      var(--padding-52xl);
    white-space: nowrap;
    cursor: pointer;
    z-index: 2;
    font-weight: 600;
    font-family: var(--font-montserrat);
  }
  .connexion {
    flex: 1;
    border-radius: var(--br-11xl);
    background-color: var(--bleu-middle);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-28xl) var(--padding-6xl) var(--padding-49xl);
    box-sizing: border-box;
    gap: var(--gap-31xl);
    max-width: 100%;
    z-index: 1;
    text-align: center;
    font-size: var(--font-size-lgi);
    color: var(--color-white);
  }
  .creation {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    letter-spacing: normal;
  }

  @media screen and (max-width: 675px) {
    .connexion {
      height: 100vh;
      padding-top: var(--padding-12xl);
      padding-bottom: var(--padding-25xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .logo {
      flex-wrap: wrap;
    }

    .rectangleParent {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
