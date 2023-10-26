<template>
  <AboutSection/>
  <SkillList/>
  <ProjectNavBar/>
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
