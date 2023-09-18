<template>
  <nav>
    <div class="logo">
      <router-link to="/">Home</router-link>
    </div>
    <ul class="nabar__links">
      <li class="nabar__link">
        <router-link to="/about">About</router-link>
      </li>
      <li class="nabar__link">
        <router-link to="/projects">Projects</router-link>
      </li>
      <li class="nabar__link">
        <router-link to="/services">Services</router-link>
      </li>
      <li class="nabar__link">
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    <a class="navbar__cta">Hire Me</a>
  </nav>
  <main>
    <router-view />
  </main>
</template>
