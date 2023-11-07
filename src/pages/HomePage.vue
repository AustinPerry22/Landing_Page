<template>
  <AboutSection/>
  <SkillList/>
  <ProjectNavBar id="project-navbar"/>
  <ActiveProject/>
  <EmailForm/>
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
