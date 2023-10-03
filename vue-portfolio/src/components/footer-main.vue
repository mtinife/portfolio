<script>
export default {
  name: "FooterMain",
};
</script>
<template>
  <footer class="footer dark-red-bg">
    <h2 class="heading-2 center-text">get in touch</h2>
    <div class="footer__contact spacing-default-3">
      <form>
        <input type="email" placeholder="Your E-mail" />
        <select id="cars" name="cars" class="spacing-default-1">
          <option value="">~Select Subject~</option>
          <option value="job">Job Offer</option>
          <option value="contract">Contract Work</option>
          <option value="consultation">Project Consultation</option>
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
    <div class="footer__social spacing-default-1">
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
    <span class="footer__copyright">
      &copy;2023 - Micah M. Tinife - Made with
      <i class="ri-heart-2-fill"></i> & Vue Js
    </span>
  </footer>
</template>
<style scoped>
@import "../../public/main.css";
.footer__contact form input,
.footer__contact form select {
  padding: 20px 0;
  background: none;
  border: none;
  border-bottom: var(--b-1);
  font-size: var(--fz-body-3);
  font-family: var(--ff-incon);
  color: var(--c-gold);
  display: flex;
  width: 100%;
}
.footer__contact form input::placeholder {
  color: var(--c-gold);
}
.footer__contact form input:focus-visible,
.footer__contact form select:focus-visible {
  outline: var(--b-1);
}
.footer__contact form input::placeholder {
  color: var(--c-gold);
}
.cta h6 {
  font-weight: bold;
}
.footer__contact ul li a {
  padding: 10px 0;
  color: var(--c-gold);
  font-family: var(--ff-roboto);
  text-transform: uppercase;
}
.footer__copyright {
  font-family: var(--ff-roboto);
}
@media screen and (min-width: 1000px) {
  .footer__contact {
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    gap: 10rem;
  }
  .footer__social,
  .footer__social div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
}
</style>
