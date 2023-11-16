<template>
  <div class="container-fluid bg-dark">
    <AboutSection id="home"/>
    <SkillList/>
    <div id="project-navbar">
      <ProjectNavBar />
    </div>
    <ActiveProject/>
  </div>
</template>

<script>
import ProjectNavBar from '../components/ProjectNavBar.vue';

export default {
    setup() {
        return {
          
        };
    },
    components: { ProjectNavBar}
}
</script>

<style scoped lang="scss">

</style>
