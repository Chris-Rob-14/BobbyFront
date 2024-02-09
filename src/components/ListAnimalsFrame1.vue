<template>
  <section :class="$style.listAnimalsFrame">
   
    <div :class="$style.firstFrame">
      <div :class="$style.groupContainer">
        <img
          :class="$style.groupContainerChild"
          alt=""
          src="/group-165@2x.png"
        />
        <div :class="$style.lalaGroup">
          <div :class="$style.europeanFrame">
            <h2 :class="$style.lala">Lala</h2>
            <img
              :class="$style.europeanFrameChild"
              alt=""
              src="/group-152.svg"
              @click="onGroupIconClick"
            />
          </div>
          <div :class="$style.profileFrame">
            <div :class="$style.europen">Européen</div>
            <div :class="$style.vectorArrow">
              <img
                :class="$style.vectorIcon"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
          <div :class="$style.thirdGroup">
            <div :class="$style.juin2022">6 juin 2022</div>
            <img
              :class="$style.vectorIcon1"
              alt=""
              src="/vector-11.svg"
            />
          </div>
        </div>
      </div>
      <div :class="$style.rectangleParent" @click="onGroupContainer1Click">
        <div :class="$style.frameChild" />
        <div :class="$style.jeConsulteLe">Je consulte le profil de Lala</div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ListAnimalsFrame1",
    methods: {
      onGroupIconClick() {
        this.$router.push("/ajoutermodifieranimal");
      },
      onGroupContainer1Click() {
        this.$router.push("/profil-animal");
      },
    },
  });
</script>
<style module>
  .maskGroupIcon {
    position: absolute;
    top: 21px;
    left: 28px;
    width: 101px;
    height: 101px;
    object-fit: cover;
    display: none;
  }
  .groupContainerChild {
    height: 101px;
    width: 101px;
    position: relative;
    object-fit: cover;
  }
  .lala {
    margin: 0;
    height: 39px;
    position: relative;
    font-size: inherit;
    font-weight: 600;
    font-family: inherit;
    display: inline-block;
  }
  .europeanFrameChild {
    height: 33px;
    width: 33px;
    position: relative;
    cursor: pointer;
  }
  .europeanFrame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  .europen {
    position: relative;
    font-weight: 600;
  }
  .vectorIcon {
    width: 14px;
    height: 13px;
    position: relative;
  }
  .vectorArrow {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .profileFrame {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    gap: var(--gap-7xs);
    font-size: var(--font-size-xl);
  }
  .juin2022 {
    position: relative;
    font-weight: 600;
  }
  .vectorIcon1 {
    height: 14.9px;
    width: 14px;
    position: relative;
  }
  .thirdGroup {
    height: 17px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-7xs);
    font-size: var(--font-size-smi);
  }
  .lalaGroup {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .groupContainer {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-7xs);
    gap: var(--gap-lgi);
  }
  .frameChild {
    height: 34px;
    width: 290px;
    position: relative;
    border-radius: var(--br-mini);
    background-color: var(--bleu-middle);
    border: 3px solid var(--bleu-middle);
    box-sizing: border-box;
    display: none;
  }
  .jeConsulteLe {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .rectangleParent {
    width: 290px;
    border-radius: var(--br-mini);
    background-color: var(--bleu-middle);
    border: 3px solid var(--bleu-middle);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-4xs) var(--padding-4xs);
    cursor: pointer;
    font-size: var(--font-size-xs);
    color: var(--color-white);
  }
  .firstFrame {
    position: absolute;
    top: 0px;
    left: 0.5px;
    border-radius: var(--br-mini);
    background-color: var(--ivoire);
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-smi);
    box-sizing: border-box;
    gap: var(--gap-6xl);
    z-index: 1;
  }
  .listAnimalsFrame {
    width: 375px;
    height: 190px;
    position: relative;
    text-align: left;
    font-size: var(--font-size-13xl);
    color: var(--bleu-middle);
    font-family: var(--font-montserrat);
  }
</style>
