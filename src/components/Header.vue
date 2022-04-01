<template>
  <header class="relative">
    <nav
      class="px-6 absolute z-30 w-full mt-8 grid place-items-center transition-all"
    >
      <div class="flex justify-between items-center w-full mb-9">
        <div>
          <img src="../assets/images/logo.svg" />
        </div>
        <button v-if="!clicked" @click="toggleMenu">
          <img src="../assets/images/icon-hamburger.svg" />
        </button>
        <button v-if="clicked" @click="toggleMenu">
          <img src="../assets/images/icon-close-menu.svg" />
        </button>
      </div>

      <ul class="bg-white w-full rounded-lg transition" v-if="menu">
        <li>About</li>
        <li class="border-y-[1px] border-neutral-300">Discover</li>
        <li>Get Started</li>
      </ul>
    </nav>

    <picture>
      <source
        srcset="../assets/images/image-hero-mobile.jpg"
        media="(min-width=350px)"
      />
      <source
        srcset="../assets/images/image-hero-desktop.jpg"
        media="(min-width=768px)"
      />
      <img srcset="../assets/images/image-hero-mobile.jpg" />
    </picture>

    <div
      v-if="modal"
      @click="hideModal"
      class="absolute w-screen h-screen z-20 transition-all opacity-50 bg-N-Black"
    ></div>
  </header>
</template>
