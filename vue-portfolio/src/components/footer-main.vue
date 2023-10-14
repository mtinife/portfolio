<script>
export default {
  name: "FooterMain",
};
</script>
<script setup>
const currentTime = new Date();
const currentYear = currentTime.getFullYear();
</script>
<template>
  <footer class="bg-ra-dark p-14 rounded-xl mobile:rounded-md mobile:p-4">
    <h2 class="text-center font-bebas text-base uppercase mobile:text-lg">
      get in touch
    </h2>
    <div class="">
      <form class="grid">
        <input
          type="email"
          placeholder="Your E-mail"
          class="py-6 bg-ra-dark border-b font-incon text-sx text-ra-gold placeholder:text-ra-gold mobile:text-xs"
        />
        <select
          id="cars"
          name="cars"
          class="py-6 bg-ra-dark border-b font-incon text-sx mobile:text-xs"
        >
          <option value="">~Select Subject~</option>
          <option value="job">Job Offer</option>
          <option value="contract">Contract Work</option>
          <option value="consultation">Project Consultation</option>
        </select>
        <a
          href=""
          type="submit"
          class="flex justify-between items-center p-1 bg-ra-gold rounded-lg"
        >
          <span class="text-ra-dark p-4 text-sx mobile:text-xs">
            Let's Talk
          </span>
          <i
            class="ri-arrow-right-up-line text-ra-gold rounded-lg bg-ra-red text-md"
          ></i>
        </a>
      </form>
      <ul role="list" class="grid">
        <li class="border-y py-4">
          <router-link to="/about" class="uppercase">About</router-link>
        </li>
        <li class="border-b py-4">
          <router-link to="/projects" class="uppercase">projects</router-link>
        </li>
        <li class="border-b py-4">
          <router-link to="/services" class="uppercase">services</router-link>
        </li>
        <li class="border-b py-4">
          <router-link to="/contact" class="uppercase">Contact</router-link>
        </li>
      </ul>
    </div>
    <div class="footer__social spacing-default-1">
      <div class="body-incon-1">
        <i class="ri-mail-line text-md"></i>
        <span class="font-incon text-mx pl-4 mobile:text-sm mobile:pl-2">
          Direct Connect
        </span>
      </div>
      <div class="font-incon uppercase">
        <p>
          <span class="text-mx">{</span>
          <span class="text-sx">linkedin</span>
          <span class="text-mx">}</span>
        </p>
        <p>
          <span class="text-mx">{</span>
          <span class="text-sx">facebook</span>
          <span class="text-mx">}</span>
        </p>
        <p>
          <span class="text-mx">{</span>
          <span class="text-sx">twitter</span>
          <span class="text-mx">}</span>
        </p>
      </div>
    </div>
    <span class="footer__copyright">
      &copy;{{ currentYear }} - Micah M. Tinife - Made with
      <i class="ri-heart-2-fill"></i> & Vue Js
    </span>
  </footer>
</template>
