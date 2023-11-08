<template>
    <section class="row">
        <div v-for="project in projects" :key="project.name" class="col-3">
            {{ project }}
        </div>
    </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    setup(){
    return { 
        projects: computed(() => AppState.projects)
     }
    }
};
</script>


<style lang="scss" scoped>

</style>