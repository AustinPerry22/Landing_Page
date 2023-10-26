<template>
    <div v-for="skill in skills" :key="skill.name" class="bg-logo">
        {{ skill.name }}
        <img :src="skill.logo" alt="">
    </div>
    <SkillCard/>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    setup(){
    return { 
        skills: computed(()=> AppState.skills),
        bgLogo: computed(() => AppState.skills[0].logo)
     }
    }
};
</script>


<style lang="scss" scoped>
</style>