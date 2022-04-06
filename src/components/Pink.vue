<template>
  <section class="d1:grid ex:grid-cols-2">
    <picture>
      <source
        media="(min-width:750px)"
        srcset="../assets/images/backgrounds/pinkglass-desktop.jpg"
      />
      <source
        media="(min-width:310px)"
        srcset="../assets/images/backgrounds/pinkglass-mobile.jpg"
      />
      <img src="../assets/images/backgrounds/pinkglass-desktop.jpg" />
    </picture>

    <!-- Shown on widths of 500px and above -->
    <div class="hidden d1:grid px-28 place-self-center place-items-start">
      <h2 class="text-3xl mb-8 text-veryDarkDesatBlue font-fraunces font-black">
        Stand out to the right audience
      </h2>
      <p class="font-barlow mb-8 font-semibold text-darkGrayishBlue">
        Using a collaborative formula of designers, researchers, photographers,
        videographers, and copywriters, we'll build and extend your brand in
        digital places.
      </p>
      <div class="grid place-items-center group">
        <span class="font-fraunces font-bold text-base text-veryDarkDesatBlue"
          ><a href="">LEARN MORE</a></span
        >
        <span
          class="relative bottom-2.5 -z-10 block group-hover:opacity-80 transition-all h-2 opacity-30 rounded-full bg-P-softRed w-[8rem]"
        ></span>
      </div>
    </div>

    <!-- Shown on widths of below 500px -->
    <div class="d1:hidden grid place-items-center px-6 py-12">
      <h2
        class="text-3xl text-veryDarkDesatBlue text-center font-fraunces font-black mb-6"
      >
        Stand out to the right audience
      </h2>
      <p
        class="text-center font-barlow font-semibold text-darkGrayishBlue mb-8"
      >
        Using a collaborative formula of designers, researchers, photographers,
        videographers, and copywriters, we'll build and extend your brand in
        digital places
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
  </section>
</template>

<script>
export default {
  name: "Pink",
};
</script>
