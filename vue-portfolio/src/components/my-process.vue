<script>
export default {
  name: "MyProcess",
};
</script>
<template>
  <section class="bg-ra-dark p-4 rounded-md md:p-12 sm:rounded-xl my-32">
    <div class="">
      <div class="xl:grid process-container">
        <div class="xl:flex-initial process">
          <h3 class="font-robo uppercase text-sx md:text-mx">
            my
            <br />
            process
          </h3>
          <p
            class="xl:pr-12 font-robo pt-8 text-sm md:text-sm md:w-2/3 leading-8"
          >
            The goal is to getting an idea of what you're looking for; each
            project is different and offers different challenges and solutions.
            I have a 7 step process I take client through
          </p>
        </div>
        <div class="xl:flex-initial intro">
          <span class="font-robo text-sx md:text-mx">01</span>
          <hr />
          <h4 class="font-bebas text-mx md:text-lg">intro call</h4>
          <p class="font-robo text-xs md:text-sm leading-normal">
            The first step in the process. A friendly call on what your needs
            and visions are
          </p>
        </div>
        <div class="discovery">
          <span class="font-robo text-sx md:text-mx">02</span>
          <hr />
          <h4 class="font-bebas text-mx md:text-lg">discovery</h4>
          <p class="font-robo text-xs md:text-sm leading-normal">
            We look for possible solutions to the problems your facing
          </p>
        </div>
        <div class="wireframe">
          <span class="font-robo text-sx md:text-mx">03</span>
          <hr />
          <h4 class="font-bebas text-mx md:text-lg">wireframe</h4>
          <p class="font-robo text-xs md:text-sm leading-normal">
            Mocking up the solutions and how they will be implemented
          </p>
        </div>
        <div class="design">
          <span class="font-robo text-sx md:text-mx">04</span>
          <hr />
          <h4 class="font-bebas text-mx md:text-lg">design</h4>
          <p class="font-robo text-xs md:text-sm leading-normal">
            From the mock ups a final design draft is created and prep for
            development
          </p>
        </div>
        <div class="development">
          <span class="font-robo text-sx md:text-mx">05</span>
          <hr />
          <h4 class="font-bebas text-mx md:text-lg">development</h4>
          <p class="font-robo text-xs md:text-sm leading-normal">
            Setting up all the technical components and software needed for the
            project
          </p>
        </div>
        <div class="content">
          <span class="font-robo text-sx md:text-mx">06</span>
          <hr />
          <h4 class="font-bebas text-mx md:text-lg">content</h4>
          <p class="font-robo text-xs md:text-sm leading-normal">
            Ensuring all content and messaging is correct. Blogs, Press Policies
            and other content content are up to date
          </p>
        </div>
        <div class="launch">
          <span class="font-robo text-sx md:text-mx">07</span>
          <hr />
          <h4 class="font-bebas text-mx md:text-lg">launch & support</h4>
          <p class="font-robo text-xs md:text-sm leading-normal">
            Launch the project with guides and documentation (text and visual)
            of the project. Setting up a maintenance process and a schedule for
            when it will be completed
          </p>
        </div>
        <div class="launch">
          <span class="font-robo text-sx md:text-mx">07</span>
          <hr />
          <h4 class="font-bebas text-mx md:text-lg">launch & support</h4>
          <p class="font-robo text-xs md:text-sm leading-normal">
            Launch the project with guides and documentation (text and visual)
            of the project. Setting up a maintenance process and a schedule for
            when it will be completed
          </p>
        </div>
      </div>
      <p class="font-robo text-xs md:text-sm my-8">
        *Every project is special, my process can adapt to your projects
        regardless of where they are in the process.
      </p>
    </div>
  </section>
</template>
<style>
.process-container {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat();
  gap: 0px 0px;
  grid-template-areas:
    "intro . . process process"
    ". discovery . process process"
    "content . wireframe . ."
    ". launch . design ."
    ". . maintenance . development";
}

.process {
  grid-area: process;
}

.intro {
  grid-area: intro;
}

.discovery {
  grid-area: discovery;
}

.wireframe {
  grid-area: wireframe;
}

.design {
  grid-area: design;
}

.development {
  grid-area: development;
}

.content {
  grid-area: content;
}

.launch {
  grid-area: launch;
}

.maintenance {
  grid-area: maintenance;
}
</style>
