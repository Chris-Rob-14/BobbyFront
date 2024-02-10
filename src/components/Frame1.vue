<template>
  <div :class="$style.frameParent">
    <div :class="$style.groupParent">
      <div :class="$style.group">
        <div :class="$style.groupChild" />
        <img
          :class="$style.vectorIcon"
          alt=""
          src="/vector2.svg"
          @click="onVectorIconClick"
        />
      </div>
      <div :class="$style.frameGroup">
        <div :class="$style.groupGroup">
          <div :class="$style.group1">
            <img
              :class="$style.groupItem"
              alt=""
              src="/group-122@2x.png"
            />
          </div>
          <div :class="$style.animalProfile">
            <div :class="$style.ralphLabel">
              <h1 :class="$style.ralph">{{ animal.name}}</h1>
              <h2 :class="$style.carlin">{{ animal.type }}</h2>
            </div>
            <div :class="$style.vectorLine">
              <div :class="$style.mai2019">{{ animal.age }} ans</div>
              <div :class="$style.dogFill">
                <img
                  :class="$style.vectorIcon1"
                  alt=""
                  src="/vector-11.svg"
                />
                <img
                  :class="$style.phdogFillIcon"
                  alt=""
                  src="/phdogfill.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div :class="$style.frameGroup">
          <p>Propriétaire: {{  animal.user.firstName + ' ' + animal.user.lastName }} </p>
          <p>Moyen de contact: {{  animal.user.email }}</p>
          <p>Les prochaines rendez-vous : </p>
          <div v-for="rdv in animal.rdvs">
            {{  rdv.subject + ' le ' + new Date(rdv.date_start).toLocaleDateString('fr')}}
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    props: {
      animal: {}
    },
    name: "Frame1",
    methods: {
      onVectorIconClick() {
        this.$router.push({
          name: "ModifyAnimal"
        });
      },
    },
  });
</script>
<style module>
  .groupChild {
    position: absolute;
    top: 20px;
    left: 0px;
    border-radius: 50%;
    background-color: var(--bleu-middle);
    width: 33px;
    height: 33px;
    z-index: 1;
  }
  .vectorIcon {
    position: absolute;
    top: 28px;
    left: 8px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    z-index: 2;
  }
  .group {
    height: 73px;
    width: 33px;
    position: absolute;
    margin: 0 !important;
    top: -16px;
    right: 0px;
  }
  .groupItem {
    width: 65px;
    height: 65px;
    position: relative;
    object-fit: cover;
    z-index: 1;
  }
  .group1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
  }
  .ralph {
    margin: 0;
    height: 41px;
    position: relative;
    font-size: inherit;
    font-weight: 600;
    font-family: inherit;
    display: inline-block;
    z-index: 1;
  }
  .carlin {
    margin: 0 !important;
    position: absolute;
    bottom: -20px;
    left: 0px;
    font-size: var(--font-size-xl);
    font-weight: 600;
    font-family: inherit;
    z-index: 1;
  }
  .ralphLabel {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .mai2019 {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .vectorIcon1 {
    position: absolute;
    top: 18px;
    left: 15px;
    width: 14px;
    height: 14.9px;
    z-index: 1;
  }
  .phdogFillIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 17px;
    height: 17px;
    overflow: hidden;
    z-index: 1;
  }
  .dogFill {
    height: 33px;
    width: 29px;
    position: absolute;
    margin: 0 !important;
    top: -19px;
    right: -18px;
  }
  .vectorLine {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    font-size: var(--font-size-smi);
  }
  .animalProfile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl);
  }
  .groupGroup {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xs);
  }
  .identification {
    font-weight: 600;
  }
  .nld82avb04h {
    font-size: var(--font-size-3xs);
    font-weight: 500;
  }
  .identification82nld82avb04hContainer {
    position: relative;
    z-index: 1;
  }
  .oprations {
    font-weight: 600;
  }
  .strilis {
    font-size: var(--font-size-3xs);
    font-weight: 500;
  }
  .oprationsStrilisContainer {
    position: relative;
    z-index: 1;
  }
  .identification82nld82avb04hParent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-11xs);
    font-size: var(--font-size-2xs);
  }
  .frameGroup {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .groupParent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }
  .traitementsEnCours {
    font-weight: 600;
  }
  .phosphalugelZylkne {
    font-size: var(--font-size-3xs);
    font-weight: 500;
  }
  .traitementsEnCoursContainer {
    position: relative;
    z-index: 1;
    font-size: var(--font-size-2xs);
  }
  .frameParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-11xs);
    text-align: left;
    font-size: var(--font-size-13xl);
    color: var(--bleu-middle);
    font-family: var(--font-montserrat);
  }
</style>
