<template>
  <div class="container-fluid bg-primary pb-5 bottom-border">
    <AboutSection id="home" class="bottom-border"/>
    <div id="skills" class="mt-4 bottom-border">
      <SkillList/>
    </div>
    <div id="project-navbar" class="mt-4">
      <ProjectNavBar />
    </div>
    <div id="active-project" class="pb-3 bottom-border">
      <ActiveProject/>
    </div>
    <div id="contact-form" class="pt-5">
      <ContactForm/>
    </div>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import ProjectNavBar from '../components/ProjectNavBar.vue';

export default {
    setup() {
        return {
          
        };
    },
    components: { ProjectNavBar, ContactForm }
}
</script>

<style scoped lang="scss">
.bottom-border{
  border-bottom: 3px solid #18122B;
}
</style>
