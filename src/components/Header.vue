<template>
  <header class="relative">
    <nav
      class="px-6 absolute z-10 w-full mt-8 grid place-items-center transition-all"
    >
      <div class="flex justify-between items-center w-full mb-10">
        <div>
          <img src="../assets/images/svg/logo.svg" />
        </div>
        <button @click="toggleMenu">
          <img src="../assets/images/svg/icon-hamburger.svg" />
        </button>
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

    <picture>
      <source
        media="(min-width:350px)"
        srcset="../assets/images/backgrounds/header-mobile.jpg"
      />
      <source
        media="(min-width:768px)"
        srcset="../assets/images/backgrounds/header-desktop.jpg"
      />
      <img
        src="../assets/images/backgrounds/header-desktop.jpg"
        style="width: auto"
      />
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
