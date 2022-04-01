<template>
  <header class="relative">
    <nav
      class="px-6 absolute z-30 w-full mt-8 grid place-items-center transition-all"
    >
      <div class="flex justify-between items-center w-full mb-9">
        <div>
          <img src="../assets/images/svg/logo.svg" />
        </div>
        <button v-if="!clicked" @click="toggleMenu">
          <img src="../assets/images/svg/icon-hamburger.svg" />
        </button>
        <!-- <button v-if="clicked" @click="toggleMenu">
          <img src="../assets/images/icon-close-menu.svg" />
        </button> -->
      </div>

      <ul class="bg-white w-full rounded-lg transition" v-if="menu">
        <li>About</li>
        <li class="border-y-[1px] border-neutral-300">Discover</li>
        <li>Get Started</li>
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
