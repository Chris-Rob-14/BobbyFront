<template>
  <div :class="$style.mb">
    <main :class="$style.mbInner">
      <section :class="$style.vectorParent">
        <div :class="$style.vector">
          <div :class="$style.text">
            <img
              :class="$style.frameIcon"
              alt=""
              src="/vector3.svg"
            />
            <div :class="$style.mesAnimaux" @click="onMesAnimauxTextClick">
              Mes animaux
            </div>
          </div>
        </div>
        <div :class="$style.frameParent">
          <div :class="$style.vectorGroup">
            <div :class="$style.vector1" />
            <div :class="$style.text1">
              <div :class="$style.text2">
                <img
                  :class="$style.textIcon"
                  alt=""
                  src="/vector-15.svg"
                />
                <div :class="$style.monCalendrier" @click="onMesAnimauxTextClick">Mon calendrier</div>
              </div>
            </div>
            <div :class="$style.vector2" />
            <div :class="$style.calendarFrame">
              <img
                :class="$style.blogFrameIcon"
                alt=""
                src="/vector-23.svg"
                @click="onBlogFrameIconClick"
              />
              <div :class="$style.blog" @click="onBlogTextClick">Blog</div>
            </div>
            <div :class="$style.threeLineFrame">
              <div :class="$style.annuaireFrame">
                <div :class="$style.lineFrame" />
                <div :class="$style.monCalendrierFrame">
                  <div :class="$style.monCompteFrameParent">
                    <img
                      :class="$style.monCompteFrame"
                      alt=""
                      src="/vector-31.svg"
                    />
                    <div :class="$style.annuaire">Annuaire</div>
                  </div>
                </div>
                <div :class="$style.lineFrame1" />
              </div>
              <div :class="$style.followBobbyText">
                <div :class="$style.icroundaccountcircleFrame">
                  <img
                    :class="$style.icroundAccountCircleIcon"
                    alt=""
                    src="/icroundaccountcircle.svg"
                  />
                  <div :class="$style.monCompte" @click="onMonCompteTextClick">
                    Mon compte
                  </div>
                </div>
              </div>
            </div>
            <div :class="$style.vector3" />
          </div>
          <div :class="$style.facebookBrandLogo">
            <div :class="$style.socialMediaFollowText">
              <div :class="$style.suivezBobbySurContainer">
                <p :class="$style.suivezBobbySur">Suivez Bobby sur les</p>
                <p :class="$style.rseauxSociaux">réseaux sociaux !</p>
              </div>
              <div :class="$style.brandicoFacebookrectVectorWrapper">
                <div :class="$style.brandicoFacebookrectVector">
                  <img
                    :class="$style.suivezBobbyText"
                    alt=""
                    src="/vector-42.svg"
                  />
                  <img
                    :class="$style.brandicofacebookRectIcon"
                    alt=""
                    src="/brandicofacebookrect.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Component from "../components/Component.vue";

  export default defineComponent({
    name: "MB",
    components: { Component },
    methods: {
      onMesAnimauxTextClick() {
        this.$router.push("/listeanimaux");
      },
      onBlogFrameIconClick() {
        this.$router.push("/blog");
      },
      onBlogTextClick() {
        this.$router.push("/blog");
      },
      onMonCompteTextClick() {
        this.$router.push("/mon-compte");
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
    gap: var(--gap-2xs);
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
    top: 41.67%;
    right: -11.11%;
    bottom: 41.67%;
    left: 0%;
    border-top: 4px solid var(--bleu-nuit);
    box-sizing: border-box;
  }
  .menuBurger1 {
    height: 24px;
    width: 36px;
    position: relative;
    cursor: pointer;
  }
  .menuBurger {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
  }
  .frameIcon {
    height: 25px;
    width: 28px;
    position: relative;
    min-height: 25px;
  }
  .mesAnimaux {
    position: relative;
    font-weight: 600;
    cursor: pointer;
  }
  .text {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-lg);
  }
  .vector {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-6xs);
  }
  .vector1 {
    align-self: stretch;
    height: 0.5px;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .textIcon {
    height: 28px;
    width: 25px;
    position: relative;
  }
  .monCalendrier {
    position: relative;
    font-weight: 600;
  }
  .text2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-xl);
  }
  .text1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xs);
  }
  .vector2 {
    align-self: stretch;
    height: 0.5px;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .blogFrameIcon {
    align-self: stretch;
    width: 35px;
    position: relative;
    max-height: 100%;
    min-height: 25px;
    cursor: pointer;
  }
  .blog {
    position: relative;
    font-weight: 600;
    cursor: pointer;
  }
  .calendarFrame {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-lg);
  }
  .lineFrame {
    align-self: stretch;
    height: 0.5px;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .monCompteFrame {
    align-self: stretch;
    width: 30px;
    position: relative;
    max-height: 100%;
    min-height: 24px;
  }
  .annuaire {
    position: relative;
    font-weight: 600;
  }
  .monCompteFrameParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-lg);
  }
  .monCalendrierFrame {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-9xs);
  }
  .lineFrame1 {
    align-self: stretch;
    height: 0.5px;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .annuaireFrame {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-22xl);
  }
  .icroundAccountCircleIcon {
    height: 30px;
    width: 30px;
    position: relative;
  }
  .monCompte {
    position: relative;
    font-weight: 600;
    cursor: pointer;
  }
  .icroundaccountcircleFrame {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lg);
  }
  .followBobbyText {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-9xs);
  }
  .threeLineFrame {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 38px;
  }
  .vector3 {
    align-self: stretch;
    height: 0.5px;
    position: relative;
    border-top: 0.5px solid var(--color-darkgray-100);
    box-sizing: border-box;
  }
  .vectorGroup {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 39px;
  }
  .suivezBobbySur {
    margin: 0;
  }
  .rseauxSociaux {
    margin: 0;
  }
  .suivezBobbySurContainer {
    align-self: stretch;
    flex: 1;
    position: relative;
    font-weight: 600;
  }
  .suivezBobbyText {
    height: 51px;
    width: 51px;
    position: relative;
    min-height: 51px;
  }
  .brandicofacebookRectIcon {
    height: 51px;
    width: 51px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    min-height: 51px;
  }
  .brandicoFacebookrectVector {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  .brandicoFacebookrectVectorWrapper {
    width: 172px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-9xs) 0px 0px;
    box-sizing: border-box;
  }
  .socialMediaFollowText {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-6xl);
  }
  .facebookBrandLogo {
    align-self: stretch;
    height: 124px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-lg) 0px var(--padding-5xl);
    box-sizing: border-box;
    text-align: center;
    color: var(--orange);
  }
  .frameParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 43px;
  }
  .vectorParent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-21xl);
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--bleu-nuit);
    font-family: var(--font-montserrat);
  }
  .mbInner {
    margin-top: 5rem;
    width: 358px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-7xl) 0px var(--padding-xl);
    box-sizing: border-box;
  }
  .mb {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px 54px;
    box-sizing: border-box;
    gap: 49px;
  }
</style>
