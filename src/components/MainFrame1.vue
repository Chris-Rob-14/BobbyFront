<template>
  <div :class="$style.mainFrame">
    <div :class="$style.headerParent">
      <header :class="$style.header">
        <div
          :class="$style.logoComponent"
          @click="onLogoComponentContainerClick"
        >
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
            <div :class="$style.menuBurgerInner" />
          </div>
        </div>
      </header>
      <div :class="$style.documentFrame">
        <div :class="$style.textBox">
          <div :class="$style.profil" @click="onProfilTextClick">Profil</div>
        </div>
        <div :class="$style.rendezVous" @click="onRendezVousTextClick">
          Rendez-vous
        </div>
        <div :class="$style.menuLine">
          <div :class="$style.menuLineChild" />
          <div :class="$style.menuLineItem" />
        </div>
        <div :class="$style.documentsFrame">
          <div :class="$style.documents" @click="onDocumentsTextClick">Documents</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "MainFrame1",
    methods: {
      onLogoComponentContainerClick() {
        this.$router.push("/listeanimaux");
      },
      onMenuBurgerContainerClick() {
        this.$router.push("/mb");
      },
      onProfilTextClick() {
        this.$router.push("/traitement");
      },
      onRendezVousTextClick() {
        this.$router.push("/priserdv");
      },
      onDocumentsTextClick() {
        this.$router.push("/documents");
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
    gap: var(--gap-3xs);
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
  .menuBurgerInner {
    position: absolute;
    height: 16.67%;
    width: 111.11%;
    top: 33.33%;
    right: -5.56%;
    bottom: 50%;
    left: -5.56%;
    border-top: 4px solid var(--bleu-nuit);
    box-sizing: border-box;
  }
  .menuBurger {
    height: 24px;
    width: 36px;
    position: relative;
    cursor: pointer;
  }
  .logoComponent {
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
    cursor: pointer;
  }
  .textBox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xl) 0px 0px;
    color: var(--orange);
  }
  .rendezVous {
    position: relative;
    font-weight: 600;
    cursor: pointer;
  }
  .menuLineChild {
    height: 1px;
    width: 391px;
    position: relative;
    border-top: 1px solid var(--bleu-middle);
    box-sizing: border-box;
  }
  .menuLineItem {
    height: 1px;
    width: 131px;
    position: relative;
    border-top: 1px solid var(--orange);
    box-sizing: border-box;
    margin-left: -390px;
  }
  .menuLine {
    height: 40px;
    width: 390px;
    margin: 0 !important;
    position: absolute;
    bottom: -19px;
    left: -44px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl) 0px;
    box-sizing: border-box;
  }
  .documents {
    position: absolute;
    top: 13px;
    left: 8px;
    font-weight: 600;
    display: inline-block;
    width: 88px;
  }
  .documentsFrameChild {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 119px;
    height: 46px;
    z-index: 2;
  }
  .documentsFrame {
    height: 46px;
    flex: 1;
    position: relative;
  }
  .documentFrame {
    width: 351px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-10xl);
  }
  .headerParent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-7xs);
  }
  .mainFrame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px 0px 0px;
    text-align: left;
    font-size: var(--font-size-mini);
    color: var(--bleu-middle);
    font-family: var(--font-montserrat);
  }
</style>
