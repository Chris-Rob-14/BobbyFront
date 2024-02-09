<template>
  <section :class="$style.mainFrame">
    <div :class="$style.rdvListFrame">
      <div :class="$style.upcomingRdvs">
        <div :class="$style.rendezvousFrame">
          <div :class="$style.prochainsRdv">Prochains RDV</div>
        </div>
        <div :class="$style.noAppointmentFrame" />
      </div>
      <div :class="$style.menuBurgerLine">
        <div :class="$style.pasDeRendezVous">
          Pas de rendez-vous de programmé pour le moment !
        </div>
      </div>


      <div :class="$style.addRendezvous">
          <button :class="$style.addButton" @click="openModal">Ajouter</button>
      </div>
    <teleport to="body">
      <div v-if="isModalOpen" :class="$style.modal" @click="closeModal">
        <div :class="$style.modalContent">
          <div class="calendarContainer">
            <FullCalendar ref="fullCalendar" :plugins="[dayGridPlugin, interactionPlugin]" initial-view="dayGridMonth" :renderers="renderers"/>
          </div>
        </div>
      </div>
    </teleport>


    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent,ref } from "vue";
  import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

  export default defineComponent({
    name: "MainFrame",
    components: { FullCalendar },
    setup() {
    const isModalOpen = ref(false);

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    return {
      isModalOpen,
      openModal,
      closeModal,
      dayGridPlugin,
      interactionPlugin
    };
  },
  });
  const renderers: { container: HTMLElement } = {
  container: document.querySelector('.modalContent .calendarContainer') as HTMLElement,
};
</script>
<style module>
.modalContent {
  height: 650px;
  width: 300px;
}
.addButton {
  height: 31px;
  width: 133px;
  position: relative;
  border-radius: var(--br-mini);
  background-color: var(--orange);
  border: 1px solid var(--orange);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-6xs) var(--padding-9xl) var(--padding-7xs)
    var(--padding-6xl);
  gap: var(--gap-2xs);
  cursor: pointer;
  font-weight: 600;
  color: var(--ivoire);
  font-family: var(--font-montserrat);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modalContent {
  background-color: var(--ivoire);
  border-radius: var(--br-mini);
  padding: var(--padding-mid);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-mid);
}
  .prochainsRdv {
    flex: 1;
    position: relative;
    font-weight: 600;
  }
  .rendezvousFrame {
    width: 283px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mini);
    box-sizing: border-box;
  }
  .noAppointmentFrame {
    align-self: stretch;
    height: 0.5px;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .upcomingRdvs {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xs);
  }
  .pasDeRendezVous {
    height: 18px;
    flex: 1;
    position: relative;
    font-weight: 600;
    display: inline-block;
  }
  .menuBurgerLine {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mid) 0px var(--padding-22xl);
    text-align: center;
    color: var(--color-darkslateblue-100);
  }
  .frameChild {
    height: 31px;
    width: 133px;
    position: relative;
    border-radius: var(--br-mini);
    background-color: var(--orange);
    border: 1px solid var(--orange);
    box-sizing: border-box;
    display: none;
  }
  .ajouterGroupeIcon {
    height: 13px;
    width: 13px;
    position: relative;
    z-index: 1;
  }
  .ajouter {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .rectangleParent {
    border-radius: var(--br-mini);
    background-color: var(--orange);
    border: 1px solid var(--orange);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-6xs) var(--padding-9xl) var(--padding-7xs)
      var(--padding-6xl);
    gap: var(--gap-2xs);
  }
  .addRendezvous {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-5xl);
    color: var(--color-white);
  }
  .rdvListFrame {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-11xl);
  }
  .mainFrame {
    width: 376px;
    height: 182px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-26xl) 0px var(--padding-xl);
    box-sizing: border-box;
    text-align: left;
    font-size: var(--font-size-mini);
    color: var(--bleu-middle);
    font-family: var(--font-montserrat);
  }
</style>
