<template>
  <header :class="$style.subFrameC">
    <div :class="$style.header">
      <div :class="$style.logoInstance" @click="onLogoInstanceContainerClick">
        <div :class="$style.logo">
          <img
            :class="$style.vectorIcon"
            alt=""
            src="/vector1.svg"
          />
          <img
            :class="$style.groupIcon"
            alt=""
            src="/group1.svg"
          />
        </div>
        <div :class="$style.menuBurger" @click="onMenuBurgerContainerClick">
          <img
            :class="$style.menuBurgerChild"
            alt=""
            src="/line-1.svg"
          />
          <img
            :class="$style.menuBurgerItem"
            alt=""
            src="/line-1.svg"
          />
          <div :class="$style.headerInstance" />
        </div>
      </div>
    </div>
    <div :class="$style.rendezvousText">
      <div :class="$style.profilText" @click="onProfilTextClick">
        <div :class="$style.profil">Profil</div>
      </div>
      <div :class="$style.rendezVous" @click="onRendezVousTextClick">
        Rendez-vous
      </div>
      <div :class="$style.rendezVous" @click="onDocumentsTextClick">
        Documents
      </div>
    </div>
    <div :class="$style.ralphText">
      <div :class="$style.carlinText" />
      <div :class="$style.carlinText1" />
    </div>
  </header>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SubFrameC",
    methods: {
      onLogoInstanceContainerClick() {
        this.$router.push("/listeanimaux");
      },
      onMenuBurgerContainerClick() {
        this.$router.push("/mb");
      },
      onRendezVousTextClick() {
        this.$router.push("/priserdv");
      },
      onDocumentsTextClick() {
        this.$router.push("/documents");
      },
      onProfilTextClick() {
        this.$router.push("/traitement");
      },
    },
  });
</script>
<style module>
  .vectorIcon {
    height: 28.9px;
    width: 53.2px;
    position: relative;
  }
  .groupIcon {
    height: 33px;
    width: 125.3px;
    position: relative;
  }
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-2xs);
  }
  .menuBurgerChild {
    position: absolute;
    height: 16.67%;
    width: 58.33%;
    top: 0%;
    right: 5.56%;
    bottom: 83.33%;
    left: 36.11%;
    border-radius: var(--br-3xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .menuBurgerItem {
    position: absolute;
    height: 16.67%;
    width: 58.33%;
    top: 100%;
    right: 5.56%;
    bottom: -16.67%;
    left: 36.11%;
    border-radius: var(--br-3xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: contain;
  }
  .headerInstance {
    position: absolute;
    height: 16.67%;
    width: 111.11%;
    top: 41.67%;
    right: -11.11%;
    bottom: 41.67%;
    left: 0%;
    border-top: 4px solid var(--bleu-nuit);
    box-sizing: border-box;
  }
  .menuBurger {
    height: 24px;
    width: 36px;
    position: relative;
    cursor: pointer;
  }
  .logoInstance {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  .header {
    align-self: stretch;
    border-radius: var(--br-11xl) var(--br-11xl) 0px 0px;
    background-color: var(--bleu-clair);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-7xl) var(--padding-lg);
    z-index: 2;
  }
  .profil {
    position: relative;
    font-weight: 600;
  }
  .profilText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-17xl) 0px 0px;
    color: var(--orange);
  }
  .rendezVous {
    position: relative;
    font-weight: 600;
    cursor: pointer;
  }
  .documents {
    position: absolute;
    top: 14px;
    left: 14px;
    font-weight: 600;
    display: inline-block;
    width: 88px;
    cursor: pointer;
  }
  .frameFChild {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 119px;
    height: 46px;
    z-index: 1;
  }
  .frameF {
    height: 46px;
    flex: 1;
    position: relative;
  }
  .rendezvousText {
    width: 44vh;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: var(--gap-4xl);
  }
  .carlinText {
    height: 1px;
    width: 391px;
    position: relative;
    border-top: 1px solid var(--bleu-middle);
    box-sizing: border-box;
    z-index: 2;
  }
  .carlinText1 {
    height: 1px;
    width: 131px;
    position: relative;
    border-top: 1px solid var(--orange);
    box-sizing: border-box;
    z-index: 3;
    margin-left: -390px;
  }
  .ralphText {
    align-self: stretch;
    height: 0px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .subFrameC {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-12xs);
    text-align: left;
    font-size: var(--font-size-mini);
    color: var(--bleu-middle);
    font-family: var(--font-montserrat);
  }
</style>
