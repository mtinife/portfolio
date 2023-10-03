<template>
  <section class="home">
    <section class="home__hero">
      <h1 class="heading-1">
        I Design &
        <br />
        { Develop } Software Applications.
      </h1>
      <div class="home__hero__me">
        <div>
          <span>&#10078;</span>
          <p>
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
    <article class="home__story spacing-default">
      <span class="heading-4">my story</span>
      <div class="home__story__content">
        <p class="body-incon-2">
          I am a Front-End Engineer with 3+ years of experience. My main focus
          is client centered, making sure my clients are taking care of in a
          wide range of areas.
        </p>
        <p class="body-robo-1 spacing-default-3 thin-para">
          I found that clients needed more than just good software and
          applications; they need someone that understands their projects and
          can grow with their project.
        </p>
      </div>
    </article>
    <section class="home__services spacing-default">
      <span class="heading-4">
        services
        <br />
        & solutions
      </span>
      <ul role="list" class="home__services__content">
        <hr />
        <li>
          <span class="service__count">01</span>
          <h2 class="heading-3">full scale development</h2>
          <router-link to="/services" class="button-1">Read More</router-link>
        </li>
        <hr />
        <li>
          <span class="service__count">02</span>
          <h2 class="heading-3">project design and markups</h2>
          <router-link to="/services" class="button-1">Read More</router-link>
        </li>
        <hr />
        <li>
          <span class="service__count">03</span>
          <h2 class="heading-3">project consultation</h2>
          <router-link to="/services" class="button-1">Read More</router-link>
        </li>
        <hr />
      </ul>
    </section>
  </section>
  <section class="home__process spacing-default">
    <div class="home__process__steps">
      <div class="home__process__steps-1">
        <div>
          <h3 class="heading-5">
            my
            <br />
            process
          </h3>
          <p class="body-robo-2 spacing-default-3 thin-para">
            The goal is to getting an idea of what you're looking for; each
            project is different and offers different challenges and solutions.
            I have a 7 step process I take client through
          </p>
        </div>
        <div>
          <span class="process__count">01</span>
          <hr />
          <h4 class="heading-babas-4 spacing-default-2">intro call</h4>
          <p class="body-robo-2 thin-para">
            The first step in the process. A friendly call on what your needs
            and visions are
          </p>
        </div>
        <div>
          <span class="process__count">02</span>
          <hr />
          <h4 class="heading-babas-4 spacing-default-2">discovery</h4>
          <p class="body-robo-2 thin-para">
            We look for possible solutions to the problems your facing
          </p>
        </div>
        <div>
          <span class="process__count">03</span>
          <hr />
          <h4 class="heading-babas-4 spacing-default-2">wireframe</h4>
          <p class="body-robo-2 thin-para">
            Mocking up the solutions and how they will be implemented
          </p>
        </div>
      </div>
      <div class="home__process__steps-2">
        <div>
          <span class="process__count">04</span>
          <hr />
          <h4 class="heading-babas-4 spacing-default-2">design</h4>
          <p class="body-robo-2 thin-para">
            From the mock ups a final design draft is created and prep for
            development
          </p>
        </div>
        <div>
          <span class="process__count">05</span>
          <hr />
          <h4 class="heading-babas-4 spacing-default-2">development</h4>
          <p class="body-robo-2 thin-para">
            Setting up all the technical components and software needed for the
            project
          </p>
        </div>
        <div>
          <span class="process__count">06</span>
          <hr />
          <h4 class="heading-babas-4 spacing-default-2">content upload</h4>
          <p class="body-robo-2 thin-para">
            Ensuring all content and messaging is correct. Blogs, Press Policies
            and other content content are up to date
          </p>
        </div>
        <div>
          <span class="process__count">07</span>
          <hr />
          <h4 class="heading-babas-4 spacing-default-2">launch & support</h4>
          <p class="body-robo-2 thin-para">
            Launch the project with guides and documentation (text and visual)
            of the project. Setting up a maintenance process and a schedule for
            when it will be completed
          </p>
        </div>
      </div>
      <p class="body-robo-2 spacing-default-3">
        *Every project is special, my process can adapt to your projects
        regardless of where they are in the process.
      </p>
    </div>
  </section>
  <section class="home__faq spacing-default">
    <h2 class="heading-0 center-text">/*FAQ*/</h2>
    <ul role="list" class="body-robo-2">
      <li>
        <span>/01</span>
        <span>What to bring to being the process?</span>
        <span>
          <i class="ri-arrow-right-down-line"></i>
        </span>
      </li>
      <li>
        <span>/01</span>
        <span>What to bring to being the process?</span>
        <span>
          <i class="ri-arrow-right-down-line"></i>
        </span>
      </li>
      <li>
        <span>/01</span>
        <span>What to bring to being the process?</span>
        <span>
          <i class="ri-arrow-right-down-line"></i>
        </span>
      </li>
      <li>
        <span>/01</span>
        <span>What to bring to being the process?</span>
        <span>
          <i class="ri-arrow-right-down-line"></i>
        </span>
      </li>
    </ul>
  </section>
</template>
<style scoped>
@import "../../public/main.css";
.home__hero {
  margin: 5% auto;
}
.home__hero__me {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}
.home__hero__me div {
  grid-area: 1 / 1 / 2 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
  left: -60%;
  top: 10%;
  padding-right: 40px;
}
.home__hero__me img {
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-self: end;
}
.home__hero__me div span {
  grid-area: 1 / 1 / 2 / 2;
  font-size: var(--fz-heading-1);
  line-height: 100%;
  color: var(--c-d-red);
  margin-top: -40px;
}
.home__hero__me p {
  grid-area: 1 / 1 / 2 / 2;
  font-family: var(--ff-incon);
}
.home__process {
  background-color: var(--c-d-red);
  padding: 5rem;
  border-radius: var(--br-3);
}
.home__services__content li {
  padding: 5rem 0 5rem 5rem;
}
.home__services__content li h2 {
  padding: 2rem;
}
.home__services__content li a {
  display: flex;
  width: 20%;
  justify-content: center;
  margin-left: auto;
  margin-right: 0;
}
.home__services__content li a:hover {
  color: var(--c-d-red);
  background-color: var(--c-gold);
}
.home__faq ul {
  width: 80%;
  margin: 5% 0 0 auto;
}
.home__faq ul li {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: var(--b-1);
  margin-bottom: 2rem;
}
.home__faq ul li span i {
  font-size: var(--fz-body-2);
}
.service__count {
  font-family: var(--ff-roboto);
  font-size: var(--fz-body-4);
  font-weight: bold;
}
.process__count {
  font-family: var(--ff-roboto);
  font-size: var(--fz-body-2);
}
@media screen and (min-width: 1000px) {
  .home__hero {
    display: grid;
    grid-template-columns: 2.5fr 1fr;
  }
  .home__story {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .home__process__steps-1 {
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    gap: var(--gap);
    margin-bottom: 10rem;
  }
  .home__process__steps-2 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--gap);
  }
  .home__services {
    display: grid;
    grid-template-columns: 1fr 2.5fr;
  }
}
</style>
