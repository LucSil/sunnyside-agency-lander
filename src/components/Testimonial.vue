<template>
  <section class="grid place-items-center py-14 d3:py-28">
    <h2
      class="font-fraunces text-base tracking-[0.3em] text-darkGrayishBlue opacity-60 mb-16"
    >
      CLIENT TESTIMONIALS
    </h2>
    <Testimony />
  </section>
</template>

<script>
import Testimony from "./added/Testimony.vue";

export default {
  name: "Testimonial",
  components: { Testimony },
};
</script>
