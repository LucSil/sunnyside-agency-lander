<template>
  <section class="ex:flex">
    <div class="flex">
      <picture class="w-full">
        <source
          media="(min-width:750px )"
          srcset="../assets/images/backgrounds/milkbottles-desktop.jpg"
        />
        <source
          media="(min-width:310px )"
          srcset="../assets/images/backgrounds/milkbottles-mobile.jpg"
        />
        <img src="../assets/images/backgrounds/milkbottles-desktop.jpg" />
      </picture>
      <picture class="w-full">
        <source
          media="(min-width:750px )"
          srcset="../assets/images/backgrounds/orange-desktop.jpg"
        />
        <source
          media="(min-width:310px )"
          srcset="../assets/images/backgrounds/orange-mobile.jpg"
        />
        <img src="../assets/images/backgrounds/orange-desktop.jpg" />
      </picture>
    </div>
    <div class="flex">
      <picture class="w-full">
        <source
          media="(min-width:750px )"
          srcset="../assets/images/backgrounds/cone-desktop.jpg"
        />
        <source
          media="(min-width:310px )"
          srcset="../assets/images/backgrounds/cone-mobile.jpg"
        />
        <img src="../assets/images/backgrounds/cone-desktop.jpg" />
      </picture>
      <picture class="w-full">
        <source
          media="(min-width:750px )"
          srcset="../assets/images/backgrounds/sugarcubes-desktop.jpg"
        />
        <source
          media="(min-width:310px )"
          srcset="../assets/images/backgrounds/sugarcubes-mobile.jpg"
        />
        <img src="../assets/images/backgrounds/sugarcubes-desktop.jpg" />
      </picture>
    </div>
  </section>
</template>

<script>
export default {
  name: "Images",
};
</script>
