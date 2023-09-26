<template>
  <section class="container">
    <nav>
      <div class="logo">
        <router-link to="/">
          <img alt="Logo banner" src="./assets/logo.png" />
        </router-link>
      </div>
      <ul role="list" class="navbar__links">
        <li class="navbar__link nav-button">
          <router-link to="/about">About</router-link>
        </li>
        <li class="navbar__link nav-button">
          <router-link to="/projects">Projects</router-link>
        </li>
        <li class="navbar__link nav-button">
          <router-link to="/services">Services</router-link>
        </li>
        <li class="navbar__link nav-button">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
      <a class="navbar__cta nav-button">Hire Me</a>
    </nav>
    <main>
      <router-view />
    </main>
  </section>
</template>
<style scoped>
@import "../public/main.css";
nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  font-family: var(--ff-roboto);
  font-size: 1rem;
  color: var(--c-gold);
}
.logo img {
  position: absolute;
  top: -47%;
  width: 80px;
}
.navbar__links {
  width: 620px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 70px;
  background-color: var(--c-d-red);
  border-radius: var(--br-5);
}
.nav-button {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-button a {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--c-gold);
  border-radius: var(--br-5);
}
.nav-button a:hover {
  background-color: var(--c-gold);
  color: var(--c-d-red);
}
.navbar__cta {
  width: 150px;
  height: 70px;
  background-color: var(--c-d-red);
  border-radius: var(--br-5);
  color: var(--c-gold);
}
.navbar__cta:hover {
  background-color: var(--c-gold);
  border-radius: var(--br-5);
  color: var(--c-d-red);
}
</style>
