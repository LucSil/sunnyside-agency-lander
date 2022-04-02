<template>
  <Header />
  <Egg />
  <Pink />
  <Cherry />
</template>

<script>
import Header from "@/components/Header.vue";
import Egg from "@/components/Egg.vue";
import Pink from "@/components/Pink.vue";
import Cherry from "@/components/Cherry.vue";

export default {
  name: "App",
  components: { Header, Egg, Pink, Cherry },
};
</script>
