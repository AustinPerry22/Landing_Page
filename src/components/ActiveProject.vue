<template>
    <section class="row">
        <div class="col-12 text-center">
            <h5>{{ activeProject.name }}</h5>
        </div>
    </section>
    <section class="row justify-content-center">
        <div @mouseenter="toggleLinks()" @mouseleave="toggleLinks()" class="col-11 col-md-6 bg-project-img d-flex flex-column justify-content-center">
            <section v-show="showLinks" class="row text-center">
                <div class="col-6">
                    <a :href="activeProject.repo" target="_blank"><button class="btn btn-dark"><i class="mdi mdi-github fs-1"></i></button></a>
                </div>
                <div class="col-6">
                    <a :href="activeProject.link" target="_blank"><button class="btn btn-dark"><i class="mdi mdi-web fs-1"></i></button></a>
                </div>
            </section>
        </div>
        <div class="col-11 col-md-6">
            <p>{{ activeProject.description }}</p>
            <h6 class="text-center">Major Skills used</h6>
            <section class="skills">
                <img v-for="skill in projectSkills" :key="skill.name" :src="skill.logo" :alt="skill.name" :title="skill.name" class="skill"/>
            </section>
        </div>
    </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from '../utils/Logger';
export default {
    setup() {
        onMounted(() => setDefaultProject());
        function setDefaultProject() {
            AppState.activeProject = AppState.projects[0];
        }
        return {
            activeProject: computed(() => AppState.activeProject),
            showLinks: computed(() => AppState.showLinks),
            projectImg: computed(() => `url("${AppState.activeProject.img}")`),
            projectSkills: computed(()=> {
                if(!AppState.activeProject.skillsUsed) return [];
                let skills = [];
                AppState.activeProject.skillsUsed.forEach(projectSkill => {
                    const skillToAdd = AppState.skills.find(skill => skill.name == projectSkill)
                    skills.push(skillToAdd)
               })
               logger.log(skills)
               return skills
            }),
            toggleLinks() {
                AppState.showLinks = !AppState.showLinks;
            }
        };
    },
};
</script>


<style lang="scss" scoped>
.bg-project-img{
    background-image: v-bind(projectImg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 50dvh;
    border-radius: 1rem;
}
.skills{
    display: flexbox;
    text-align: center;
}

.skill{
    height: 10dvh;
    margin: 0 2.5dvw;
}

@media screen and (max-width: 768px){
    .bg-project-img{
        height: 32.5dvh;
    }
}
</style>