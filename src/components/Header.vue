<template>
  <header class="relative grid">
    <nav
      class="px-6 d3:px-8 absolute z-20 w-full mt-8 grid place-items-center transition-all"
    >
      <div
        class="flex justify-between items-center w-full mb-10 d3:grid d3:grid-cols-6"
      >
        <div>
          <img src="../assets/images/svg/logo.svg" />
        </div>
        <button @click="toggleMenu" class="d3:hidden">
          <img src="../assets/images/svg/icon-hamburger.svg" />
        </button>
        <ul
          class="justify-between w-full items-center hidden d3:flex relative top-4 col-start-5 col-end-7"
        >
          <li class="navLi">About</li>
          <li class="navLi">Services</li>
          <li class="navLi">Projects</li>
          <li>
            <button
              class="rounded-full text-sm px-6 py-4 bg-N-White text-veryDarkDesatBlue font-fraunces"
            >
              CONTACT
            </button>
          </li>
        </ul>
      </div>

      <ul class="bg-N-White w-full grid place-items-center py-10" v-if="menu">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <button
          class="rounded-full bg-P-Yellow px-8 py-4 font-fraunces font-bold text-veryDarkDesatBlue"
        >
          CONTACT
        </button>
      </ul>
    </nav>

    <div class="absolute z-10 place-self-center mx-6">
      <h1
        class="font-fraunces font-black text-[38px] d1:text-[45px] leading-tight text-N-White text-center tracking-[0.2em]"
      >
        WE ARE CREATIVES
      </h1>
      <div class="w-full grid place-items-center mt-16 m4:mt-8">
        <img src="../assets/images/svg/icon-arrow-down.svg" />
      </div>
    </div>
    <picture>
      <source
        media="(min-width:750px)"
        srcset="../assets/images/backgrounds/header-desktop.jpg"
      />
      <source
        media="(min-width:310px)"
        srcset="../assets/images/backgrounds/header-mobile.jpg"
      />
      <img src="../assets/images/backgrounds/header-mobile.jpg" />
    </picture>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    toggleMenu() {
      !this.menu ? (this.menu = true) : (this.menu = false);
    },
  },
};
</script>
