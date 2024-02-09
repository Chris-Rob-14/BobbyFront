<template>
  <header :class="$style.fRAMEparent">
    <div :class="$style.rectanglevector">
      <div :class="$style.header">
        <div
          :class="$style.headerinstance"
          @click="onHeaderinstanceContainerClick"
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
            <div :class="$style.rectangleborder" />
          </div>
        </div>
      </div>
      <div :class="$style.subFrame">
        <div :class="$style.profiltext">
          <div :class="$style.rendezvouslabel">
            <div :class="$style.profil" @click="onProfilTextClick">Profil</div>
          </div>
          <div :class="$style.rendezVous">Rendez-vous</div>
          <div :class="$style.noAppointmentsmessage">
            <div :class="$style.documents" @click="onDocumentsText1Click">
              Documents
            </div>
            <img :class="$style.noAppointmentsmessageChild" alt="" />
          </div>
        </div>
      </div>
      <div :class="$style.statusFrame">
        <div :class="$style.frameMenu">
          <div :class="$style.frameLogoAndMenu" />
          <div :class="$style.frameLogoAndMenu1" />
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FRAMEparent",
    methods: {
      onHeaderinstanceContainerClick() {
        this.$router.push("/listeanimaux");
      },
      onMenuBurgerContainerClick() {
        this.$router.push("/mb");
      },
      onProfilTextClick() {
        this.$router.push("/traitement");
      },
      onDocumentsText1Click() {
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
  .rectangleborder {
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
  .headerinstance {
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
    z-index: 3;
  }
  .profil {
    position: relative;
    font-weight: 600;
    cursor: pointer;
  }
  .rendezvouslabel {
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
  }
  .documents {
    position: absolute;
    top: 14px;
    left: 14px;
    font-weight: 600;
    display: inline-block;
    width: 88px;
    cursor: pointer;
    z-index: 1;
  }
  .noAppointmentsmessageChild {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 119px;
    height: 46px;
    z-index: 2;
  }
  .noAppointmentsmessage {
    height: 46px;
    flex: 1;
    position: relative;
  }
  .profiltext {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-4xl);
  }
  .subFrame {
    width: 357px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-7xs);
    box-sizing: border-box;
  }
  .frameLogoAndMenu {
    height: 1px;
    width: 391px;
    position: relative;
    border-top: 1px solid var(--bleu-middle);
    box-sizing: border-box;
    z-index: 3;
  }
  .frameLogoAndMenu1 {
    height: 1px;
    width: 131px;
    position: relative;
    border-top: 1px solid var(--orange);
    box-sizing: border-box;
    z-index: 4;
    margin-left: -390px;
  }
  .frameMenu {
    height: 0px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .statusFrame {
    align-self: stretch;
    height: 0px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-8xs) 0px 0px;
    box-sizing: border-box;
  }
  .rectanglevector {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
  }
  .fRAMEparent {
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
