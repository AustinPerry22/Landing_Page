<template>
  <div class="container-fluid bg-dark">
    <NavBar/>
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
          
        };
    },
    components: { ProjectNavBar }
}
</script>

<style scoped lang="scss">

</style>
