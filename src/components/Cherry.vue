<template>
  <section>
    <picture>
      <source
        media="(min-width:310px )"
        srcset="../assets/images/backgrounds/cherry-mobile.jpg"
      />
      <source
        media="(min-width:750 )"
        srcset="../assets/images/backgrounds/cherry-desktop.jpg"
      />
      <img src="../assets/images/backgrounds/cherry-desktop.jpg" />
    </picture>
    <div>
      <h2>Graphic Design</h2>
      <p>
        Great design makes you memorable. We deliver artwork that underscores
        your brand message and captures potential clients' attention.
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: "Cherry",
};
</script>
