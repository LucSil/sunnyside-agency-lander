<template>
  <section>
    <div>
      <picture>
        <source
          media="(min-width:310px )"
          srcset="../assets/images/backgrounds/milkbottles-mobile.jpg"
        />
        <source
          media="(min-width:750px )"
          srcset="../assets/images/backgrounds/milkbottles-desktop.jpg"
        />
        <img src="../assets/images/backgrounds/milkbottles-desktop.jpg" />
      </picture>
      <picture>
        <source
          media="(min-width:310px )"
          srcset="../assets/images/backgrounds/orange-mobile.jpg"
        />
        <source
          media="(min-width:750px )"
          srcset="../assets/images/backgrounds/orange-desktop.jpg"
        />
        <img src="../assets/images/backgrounds/orange-desktop.jpg" />
      </picture>
    </div>
    <div>
      <picture>
        <source
          media="(min-width:310px )"
          srcset="../assets/images/backgrounds/cone-mobile.jpg"
        />
        <source
          media="(min-width:750px )"
          srcset="../assets/images/backgrounds/cone-desktop.jpg"
        />
        <img src="../assets/images/backgrounds/cone-desktop.jpg" />
      </picture>
      <picture>
        <source
          media="(min-width:310px )"
          srcset="../assets/images/backgrounds/sugarcubes-mobile.jpg"
        />
        <source
          media="(min-width:750px )"
          srcset="../assets/images/backgrounds/sugarcubes-desktop.jpg"
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
