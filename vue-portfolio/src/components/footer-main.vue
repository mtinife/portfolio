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
  <footer class="bg-ra-dark p-4 rounded-md md:rounded-xl md:p-14">
    <h2 class="text-center font-bebas text-lg uppercase md:text-base">
      get in touch
    </h2>
    <div class="xl:flex xl:flex-row xl:gap-80 mt-8 xl:mt-16">
      <form class="grid basis-3/4">
        <input
          type="email"
          placeholder="Your E-mail"
          class="py-6 bg-ra-dark border-b font-incon text-xs text-ra-gold placeholder:text-ra-gold md:text-sx"
        />
        <select
          id="cars"
          name="cars"
          class="py-6 bg-ra-dark border-b font-incon text-xs md:text-sx my-4 xl:my-8"
        >
          <option value="">~Select Subject~</option>
          <option value="job">Job Offer</option>
          <option value="contract">Contract Work</option>
          <option value="consultation">Project Consultation</option>
        </select>
        <div class="flex justify-end">
          <a
            href=""
            type="submit"
            class="flex justify-between items-center p-1 bg-ra-gold rounded-lg"
          >
            <span class="text-ra-dark p-4 text-xs md:text-sx">Let's Talk</span>
            <i
              class="ri-arrow-right-line text-ra-gold rounded-lg bg-ra-red text-md"
            ></i>
          </a>
        </div>
      </form>
      <ul role="list" class="grid basis-1/4 pt-16 xl:pt-0">
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
    <div class="xl:flex xl:justify-between my-10 xl:my-32">
      <div class="">
        <i class="ri-mail-line text-sx md:text-md"></i>
        <span class="font-incon text-sm pl-2 md:text-mx md:pl-4">
          Direct Connect
        </span>
      </div>
      <div class="xl:flex xl:gap-10 grid gap-5 mt-5 font-incon uppercase">
        <p>
          <span class="text-sm md:text-mx">{</span>
          <span class="text-xs md:text-sx">linkedin</span>
          <span class="text-sm md:text-mx">}</span>
        </p>
        <p>
          <span class="text-sm md:text-mx">{</span>
          <span class="text-xs md:text-sx">facebook</span>
          <span class="text-sm md:text-mx">}</span>
        </p>
        <p>
          <span class="text-sm md:text-mx">{</span>
          <span class="text-xs md:text-sx">twitter</span>
          <span class="text-sm md:text-mx">}</span>
        </p>
      </div>
    </div>
    <span class="text-[11px]">
      &copy;{{ currentYear }} - Micah M. Tinife - Made with
      <i class="ri-heart-2-fill"></i> & Vue Js
    </span>
  </footer>
</template>
