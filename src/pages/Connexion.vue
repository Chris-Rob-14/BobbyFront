<template>
  <div :class="$style.connexion">
    <main :class="$style.connexion1">
      <div :class="$style.connexionChild" />
      <div :class="$style.subFrame">
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
      </div>
      <div :class="$style.jeNeSuisContainer">
        Je ne suis pas encore inscrit ?
        <span :class="$style.crerMonCompte"> <a :class="$style.lienCreation" href="./creation">Créer mon compte</a></span>
      </div>
      <SignUpFrame />
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import SignUpFrame from "../components/SignUpFrame.vue";

  export default defineComponent({
    name: "Connexion",
    components: { SignUpFrame },

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
  .subFrame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-base);
    box-sizing: border-box;
    max-width: 100%;
  }
  .crerMonCompte {
    text-decoration: underline;
  }
  .jeNeSuisContainer {
    width: 256px;
    height: 36px;
    position: relative;
    font-weight: 600;
    display: inline-block;
    cursor: pointer;
    z-index: 2;

  }
  .boutonSeConnecterChild {
    height: 53px;
    width: 307px;
    position: relative;
    border-radius: var(--br-11xl);
    background-color: var(--orange);
    display: none;
  }
  .jeMeConnecte {
    position: relative;
    z-index: 1;
    font-family: var(--font-montserrat);
    font-weight: 600;
  }
  .boutonSeConnecter {
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
    font-size: var(--font-size-lgi);
    color: var(--color-white);
  }
  .connexion1 {
    height: 100vh;
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
    font-size: var(--font-size-mini);
    color: var(--ivoire);
    font-family: var(--font-montserrat);
  }
  .connexion {
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    letter-spacing: normal;
  }
  .lienCreation{
    color: var(--ivoire);
  }

  @media screen and (max-width: 675px) {
    .connexion1 {
      padding-top: var(--padding-12xl);
      padding-bottom: var(--padding-25xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .logo {
      flex-wrap: wrap;
    }

    .boutonSeConnecter {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
