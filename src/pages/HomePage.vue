<template>
  <div class="container-fluid bg-dark pb-5">
    <AboutSection id="home"/>
    <div id="skills" class="mt-4">
      <SkillList/>
    </div>
    <div id="project-navbar" class="mt-4">
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
