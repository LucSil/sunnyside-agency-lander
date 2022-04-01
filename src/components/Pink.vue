<template>
  <section>
    <picture>
      <source
        media="(min-width:310px)"
        srcset="../assets/images/backgrounds/pinkglass-mobile.jpg"
      />
      <source
        media="(min-width:750px)"
        srcset="../assets/images/backgrounds/pinkglass-desktop.jpg"
      />
      <img
        src="../assets/images/backgrounds/pinkglass-desktop.jpg"
        style="width: auto"
      />
    </picture>

    <div class="grid place-items-center px-6 py-12">
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
      <span class="font-fraunces font-bold text-base text-veryDarkDesatBlue"
        ><a href="">LEARN MORE</a></span
      >
      <span
        class="relative bottom-2.5 -z-10 block h-2 opacity-30 rounded-full bg-P-softRed w-[40%]"
      ></span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Pink",
};
</script>
