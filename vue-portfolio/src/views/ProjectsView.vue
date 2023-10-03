<template>
  <section class="projects">
    <section class="page-hero spacing-default-4 center-text">
      <h1 class="heading-1">
        the project
        <span>[7]</span>
      </h1>
      <p class="body-incon-5">
        Showcase of the work I've delieved to clients and organization I have
        been a part of.
      </p>
    </section>
    <section class="projects__items">
      <div class="projects__items__top">
        <div></div>
        <div class="projects__featured projects__item">
          <div class="projects__item__content">
            <span class="body-incon-5">December 25, 2023</span>
            <h3 class="heading-projects">
              Please put the title of the project here
            </h3>
          </div>
          <div class="projects__item__tags"></div>
          <div class="projects__item__btn">
            <a href="#" class="button-1">Live Preview</a>
            <a href="#" class="button-1">Source Code</a>
          </div>
        </div>
        <div class="projects__item">
          <div class="projects__item__content">
            <span class="body-incon-5">December 25, 2023</span>
            <h3 class="heading-projects">
              Please put the title of the project here
            </h3>
          </div>
          <div class="projects__item__tags"></div>
          <div class="projects__item__btn">
            <a href="#" class="button-1">Live Preview</a>
            <a href="#" class="button-1">Source Code</a>
          </div>
        </div>
      </div>
      <div class="projects__items__bottom">
        <div class="projects__item">
          <div class="projects__item__content">
            <span class="body-incon-5">December 25, 2023</span>
            <h3 class="heading-projects">
              Please put the title of the project here
            </h3>
          </div>
          <div class="projects__item__tags"></div>
          <div class="projects__item__btn">
            <a href="#" class="button-1">Live Preview</a>
            <a href="#" class="button-1">Source Code</a>
          </div>
        </div>
        <div></div>
        <div class="projects__item">
          <div class="projects__item__content">
            <span class="body-incon-5">December 25, 2023</span>
            <h3 class="heading-projects">
              Please put the title of the project here
            </h3>
          </div>
          <div class="projects__item__tags"></div>
          <div class="projects__item__btn">
            <a href="#" class="button-1">Live Preview</a>
            <a href="#" class="button-1">Source Code</a>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<style scoped>
.projects__items {
  display: grid;
  grid-template-rows: repeat(2, 500px);
  gap: 2rem;
}
.projects__items__top {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2rem;
}
.projects__items__bottom {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
.projects__item {
  border: var(--b-1);
  border-radius: var(--br-3);
  padding: 3rem;
  display: grid;
}
</style>
