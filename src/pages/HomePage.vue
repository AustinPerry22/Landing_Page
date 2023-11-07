<template>
  <!-- TODO recomponitize the navbar and scroll to function -->
  <div class="container-fluid bg-dark">
    <section class="row sticky-top">
        <div class="col-2"><h5 @click="scrollToComponent('home')">Home</h5></div>
        <div class="col-2"><h5 @click="scrollToComponent('project-navbar')">Projects</h5></div>
        <div class="col-2"><h5 @click="scrollToComponent('contact')">Contact</h5></div>
    </section>
    <AboutSection id="home"/>
    <SkillList/>
    <div id="project-navbar">
      <ProjectNavBar />
    </div>
    <ActiveProject/>
    <div id="contact">
      <EmailForm />
    </div>
  </div>
</template>

<script>
import ProjectNavBar from '../components/ProjectNavBar.vue';

export default {
    setup() {
        return {
          scrollToComponent(componentId){
            const componentToScrollTo = document.getElementById(componentId)
            if(!componentToScrollTo) return "bad Id"
            componentToScrollTo.scrollIntoView({behavior: 'smooth'})
          }
        };
    },
    components: { ProjectNavBar }
}
</script>

<style scoped lang="scss">

</style>
