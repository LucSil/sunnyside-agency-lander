<template>
  <Header />
  <Egg />
  <Pink />
</template>

<script>
import Header from "@/components/Header.vue";
import Egg from "@/components/Egg.vue";
import Pink from "@/components/Pink.vue";

export default {
  name: "App",
  components: { Header, Egg, Pink },
};
</script>
