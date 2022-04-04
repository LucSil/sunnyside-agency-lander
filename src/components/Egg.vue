<template>
  <section class="ex:grid grid-cols-2">
    <!-- Shown on widths of 500px and above -->
    <div class="hidden d1:grid px-28 place-self-center place-items-start">
      <h2 class="text-3xl mb-8 text-veryDarkDesatBlue font-fraunces font-black">
        Transform your brand
      </h2>
      <p class="font-barlow mb-8 font-semibold text-darkGrayishBlue">
        We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you.
      </p>
      <div class="grid place-items-center">
        <span class="font-fraunces font-bold text-base text-veryDarkDesatBlue"
          ><a href="">LEARN MORE</a></span
        >
        <span
          class="relative bottom-2.5 -z-10 block h-2 opacity-30 rounded-full bg-P-softRed w-[8rem]"
        ></span>
      </div>
    </div>

    <picture>
      <source
        media="(min-width:310px)"
        srcset="../assets/images/backgrounds/egg-mobile.jpg"
      />
      <source
        media="(min-width:750px)"
        srcset="../assets/images/backgrounds/egg-mobile.jpg"
      />
      <img src="../assets/images/backgrounds/egg-desktop.jpg" />
    </picture>

    <!-- Shown on widths below 500px -->
    <div class="grid place-items-center px-6 py-12 d1:hidden">
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
        class="relative bottom-2.5 -z-10 block h-2 opacity-30 rounded-full bg-P-Yellow w-[8rem]"
      ></span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Egg",
};
</script>
