<template>
    {{activeProject}}
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    setup(){
        onMounted(()=> setDefaultProject())
        
        function setDefaultProject(){
            AppState.activeProject= AppState.projects[0]
        }
    return { 
        activeProject: computed(() => AppState.activeProject)
     }
    }
};
</script>


<style lang="scss" scoped>

</style>