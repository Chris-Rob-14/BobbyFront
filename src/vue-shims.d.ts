declare module "HeaderLogo.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }

  declare module "BurgerMenu.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }

  declare module "*.png" {
    const value: any;
    export default value;
  }