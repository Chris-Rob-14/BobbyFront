<template>
  <section :class="$style.commentsFrame" @click="onCommentsFrameClick">
    <div :class="$style.frameWithQuestions">
      <MedicamentCapture
        medicamentChien0627426504="/medicamentchien062742650400@2x.png"
        medicamentChien06274265041="/medicamentchien062742650400@2x.png"
        commentDonnerUnMdicamentM="Comment donner un médicament à mon chien ?"
        commentDonnerUnMdicamentM1="Comment donner un médicament à mon chien ?"
      /><MedicamentCapture
        medicamentChien0627426504="/capture-decran-20230208-a-1049@2x.png"
        medicamentChien06274265041="/capture-decran-20230208-a-1049@2x.png"
        commentDonnerUnMdicamentM="7 questions sur les litières pour chat."
        commentDonnerUnMdicamentM1="7 questions sur les litières pour chat."
        propAlignSelf="stretch"
        propFlex="unset"
        propBackgroundImage="unset"
        propAlignSelf1="unset"
        propHeight="78px"
        propPadding="var(--padding-xs) var(--padding-sm) 0px var(--padding-2xl)"
        propWidth="131px"
      />
    </div>
    <div :class="$style.headerGroup">
      <MedicamentCapture
        medicamentChien0627426504="/comment-savoir-si-mon-chat-a-des-boules-de-poils-4446-paso-1-600@2x.png"
        medicamentChien06274265041="/comment-savoir-si-mon-chat-a-des-boules-de-poils-4446-paso-1-600@2x.png"
        commentDonnerUnMdicamentM="Boules de poils chez le chat, les solutions."
        commentDonnerUnMdicamentM1="Boules de poils chez le chat, les solutions."
        propAlignSelf="stretch"
        propFlex="unset"
        propBackgroundImage="unset"
        propAlignSelf1="stretch"
        propHeight="unset"
        propPadding="var(--padding-2xs) var(--padding-6xl) 0px var(--padding-4xl)"
        propWidth="118px"
      />
      <div :class="$style.headerGroupInner" @click="onGroupContainerClick">
        <MedicamentCapture
          medicamentChien0627426504="/anastaciadvi0mg7dhchuounsplash@2x.png"
          medicamentChien06274265041="/anastaciadvi0mg7dhchuounsplash@2x.png"
          commentDonnerUnMdicamentM="Commente entretenir les griffes de chat ?"
          commentDonnerUnMdicamentM1="Commente entretenir les griffes de chat ?"
          propAlignSelf="unset"
          propFlex="1"
          propBackgroundImage="unset"
          propAlignSelf1="stretch"
          propHeight="unset"
          propPadding="var(--padding-2xs) var(--padding-5xl) 0px var(--padding-3xl)"
          propWidth="120px"
          :onGroupContainerClick="onGroupContainerClick"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import MedicamentCapture from "./MedicamentCapture.vue";

  export default defineComponent({
    name: "CommentsFrame",
    components: { MedicamentCapture },
    methods: {
      onGroupContainerClick() {
        this.$router.push("/article-blog");
      },
      onCommentsFrameClick() {
        this.$router.push("/article-blog");
      },
      onGroupContainer2Click() {
        this.$router.push("/article-blog");
      },
    },
  });
</script>
<style module>
  .frameWithQuestions {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-lgi);
    min-width: 108px;
  }
  .headerGroupInner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .headerGroup {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-lgi);
    min-width: 108px;
  }
  .commentsFrame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-2xl);
    gap: var(--gap-base);
    cursor: pointer;
    z-index: 2;
    text-align: left;
    font-size: var(--font-size-sm);
    color: var(--color-black);
    font-family: var(--font-montserrat);
  }
</style>
