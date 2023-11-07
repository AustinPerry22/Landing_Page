<template>
  <div class="container-fluid bg-dark">
    <section class="row sticky-top">
        <div class="col-2"><a href="#">Home</a></div>
        <div class="col-2"><a href="#project-navbar">Projects</a></div>
        <div class="col-2"><a href="#contact">Contact</a></div>
    </section>
    <AboutSection/>
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
        return {};
    },
    components: { ProjectNavBar }
}
</script>

<style scoped lang="scss">

</style>
