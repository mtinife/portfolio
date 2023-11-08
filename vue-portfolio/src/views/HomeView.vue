<script setup>
import MyProcess from "../components/my-process.vue";
import AccordionPanel from "@/components/AccordionPanel.vue";
</script>
<template>
  <section class="">
    <section class="xl:flex xl:flex-row">
      <h1
        class="font-bebas text-ra-gold md:m-0 text-md md:text-base xl:basis-4/6"
      >
        I <span class="font-vibes">Design</span> &
        <br />
        { Develop } Software Applications.
      </h1>
      <div class="xl:basis-2/6">
        <div class="relative">
          <span class="home-quotation">
            <svg
              fill="#3E0709"
              width="100px"
              height="100px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"
              />
            </svg>
          </span>
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
          <p class="font-robo font-thin py-16 leading-6 text-xs md:text-sx">
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
            What I offer
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
      <AccordionPanel
        aria-title="incidents"
        title="What is the best way to get involved?"
        count="01"
        class="font-robo border-b text-sm md:text-sx"
      >
      </AccordionPanel>
      <AccordionPanel class="font-robo border-b text-sm md:text-sx">
        <span>/01</span>
        <span>What to bring to being the process?</span>
        <span>
          <i class="ri-arrow-right-down-line"></i>
        </span>
      </AccordionPanel>
      <AccordionPanel class="font-robo border-b text-sm md:text-sx">
        <span>/01</span>
        <span>What to bring to being the process?</span>
        <span>
          <i class="ri-arrow-right-down-line"></i>
        </span>
      </AccordionPanel>
      <AccordionPanel class="font-robo border-b text-sm md:text-sx">
        <span>/01</span>
        <span>What to bring to being the process?</span>
        <span>
          <i class="ri-arrow-right-down-line"></i>
        </span>
      </AccordionPanel>
    </ul>
  </section>
</template>
<style src="../assets/tailwind.css"></style>
