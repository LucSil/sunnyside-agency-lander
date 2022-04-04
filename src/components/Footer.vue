<template>
  <section class="grid place-items-center py-16 pb-20 bg-custom">
    <div class="w-[200px] mb-10">
      <img class="w-full" src="../assets/images/svg/footer-logo.svg" />
    </div>
    <ul
      id="linkUl"
      class="font-barlow font-semibold w-[350px] flex justify-between mb-14 px-4"
    >
      <li>
        <a href="">About</a>
      </li>
      <li>
        <a href="">Services</a>
      </li>
      <li>
        <a href="">Projects</a>
      </li>
    </ul>
    <div class="flex w-[200px] justify-evenly">
      <a href="">
        <img src="../assets/images/svg/icon-facebook.svg" />
      </a>
      <a href="">
        <img src="../assets/images/svg/icon-instagram.svg" />
      </a>
      <a href="">
        <img src="../assets/images/svg/icon-twitter.svg" />
      </a>
      <a href="">
        <img src="../assets/images/svg/icon-pinterest.svg" />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>
