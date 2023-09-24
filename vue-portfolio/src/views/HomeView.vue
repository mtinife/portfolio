<template>
  <section class="home">
    <section class="home__hero">
      <h1 class="home__hero__heading">
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
            their dream. - Les Brown
          </p>
        </div>
        <img alt="" src="../../public/images/emoji-me-home.png" />
      </div>
    </section>
    <article class="home__story">
      <span>my story</span>
      <div class="home__story__content">
        <p>
          I am a Front-End Engineer with 3+ years of experience. My main focus
          is client centered, making sure my clients are taking care of in a
          wide range of areas.
        </p>
        <p>
          I found that clients needed more than just good software and
          applications; they need someone that understands their projects and
          can grow with their projects; moving it forward.
        </p>
      </div>
    </article>
    <article class="home__services">
      <span>services & solutions</span>
      <ul class="home__services__content">
        <li>
          <span>01</span>
          <h2>full scale development</h2>
          <router-link to="/services">Read More</router-link>
        </li>
        <li>
          <span>02</span>
          <h2>project design and markups</h2>
          <router-link to="/services">Read More</router-link>
        </li>
        <li>
          <span>03</span>
          <h2>project consultation</h2>
          <router-link to="/services">Read More</router-link>
        </li>
      </ul>
    </article>
  </section>
</template>
<style scoped>
@import "../../public/main.css";
.home__hero {
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  color: var(--c-gold);
  margin: 5% auto;
}
.home__hero__heading {
  font-family: var(--ff-babas);
  font-size: var(--fz-heading-1);
  line-height: 90%;
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
</style>
