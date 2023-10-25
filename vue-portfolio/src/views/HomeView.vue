<script setup>
import MyProcess from "../components/my-process.vue";
</script>
<template>
  <section class="">
    <section class="xl:flex xl:flex-row">
      <h1 class="font-bebas text-ra-gold text-md md:text-base xl:basis-4/6">
        I <span class="font-vibes">Design</span> &
        <br />
        { Develop } Software Applications.
      </h1>
      <div class="xl:basis-2/6">
        <div class="relative">
          <span class="home-quotation">&#10078;</span>
          <p class="font-incon text-sm absolute top-0 z-0">
            The graveyard is the richest place on earth, because it is here that
            you will find all the hopes and dreams that were never
            fulfilled...the inventions that were never shared, the cures that
            were never discovered, all because someone was too afraid to take
            that first step, keep with the problem, or determined to carry out
            their dream.
            <br />
            - Les Brown
          </p>
        </div>
        <img alt="" src="../../public/images/emoji-me-home.png" />
      </div>
    </section>
    <article class="xl:grid xl:grid-cols-2 my-32">
      <span class="text-sx font-robo font-medium uppercase">my story</span>
      <div class="">
        <div>
          <p class="font-incon text-sm md:text-mx">
            I am a Front-End Engineer with 3+ years of experience. My main focus
            is client centered, making sure my clients are taking care of in a
            wide range of areas.
          </p>
          <p class="font-robo font-thin py-16 text-xs md:text-sx">
            I found that clients needed more than just good software and
            applications; they need someone that understands their projects and
            can grow with their project.
          </p>
        </div>
        <div class="flex justify-end">
          <router-link
            to="/services"
            class="py-3 px-8 border border-ra-gold text-center hover:bg-ra-dark hover:border-ra-dark"
          >
            Service
          </router-link>
        </div>
      </div>
    </article>
    <section class="xl:flex xl:flew-row my-32">
      <span
        class="xl:basis-1/4 font-robo font-medium uppercase text-sm md:text-sx"
      >
        services
        <br />
        & solutions
      </span>
      <ul role="list" class="xl:basis-3/4">
        <hr />
        <li class="grid items-start my-16 xl:my-32">
          <span class="font-robo text-sm md:text-sx">01</span>
          <h2 class="font-bebas text-mx md:text-lx">full scale development</h2>
          <div class="flex justify-end mt-8 xl:mt-16">
            <router-link
              to="/services"
              class="py-3 px-8 border border-ra-gold text-center hover:bg-ra-dark hover:border-ra-dark"
            >
              Read More
            </router-link>
          </div>
        </li>
        <hr />
        <li class="grid items-start my-16 xl:my-32">
          <span class="font-robo text-sm md:text-sx">02</span>
          <h2 class="font-bebas text-mx md:text-lx">
            project design and markups
          </h2>
          <div class="flex justify-end mt-8 xl:mt-16">
            <router-link
              to="/services"
              class="py-3 px-8 border border-ra-gold text-center hover:bg-ra-dark hover:border-ra-dark"
            >
              Read More
            </router-link>
          </div>
        </li>
        <hr />
        <li class="grid items-start my-16 xl:my-32">
          <span class="font-robo text-sm md:text-sx">03</span>
          <h2 class="font-bebas text-mx md:text-lx">project consultation</h2>
          <div class="flex justify-end mt-8 xl:mt-16">
            <router-link
              to="/services"
              class="py-3 px-8 border border-ra-gold text-center hover:bg-ra-dark hover:border-ra-dark"
            >
              Read More
            </router-link>
          </div>
        </li>
        <hr />
      </ul>
    </section>
  </section>
  <MyProcess />
  <section class="mt-32">
    <h2 class="font-bebas text-center text-lg md:text-xl">/*FAQ*/</h2>
    <ul role="list" class="">
      <li class="font-robo border-b text-sm md:text-sx">
        <span>/01</span>
        <span>What to bring to being the process?</span>
        <span>
          <i class="ri-arrow-right-down-line"></i>
        </span>
      </li>
      <li class="font-robo border-b text-sm md:text-sx">
        <span>/01</span>
        <span>What to bring to being the process?</span>
        <span>
          <i class="ri-arrow-right-down-line"></i>
        </span>
      </li>
      <li class="font-robo border-b text-sm md:text-sx">
        <span>/01</span>
        <span>What to bring to being the process?</span>
        <span>
          <i class="ri-arrow-right-down-line"></i>
        </span>
      </li>
      <li class="font-robo border-b text-sm md:text-sx">
        <span>/01</span>
        <span>What to bring to being the process?</span>
        <span>
          <i class="ri-arrow-right-down-line"></i>
        </span>
      </li>
    </ul>
  </section>
</template>
<style src="../assets/tailwind.css"></style>
