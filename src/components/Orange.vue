<template>
  <section class="relative">
    <picture>
      <source
        media="(min-width:750px)"
        srcset="../assets/images/backgrounds/orangefruit-desktop.jpg"
      />
      <source
        media="(min-width:310px)"
        srcset="../assets/images/backgrounds/orangefruit-mobile.jpg"
      />
      <img src="../assets/images/backgrounds/orangefruit-desktop.jpg" />
    </picture>
    <div class="px-4 absolute text-base z-10 bottom-16 grid place-items-center">
      <h2 class="mb-8 font-fraunces font-black text-3xl text-P-darkBlue">
        Photography
      </h2>
      <p class="text-center font-barlow font-semibold text-P-darkBlue d3:px-36">
        Increase your credibility by getting the most stunning, high-quality
        photos that improve your business image.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Orange",
};
</script>
