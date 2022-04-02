<template>
  <Header />
  <Egg />
  <Pink />
  <Cherry />
  <Orange />
</template>

<script>
import Header from "@/components/Header.vue";
import Egg from "@/components/Egg.vue";
import Pink from "@/components/Pink.vue";
import Cherry from "@/components/Cherry.vue";
import Orange from "@/components/Orange.vue";

export default {
  name: "App",
  components: { Header, Egg, Pink, Cherry, Orange },
};
</script>
