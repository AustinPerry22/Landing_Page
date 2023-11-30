<template>
    <section class="row text-center">
        <h4>My Projects</h4>
    </section>
    <section class="row">
        <div v-for="project in projects" :key="project.name" class="col-3 text-center">
            <button @click="setActiveProject(project.name)" class="btn btn-dark">{{ project.name }}</button>
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

        setActiveProject(projectName){
            AppState.activeProject = AppState.projects.find(project => project.name == projectName)
        }
     }
    }
};
</script>


<style lang="scss" scoped>
button:hover{
    background-color: green;
    transform: scale(1.1);
}
</style>