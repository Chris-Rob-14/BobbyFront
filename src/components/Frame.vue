<template>
  <div :class="$style.profilanimalInner">
    <div :class="$style.consultAppointmentsParent">
      <div :class="$style.consultAppointments">
        <div :class="$style.consultAppointmentsChild" />
        <div :class="$style.jeConsulteSes" @click="onJeConsulteSesClick">
          Je consulte ses traitements et rappels
        </div>
      </div>
      <div :class="$style.consultAppointments1">
        <div :class="$style.consultAppointmentsItem" />
        <div
          :class="$style.jePrendsRendezVous"
          @click="onJePrendsRendezVousClick"
        >
          Je prends rendez-vous
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Frame",
    methods: {
      onJeConsulteSesClick() {
        this.$router.push("/traitement");
      },
      onJePrendsRendezVousClick() {
        this.$router.push("/priserdv");
      },
    },
  });
</script>
<style module>
  .consultAppointmentsChild {
    height: 34px;
    width: 290px;
    position: relative;
    border-radius: var(--br-mini);
    background-color: var(--bleu-middle);
    border: 3px solid var(--bleu-middle);
    box-sizing: border-box;
    display: none;
  }
  .jeConsulteSes {
    position: relative;
    font-weight: 600;
    cursor: pointer;
    z-index: 2;
  }
  .consultAppointments {
    align-self: stretch;
    border-radius: var(--br-mini);
    background-color: var(--bleu-middle);
    border: 3px solid var(--bleu-middle);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-4xs) var(--padding-4xs);
    z-index: 1;
  }
  .consultAppointmentsItem {
    height: 34px;
    width: 290px;
    position: relative;
    border-radius: var(--br-mini);
    background-color: var(--bleu-middle);
    border: 3px solid var(--bleu-middle);
    box-sizing: border-box;
    display: none;
  }
  .jePrendsRendezVous {
    position: relative;
    font-weight: 600;
    cursor: pointer;
    z-index: 2;
  }
  .consultAppointments1 {
    align-self: stretch;
    border-radius: var(--br-mini);
    background-color: var(--bleu-middle);
    border: 3px solid var(--bleu-middle);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-4xs) var(--padding-4xs);
    z-index: 1;
  }
  .consultAppointmentsParent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xs) 0px 0px;
    gap: var(--gap-3xs);
  }
  .profilanimalInner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-lg) 0px var(--padding-10xs);
    text-align: left;
    font-size: var(--font-size-xs);
    color: var(--color-white);
    font-family: var(--font-montserrat);
  }
</style>
