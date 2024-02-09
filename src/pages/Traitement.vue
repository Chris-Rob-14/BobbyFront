<template>
  <div :class="$style.traitement">
    <div :class="$style.subFrameA">
      <main :class="$style.subFrameB">
        <SubFrameC /><FrameMenu /><LinePrendrerendezvous /><Text1 />
        <div :class="$style.container">
          <div :class="$style.vectorParent">
            <img :class="$style.frameChild" alt="" src="/rectangle-56.svg" />
            <div :class="$style.notes">Notes</div>
          </div>
        </div>
        <div :class="$style.appointmentReminder">
          <div :class="$style.nePasOublierContainer">
            <ul :class="$style.nePasOublierDeChangerDeC">
              <li>Ne pas oublier de changer de croquettes</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
    <footer :class="$style.rectangleParent" @click="onGroupFooterClick">
      <div :class="$style.frameItem" />
      <h1 :class="$style.scheduleEncounter">+</h1>
      <div :class="$style.prendreRendezVous">Prendre rendez-vous</div>
    </footer>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import SubFrameC from "../components/SubFrameC.vue";
  import FrameMenu from "../components/FrameMenu.vue";
  import LinePrendrerendezvous from "../components/LinePrendrerendezvous.vue";
  import Text1 from "../components/Text1.vue";

  export default defineComponent({
    name: "Traitement",
    components: { SubFrameC, FrameMenu, LinePrendrerendezvous, Text1 },
    methods: {
      onGroupFooterClick() {
        this.$router.push("/priserdv");
      },
    },
  });
</script>
<style module>
  .frameChild {
    height: 38px;
    width: 80.5px;
    position: relative;
    border-radius: var(--br-81xl);
    display: none;
  }
  .notes {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .vectorParent {
    border-radius: var(--br-81xl);
    background-color: var(--bleu-clair);
    border: 1px solid var(--bleu-clair);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-xl) var(--padding-3xs)
      var(--padding-mid);
  }
  .container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 29px;
  }
  .nePasOublierDeChangerDeC {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-xl);
  }
  .nePasOublierContainer {
    height: 18px;
    flex: 1;
    position: relative;
    font-weight: 600;
    display: inline-block;
  }
  .appointmentReminder {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 39px 0px 42px;
    color: var(--color-darkslateblue-200);
  }
  .subFrameB {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 35px;
    text-align: left;
    font-size: var(--font-size-mini);
    color: var(--bleu-nuit);
    font-family: var(--font-montserrat);
  }
  .subFrameA {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px 0px 0px;
  }
  .frameItem {
    height: 55px;
    width: 351px;
    position: relative;
    border-radius: var(--br-mini);
    background-color: var(--color-white);
    border: 3px solid var(--orange);
    box-sizing: border-box;
    display: none;
  }
  .scheduleEncounter {
    margin: 0;
    height: 49px;
    position: relative;
    font-size: inherit;
    font-weight: 600;
    font-family: inherit;
    display: inline-block;
    z-index: 1;
  }
  .prendreRendezVous {
    position: relative;
    font-size: var(--font-size-xl);
    font-weight: 600;
    z-index: 1;
  }
  .rectangleParent {
    border-radius: var(--br-mini);
    background-color: var(--color-white);
    border: 3px solid var(--orange);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-10xs) var(--padding-36xl) var(--padding-10xs)
      var(--padding-30xl);
    gap: var(--gap-5xs);
    cursor: pointer;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--orange);
    font-family: var(--font-montserrat);
  }
  .traitement {
    width: 100%;
    position: relative;
    border-radius: var(--br-11xl);
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-13xl);
    box-sizing: border-box;
    gap: 99px;
  }
</style>
