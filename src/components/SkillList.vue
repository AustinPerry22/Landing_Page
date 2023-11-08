<template>
    <section class="row text-center">
        <h4>My Skills</h4>
    </section>
    <section class="row">
        <div v-for="skill in skills" :key="skill.name" class="col-3 text-center">
            <SkillCard :skill="skill"/>
        </div>
    </section>
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