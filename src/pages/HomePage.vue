<template>
  <div class="container-fluid">
    <AboutSection/>
    <SkillList/>
    <ProjectNavBar/>
    <ActiveProject/>
    <EmailForm/>
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
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
