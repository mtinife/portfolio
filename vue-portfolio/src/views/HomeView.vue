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
    <article class="home__story">
      <span class="heading-4">my story</span>
      <div class="home__story__content">
        <p class="body-incon-2">
          I am a Front-End Engineer with 3+ years of experience. My main focus
          is client centered, making sure my clients are taking care of in a
          wide range of areas.
        </p>
        <p class="body-robo-1">
          I found that clients needed more than just good software and
          applications; they need someone that understands their projects and
          can grow with their projects; moving it forward.
        </p>
      </div>
    </article>
    <section class="home__services">
      <span class="heading-4">services & solutions</span>
      <ul role="list" class="home__services__content">
        <li>
          <span>01</span>
          <h2 class="heading-3">full scale development</h2>
          <router-link to="/services" class="button-1">Read More</router-link>
        </li>
        <li>
          <span>02</span>
          <h2 class="heading-3">project design and markups</h2>
          <router-link to="/services" class="button-1">Read More</router-link>
        </li>
        <li>
          <span>03</span>
          <h2 class="heading-3">project consultation</h2>
          <router-link to="/services" class="button1">Read More</router-link>
        </li>
      </ul>
    </section>
  </section>
  <section class="home__process">
    <div class="home__process__steps">
      <div>
        <div>
          <h3 class="heading-5">my process</h3>
          <p class="body-robo-2">
            The goal is to getting an idea of what you're looking for; each
            project is different and offers different challenges and solutions.
            I have a 7 step process I take client through
          </p>
        </div>
        <div>
          <span>01</span>
          <hr />
          <h4 class="heading-babas-4">intro call</h4>
          <p class="body-robo-2">
            The first step in the process. A friendly call on what your needs
            and visions are
          </p>
        </div>
        <div>
          <span>02</span>
          <hr />
          <h4 class="heading-babas-4">discovery</h4>
          <p class="body-robo-2">
            We look for possible solutions to the problems your facing
          </p>
        </div>
        <div>
          <span>03</span>
          <hr />
          <h4 class="heading-babas-4">wireframe</h4>
          <p class="body-robo-2">
            Mocking up the solutions and how they will be implemented
          </p>
        </div>
      </div>
      <div>
        <div>
          <span>04</span>
          <hr />
          <h4 class="heading-babas-4">design</h4>
          <p class="body-robo-2">
            From the mock ups a final design draft is created and prep for
            development
          </p>
        </div>
        <div>
          <span>05</span>
          <hr />
          <h4 class="heading-babas-4">development</h4>
          <p class="body-robo-2">
            Setting up all the technical components and software needed for the
            project
          </p>
        </div>
        <div>
          <span>06</span>
          <hr />
          <h4 class="heading-babas-4">content upload</h4>
          <p class="body-robo-2">
            Ensuring all content and messaging is correct. Blogs, Press Policies
            and other content content are up to date
          </p>
        </div>
        <div>
          <span>07</span>
          <hr />
          <h4 class="heading-babas-4">launch & support</h4>
          <p class="body-robo-2">
            Launch the project with guides and documentation (text and visual)
            of the project. Setting up a maintenance process and a schedule for
            when it will be completed
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="home__faq">
    <h2 class="heading-1">/*FAQ*/</h2>
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
  <section class="cta gold-bg">
    <h6 class="heading-robo-4">
      Let's get started, your dream projects can't wait.
    </h6>
    <button class="button-2">
      <span>Let's Talk</span>
      <i class="ri-arrow-right-up-line"></i>
    </button>
  </section>
  <footer class="footer dark-red-bg">
    <h2 class="heading-2">get in touch</h2>
    <div class="footer__contact">
      <form>
        <input type="email" placeholder="Your E-mail" />
        <select id="cars" name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <button type="submit" class="button-3">
          <span>Let's Talk</span>
          <i class="ri-arrow-right-line"></i>
        </button>
      </form>
      <ul role="list">
        <li>
          <hr />
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <hr />
          <router-link to="/projects">projects</router-link>
        </li>
        <li>
          <hr />
          <router-link to="/services">services</router-link>
        </li>
        <li>
          <hr />
          <router-link to="/contact">Contact</router-link>
          <hr />
        </li>
      </ul>
    </div>
    <div class="footer__social">
      <div class="body-incon-1">
        <i class="ri-mail-line"></i>
        <span>Direct Connect</span>
      </div>
      <div>
        <p class="incon-default">
          <span class="body-incon-2">{</span>
          linkedin
          <span class="body-incon-2">}</span>
        </p>
        <p class="incon-default">
          <span class="body-incon-2">{</span>
          facebook
          <span class="body-incon-2">}</span>
        </p>
        <p class="incon-default">
          <span class="body-incon-2">{</span>
          twitter
          <span class="body-incon-2">}</span>
        </p>
      </div>
    </div>
    <span>
      &copy;2023 - Micah M. Tinife - Made with
      <i class="ri-heart-2-fill"></i> & Vue Js
    </span>
  </footer>
</template>
<style scoped>
@import "../../public/main.css";
.home__hero {
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  color: var(--c-gold);
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
.footer__contact form {
  display: grid;
}
.footer__contact form input,
.footer__contact form select {
  padding: 20px 0;
  background: none;
  border: none;
  border-bottom: var(--b-1);
  font-size: var(--fz-body-3);
  font-family: var(--ff-incon);
  color: var(--c-gold);
}
.footer__contact ul li a {
  padding: 10px 0;
  color: var(--c-gold);
  font-family: var(--ff-roboto);
  text-transform: uppercase;
}
</style>
