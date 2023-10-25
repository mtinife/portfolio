<script setup>
import MyProcess from "../components/my-process.vue";
</script>
<template>
  <section class="">
    <section class="p-10 xl:p-16">
      <h1 class="font-bebas text-md text-center xl:text-lx">
        how i <u>work</u> so<br />
        <s>you don't have to</s>
      </h1>
    </section>
    <section class="grid gap-10 xl:gap-0">
      <div class="grid gap-10 p-8 rounded-md border xl:p-20">
        <span class="font-robo font-bold uppercase md:text-sx">
          What I offer
        </span>
        <p class="font-robo font-light md:text-md md:leading-normal">
          The goal is to prove a system business of all sizes can utilize to
          improve, solve or maintain their businesses. With 3 years of
          experience working with a variety of businesses, showing a proven
          track record of ensuring the work rendered is professional regardless
          of your needs
        </p>
      </div>
      <div class="grid gap-10 text-center xl:grid-cols-4 xl:gap-0">
        <div class="grid gap-32 md:gap-60 p-8 rounded-md border">
          <h6 class="font-robo text-[2.25em] font-medium">Discovery</h6>
          <p class="font-incon text-xs md:text-sx">
            Getting to know you and you business needs
          </p>
        </div>
        <div class="grid gap-32 md:gap-60 p-8 rounded-md border">
          <h6 class="font-robo text-[2.25em] font-medium">Break Down</h6>
          <p class="font-incon text-xs md:text-sx">
            Break down you issues into smaller blocks
          </p>
        </div>
        <div class="grid gap-32 md:gap-60 p-8 rounded-md border">
          <h6 class="font-robo text-[2.25em] font-medium">Solution</h6>
          <p class="font-incon text-xs md:text-sx">
            Generate actionable solutions and implement them
          </p>
        </div>
        <div class="grid gap-32 md:gap-60 p-8 rounded-md border">
          <h6 class="font-robo text-[2.25em] font-medium">Recovery</h6>
          <p class="font-incon text-xs md:text-sx">
            Test, refactor and schedule future maintenance points
          </p>
        </div>
      </div>
    </section>
  </section>
  <MyProcess />
</template>
