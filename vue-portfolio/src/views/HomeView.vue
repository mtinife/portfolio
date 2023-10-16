<template>
  <section class="">
    <section class="xl:flex xl:flex-row">
      <h1 class="font-bebas text-ra-gold text-md md:text-base xl:basis-3/4">
        I <span class="font-vibes">Design</span> &
        <br />
        { Develop } Software Applications.
      </h1>
      <div class="xl:basis-1/4">
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
    <article class="xl:grid xl:grid-cols-2">
      <span class="text-sx font-robo font-medium uppercase">my story</span>
      <div class="grid items-start">
        <p class="font-incon text-sm md:text-mx">
          I am a Front-End Engineer with 3+ years of experience. My main focus
          is client centered, making sure my clients are taking care of in a
          wide range of areas.
        </p>
        <p class="font-robo font-thin text-xs md:text-sx">
          I found that clients needed more than just good software and
          applications; they need someone that understands their projects and
          can grow with their project.
        </p>
        <router-link
          to="/services"
          class="py-3 px-8 border border-ra-gold text-center"
        >
          Service
        </router-link>
      </div>
    </article>
    <section class="xl:flex xl:flew-row">
      <span
        class="xl:basis-1/4 font-robo font-medium uppercase text-sm md:text-sx"
      >
        services
        <br />
        & solutions
      </span>
      <ul role="list" class="xl:basis-3/4">
        <hr />
        <li class="grid items-start">
          <span class="font-robo text-sm md:text-sx">01</span>
          <h2 class="font-bebas text-mx md:text-lx">full scale development</h2>
          <router-link
            to="/services"
            class="py-3 px-8 border border-ra-gold text-center"
          >
            Read More
          </router-link>
        </li>
        <hr />
        <li class="grid items-start">
          <span class="font-robo text-sm md:text-sx">02</span>
          <h2 class="font-bebas text-mx md:text-lx">
            project design and markups
          </h2>
          <router-link
            to="/services"
            class="py-3 px-8 border border-ra-gold text-center"
          >
            Read More
          </router-link>
        </li>
        <hr />
        <li class="grid items-start">
          <span class="font-robo text-sm md:text-sx">03</span>
          <h2 class="font-bebas text-mx md:text-lx">project consultation</h2>
          <router-link
            to="/services"
            class="py-3 px-8 border border-ra-gold text-center"
          >
            Read More
          </router-link>
        </li>
        <hr />
      </ul>
    </section>
  </section>
  <section class="bg-ra-dark p-4 rounded-md md:p-12 sm:rounded-xl">
    <div class="">
      <div class="xl:flex xl:flex-row xl:gap-8">
        <div class="">
          <h3 class="font-robo uppercase text-sx md:text-mx">
            my
            <br />
            process
          </h3>
          <p class="xl:pr-12 font-robo text-sm md:text-sm">
            The goal is to getting an idea of what you're looking for; each
            project is different and offers different challenges and solutions.
            I have a 7 step process I take client through
          </p>
        </div>
        <div>
          <span class="font-robo text-sx md:text-mx">01</span>
          <hr />
          <h4 class="font-bebas text-mx md:text-lg">intro call</h4>
          <p class="font-robo text-xs md:text-sm">
            The first step in the process. A friendly call on what your needs
            and visions are
          </p>
        </div>
        <div>
          <span class="font-robo text-sx md:text-mx">02</span>
          <hr />
          <h4 class="font-bebas text-mx md:text-lg">discovery</h4>
          <p class="font-robo text-xs md:text-sm">
            We look for possible solutions to the problems your facing
          </p>
        </div>
        <div>
          <span class="font-robo text-sx md:text-mx">03</span>
          <hr />
          <h4 class="font-bebas text-mx md:text-lg">wireframe</h4>
          <p class="font-robo text-xs md:text-sm">
            Mocking up the solutions and how they will be implemented
          </p>
        </div>
      </div>
      <div class="xl:flex xl:flex-row xl:py-24 xl:gap-8">
        <div>
          <span class="font-robo text-sx md:text-mx">04</span>
          <hr />
          <h4 class="font-bebas text-mx md:text-lg">design</h4>
          <p class="font-robo text-xs md:text-sm">
            From the mock ups a final design draft is created and prep for
            development
          </p>
        </div>
        <div>
          <span class="font-robo text-sx md:text-mx">05</span>
          <hr />
          <h4 class="font-bebas text-mx md:text-lg">development</h4>
          <p class="font-robo text-xs md:text-sm">
            Setting up all the technical components and software needed for the
            project
          </p>
        </div>
        <div>
          <span class="font-robo text-sx md:text-mx">06</span>
          <hr />
          <h4 class="font-bebas text-mx md:text-lg">content upload</h4>
          <p class="font-robo text-xs md:text-sm">
            Ensuring all content and messaging is correct. Blogs, Press Policies
            and other content content are up to date
          </p>
        </div>
        <div>
          <span class="font-robo text-sx md:text-mx">07</span>
          <hr />
          <h4 class="font-bebas text-mx md:text-lg">launch & support</h4>
          <p class="font-robo text-xs md:text-sm">
            Launch the project with guides and documentation (text and visual)
            of the project. Setting up a maintenance process and a schedule for
            when it will be completed
          </p>
        </div>
      </div>
      <p class="font-robo text-xs md:text-sm">
        *Every project is special, my process can adapt to your projects
        regardless of where they are in the process.
      </p>
    </div>
  </section>
  <section class="">
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
