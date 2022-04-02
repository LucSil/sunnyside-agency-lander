<template>
  <Header />
  <Egg />
  <Pink />
  <Cherry />
  <Orange />
  <Testimonial />
</template>

<script>
import Header from "@/components/Header.vue";
import Egg from "@/components/Egg.vue";
import Pink from "@/components/Pink.vue";
import Cherry from "@/components/Cherry.vue";
import Orange from "@/components/Orange.vue";
import Testimonial from "@/components/Testimonial.vue";

export default {
  name: "App",
  components: { Header, Egg, Pink, Cherry, Orange, Testimonial },
};
</script>
