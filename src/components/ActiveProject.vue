<template>
    <section class="row">
        <div @mouseenter="toggleLinks()" @mouseleave="toggleLinks()" class="col-6 bg-project-img d-flex flex-column justify-content-center">
            <section v-show="showLinks" class="row text-center">
                <div class="col-6">
                    <a :href="activeProject.repo" target="_blank"><button class="btn btn-dark"><i class="mdi mdi-github fs-1"></i></button></a>
                </div>
                <div class="col-6">
                    <a :href="activeProject.link" target="_blank"><button class="btn btn-dark"><i class="mdi mdi-web fs-1"></i></button></a>
                </div>
            </section>
        </div>
        <div class="col-6">
            <h6>{{ activeProject.name }}</h6>
            <p>{{ activeProject.description }}</p>
        </div>
    </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from '../utils/Logger';
export default {
    setup(){
        onMounted(()=> setDefaultProject())

        function setDefaultProject(){
            AppState.activeProject= AppState.projects[0]
        }
    return { 
        activeProject: computed(() => AppState.activeProject),
        showLinks: computed(()=> AppState.showLinks),
        projectImg: computed(()=> `url('${AppState.activeProject.img}')`),

        toggleLinks(){
            AppState.showLinks = !AppState.showLinks
        }
     }
    }
};
</script>


<style lang="scss" scoped>
.bg-project-img{
    background-image: v-bind(projectImg);
    background-position: center;
    background-size: cover;
    height: 40dvh;
    border-radius: 1rem;
}
</style>