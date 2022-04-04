<template>
  <section class="grid place-items-center py-16 pb-20 bg-custom">
    <div class="w-[50%] mb-10">
      <img class="w-full" src="../assets/images/svg/footer-logo.svg" />
    </div>
    <ul
      id="linkUl"
      class="font-barlow font-semibold w-full flex justify-evenly mb-14"
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
    <div class="flex w-[50%] justify-evenly">
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
