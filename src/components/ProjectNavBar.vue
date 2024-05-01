<template>
    <section class="row text-center">
        <h3>My Projects</h3>
    </section>
    <section class="row bg-dark rounded-3 m-1 m-md-3 py-1">
        <div v-for="project in projects" :key="project.name" class="col-6 col-md-3 py-1 py-md-0 text-center">
            <button :disabled="activeProjectName==project.name" @click="setActiveProject(project.name)" class="btn btn-dark w-100">{{ project.name }}</button>
        </div>
    </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    setup(){
    return { 
        projects: computed(() => AppState.projects),
        activeProjectName: computed(()=> AppState.activeProject.name),

        setActiveProject(projectName){
            AppState.activeProject = AppState.projects.find(project => project.name == projectName)
        }
     }
    }
};
</script>


<style lang="scss" scoped>
button:hover{
    background-color: #635985;
    transform: scale(1.1);
}
button:disabled{
    background-color:#087e39;
}
</style>