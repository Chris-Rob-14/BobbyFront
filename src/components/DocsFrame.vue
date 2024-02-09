<template>
  <section :class="$style.docsFrame">
    <div :class="$style.frameDocteurMarie">
      <div :class="$style.iconRendezvous">
        <div :class="$style.frameRdvs">
          <div :class="$style.rendezvousList">
            <div :class="$style.rendezVousPasss">Rendez-vous passés</div>
          </div>
          <div :class="$style.frameDocuments">
            <div :class="$style.schedule">
              <div :class="$style.documents">Documents</div>
            </div>
            <div :class="$style.documentsList" />
          </div>
        </div>
        <div :class="$style.headerWithIcon">
          <div :class="$style.docteurMarie0708">Docteur Marie 07/08</div>
          <img
            :class="$style.iconClipboardFull"
            alt=""
            src="/-icon-clipboard-full.svg"
          />
        </div>
      </div>
      <div :class="$style.lineSeparator" />
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "DocsFrame",
  });
</script>
<style module>
  .rendezVousPasss {
    flex: 1;
    position: relative;
    font-weight: 600;
  }
  .rendezvousList {
    width: 283px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mini);
    box-sizing: border-box;
  }
  .documents {
    flex: 1;
    position: relative;
    font-weight: 600;
  }
  .schedule {
    width: 283px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mini);
    box-sizing: border-box;
  }
  .documentsList {
    align-self: stretch;
    height: 0.5px;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .frameDocuments {
    align-self: stretch;
    height: 18px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: var(--color-white);
  }
  .frameRdvs {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-sm);
  }
  .docteurMarie0708 {
    position: relative;
    font-weight: 600;
  }
  .iconClipboardFull {
    height: 26.2px;
    width: 22px;
    position: relative;
  }
  .headerWithIcon {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px var(--padding-base);
    font-size: var(--font-size-sm);
  }
  .iconRendezvous {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-3xl);
  }
  .lineSeparator {
    align-self: stretch;
    height: 0.5px;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .frameDocteurMarie {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-21xl);
  }
  .docsFrame {
    width: 376px;
    height: 336px;
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
