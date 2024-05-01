<template>
    <section class="row">
        <div class="col-12 text-center my-3">
            <h4>{{ activeProject.name }}</h4>
        </div>
    </section>
    <section class="row justify-content-center">
        <div class="col-11 col-md-6 bg-project-img"></div>
        <div class="col-11 col-md-6 d-flex flex-column justify-content-between">
            <section>
                <p class="ms-md-4">{{ activeProject.description }}</p>
                <section class="row justify-content-center">
                    <h5 class="text-center bottom-border w-50 mt-2 mt-md-5">Tech Stack Used</h5>
                    <section class="skills">
                        <img v-for="skill in projectSkills" :key="skill.name" :src="skill.logo" :alt="skill.name" :title="skill.name" class="skill"/>
                    </section>
                </section>
            </section>
            <section class="row text-center mt-5 mt-md-0">
                <div class="col-6">
                    <a :href="activeProject.repo" target="_blank"><button class="btn btn-dark fs-2"><i class="mdi mdi-github"></i> Repo Link</button></a>
                </div>
                <div class="col-6">
                    <a :href="activeProject.link" target="_blank"><button class="btn btn-dark fs-2"><i class="mdi mdi-web"></i> Live Site</button></a>
                </div>
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
    height: 50vh;
    border-radius: 1rem;
}

.bottom-border{
  border-bottom: 3px solid #18122B;
}
.skills{
    display: flexbox;
    text-align: center;
}

.skill{
    height: 10vh;
    margin: 0 2.5dvw;
}

button:hover{
    background-color: #2e31ffe3;
    transform: scale(1.1);
}

@media screen and (max-width: 768px){
    .bg-project-img{
        height: 32.5dvh;
    }
}
</style>