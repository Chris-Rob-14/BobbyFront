<template>
  <form :class="$style.saveButtonFrame">
    <div :classstyle.saveButtonFrameInner">
      <div :class="$style.poidsParent">
        <div :class="$style.poids">Date de naissance</div>
        <div :class="$style.rectangleWrapper">
          <div :class="$style.frameChild" />
          <input
            type="date"
            :class="$style.emailInput"
            placeholder="01-01-1990"
          />
        </div>
      </div>
    </div>
    <TailleNumIdGroupFrame />
    <div :class="$style.ageLabelWrapper">
      <div :class="$style.ageLabel">
        <div :class="$style.birthdateLabel">
          <div :class="$style.age">Mot de passe oublié ?</div>
          <div :class="$style.dateDeNaissance">
            <input
              type="password"
              :class="$style.passwordInput"
              placeholder="Mot de passe"
            />
          </div>
        </div>
        <div :class="$style.ageLabelInner">
          <div :class="$style.frameItem" />
        </div>
      </div>
    </div>
    <TailleNumIdGroupFrame propHeight="75px" />
    <div :class="$style.traitementRegularLabelWrapper">
      <div :class="$style.traitementRegularLabel">
        <div :class="$style.traitementRgulier">Mot de passe</div>
        <div :class="$style.traitementRegularLabelInner">
          <div :class="$style.frameInner" />
        </div>
      </div>
    </div>
    <div :class="$style.buttonFrame">
      <div :class="$style.rectangleParent" @click="onGroupContainerClick">
        <div :class="$style.rectangleDiv" />
        <div :class="$style.enregistrer">Je me connecte</div>
      </div>
    </div>
  </form>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import TailleNumIdGroupFrame from "./TailleNumIdGroupFrame.vue";

  export default defineComponent({
    name: "SaveButtonFrame",
    components: { TailleNumIdGroupFrame },
    methods: {
      onGroupContainerClick() {
        this.$router.push("/listeanimaux");
      },
    },
  });
</script>
<style module>
  .poids {
    position: relative;
    font-size: var(--font-size-mini);
    font-family: var(--font-montserrat);
    color: var(--bleu-middle);
    text-align: center;
    z-index: 1;
  }
  .frameChild {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-smi);
    background-color: var(--bleu-nuit);
    width: 135px;
    height: 46px;
    display: none;
  }
  .rectangleWrapper {
    align-self: stretch;
    height: 46px;
    position: relative;
    border-radius: var(--br-smi);
    background-color: var(--bleu-nuit);
    z-index: 1;
  }
  .poidsParent {
    width: 155px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-8xs);
  }
  .saveButtonFrameInner {
    align-self: stretch;
    height: 81px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-7xs);
    box-sizing: border-box;
  }
  .age {
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: var(--font-size-mini);
    text-decoration: underline;
    font-weight: 600;
    font-family: var(--font-montserrat);
    color: var(--ivoire);
    text-align: center;
    display: inline-block;
    width: 168px;
    height: 18px;
    z-index: 1;
  }
  .dateDeNaissance {
    position: absolute;
    top: 9px;
    left: -2px;
    font-size: var(--font-size-mini);
    font-family: var(--font-montserrat);
    color: var(--bleu-middle);
    text-align: center;
    z-index: 2;
  }
  .birthdateLabel {
    align-self: stretch;
    height: 24px;
    position: relative;
  }
  .frameItem {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-smi);
    background-color: var(--bleu-nuit);
    width: 130px;
    height: 46px;
    display: none;
  }
  .ageLabelInner {
    width: 130px;
    height: 46px;
    position: relative;
    border-radius: var(--br-smi);
    background-color: var(--bleu-nuit);
    z-index: 1;
  }
  .ageLabel {
    width: 188px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-8xs);
  }
  .ageLabelWrapper {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-7xs);
  }
  .traitementRgulier {
    width: 134px;
    position: relative;
    font-size: var(--font-size-mini);
    font-family: var(--font-montserrat);
    font-weight: 600;
    color: var(--bleu-middle);
    text-align: center;
    display: inline-block;
    padding-right: var(--padding-xl);
    z-index: 1;
  }
  .frameInner {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-smi);
    background-color: var(--bleu-nuit);
    width: 307px;
    height: 46px;
    display: none;
  }
  .traitementRegularLabelInner {
    align-self: stretch;
    height: 46px;
    position: relative;
    border-radius: var(--br-smi);
    background-color: var(--bleu-nuit);
    z-index: 1;
  }
  .traitementRegularLabel {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-8xs);
  }
  .traitementRegularLabelWrapper {
    align-self: stretch;
    height: 75px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-2xs);
    box-sizing: border-box;
  }
  .rectangleDiv {
    height: 53px;
    width: 307px;
    position: relative;
    border-radius: var(--br-11xl);
    background-color: var(--orange);
    display: none;
  }
  .enregistrer {
    position: relative;
    font-size: var(--font-size-lgi);
    font-family: var(--font-montserrat);
    font-weight: 600;
    color: var(--color-white);
    text-align: center;
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
    cursor: pointer;
    z-index: 1;
  }
  .buttonFrame {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-2xs) 0px 0px;
  }
  .saveButtonFrame {
    margin: 0;
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
</style>
