<template>
  <Header />
  <Egg />
  <Pink />
  <section class="ex:grid ex:grid-cols-2">
    <Cherry />
    <Orange />
  </section>
  <Testimonial />
  <Images />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Egg from "@/components/Egg.vue";
import Pink from "@/components/Pink.vue";
import Cherry from "@/components/Cherry.vue";
import Orange from "@/components/Orange.vue";
import Testimonial from "@/components/Testimonial.vue";
import Images from "@/components/Images.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Egg,
    Pink,
    Cherry,
    Orange,
    Testimonial,
    Images,
    Footer,
  },
};
</script>
