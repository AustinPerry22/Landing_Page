<template>
    <div v-for="skill in skills" :key="skill.name" class="bg-logo">
        <SkillCard :skill="skill"/>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import SkillCard from './SkillCard.vue';
export default {
    setup() {
        return {
            skills: computed(() => AppState.skills),
            bgLogo: computed(() => AppState.skills[0].logo)
        };
    },
    components: { SkillCard }
};
</script>


<style lang="scss" scoped>
</style>