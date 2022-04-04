<template>
  <section class="relative">
    <picture>
      <source
        media="(min-width:750px)"
        srcset="../assets/images/backgrounds/cherry-desktop.jpg"
      />
      <source
        media="(min-width:310px)"
        srcset="../assets/images/backgrounds/cherry-mobile.jpg"
      />
      <img src="../assets/images/backgrounds/cherry-desktop.jpg" />
    </picture>
    <div class="px-4 absolute text-base z-10 bottom-16 grid place-items-center">
      <h2 class="mb-8 font-fraunces font-black text-3xl text-P-darkDesatCyan">
        Graphic Design
      </h2>
      <p
        class="text-center font-barlow font-semibold text-P-darkDesatCyan d3:px-36"
      >
        Great design makes you memorable. We deliver artwork that underscores
        your brand message and captures potential clients' attention.
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: "Cherry",
};
</script>
