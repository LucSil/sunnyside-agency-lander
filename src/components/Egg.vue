<template>
  <section>
    <picture>
      <source
        media="(min-width:310px)"
        srcset="../assets/images/backgrounds/egg-mobile.jpg"
      />
      <source
        media="(min-width:750px)"
        srcset="../assets/images/backgrounds/egg-mobile.jpg"
      />
      <img
        src="../assets/images/backgrounds/egg-desktop.jpg"
        style="width: auto"
      />
    </picture>

    <div class="grid place-items-center px-6 py-12">
      <h2
        class="text-3xl text-veryDarkDesatBlue text-center font-fraunces font-black mb-6"
      >
        Transform your brand
      </h2>
      <p
        class="text-center font-barlow font-semibold text-darkGrayishBlue mb-8"
      >
        We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you.
      </p>
      <span class="font-fraunces font-bold text-base text-veryDarkDesatBlue"
        ><a href="">LEARN MORE</a></span
      >
      <span
        class="relative bottom-2.5 -z-10 block h-2 opacity-30 rounded-full bg-P-Yellow w-[40%]"
      ></span>
    </div>
  </section>
</template>
