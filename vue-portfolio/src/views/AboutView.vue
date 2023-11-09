<script>
import WordSphere from "wordsphere";

export default {
  components: {
    WordSphere,
  },
};
</script>
<template>
  <section class="">
    <section class="m-0">
      <h1 class="font-bebas text-md text-center xl:text-lx xl:leading-[0.9em]">
        a *solution* to the
        <s>problems</s>
        you face
      </h1>
    </section>
    <section class="xl:flex xl:flex-row">
      <div
        class="xl:basis-3/4 relative xl:h-[54rem] right-0 overflow-hidden floating-sphere-img"
      >
        <div class="box absolute right-64 z-40">
          <WordSphere
            id="id_sphere_object"
            ref="refSphereObject"
            :items_list="[
              'JAVASCRIPT',
              'VUE JS',
              'REACT JS',
              'FRONT-END',
              'BACK-END',
              'DATABASE',
              'SQL',
              'HTML',
              'CSS',
              'WEBSITE',
              'APPLICATIONS',
            ]"
            :radius="10"
            :text_color="'#D98438'"
            :font_size_max="2"
          />
        </div>
        <img
          class="xl:w-3/6 absolute right-0 z-0"
          src="../../public/images/me-projects.png"
        />
      </div>
      <div class="xl:basis-1/4 xl:grid xl:items-end">
        <p class="font-incon text-sm">
          The skillsets to handle and solve problems using different tools. I
          pride myself on having the expertise to be the solution to all your
          technical issues.
        </p>
      </div>
    </section>
    <article
      class="font-robo text-sx xl:text-mx xl:my-32 xl:ml-[30%] xl:leading-normal"
    >
      The goal is to prove a system business of all sizes can utilize to
      improve, solve or maintain their businesses. With 3 years of experience
      working with a variety of businesses, showing a proven track record of
      ensuring the work rendered is professional regardless of your needs
    </article>
    <article class="">
      <div class="grid gap-8 xl:flex xl:flex-row xl:gap-32">
        <div class="basis-3/4 xl:flex justify-end">
          <h2 class="font-bebas text-lx xl:text-xl">3</h2>
          <p class="font-incon xl:p-12">
            Years servicing small
            <br />
            business and non-profits
          </p>
        </div>
        <div class="basis-1/4 xl:flex xl:flex-col xl:justify-center">
          <h2 class="font-bebas text-lx">8</h2>
          <p class="font-incon">Successful projects</p>
        </div>
      </div>
      <div class="grid gap-8 my-32 xl:grid xl:grid-cols-2">
        <div>
          <h2 class="font-bebas text-lx">1k+</h2>
          <p class="">
            Consultation hours
            <br />
            rendered to customers
          </p>
        </div>
        <div>
          <h2 class="font-bebas text-lx">7+</h2>
          <p class="">Clients served/servicing</p>
        </div>
      </div>
      <div class="xl:w-4/12 xl:mx-auto xl:my-0">
        <h2 class="font-bebas text-lx xl:text-xl">89%</h2>
        <p class="font-incon">
          Clients occurred by
          <br />
          referral or from word of
          <br />
          mouth by pervious client
        </p>
      </div>
    </article>
  </section>
</template>
<style scoped>
.floating-sphere-img {
  display: grid;
}
.floating-sphere-img div {
  grid-area: 1 / 1 / 2 / 2;
}
.floating-sphere-img img {
  grid-area: 1 / 1 / 2 / 2;
}
</style>
