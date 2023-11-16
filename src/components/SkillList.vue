<template>
    <section class="row text-center">
        <h4>My Skills</h4>
    </section>
    <section class="row wheel-space">
        <div v-for="skill in skills" :key="skill.name">
            <SkillCard :skill="skill" class="wheel-item "/>
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
        };
    },
    components: { SkillCard }
};
</script>


<style lang="scss" scoped>
.wheel-space{
    height: 75dvh;
    position: relative;
    animation: wheel-spin 75s linear infinite;
}
.wheel-item{
    position: absolute;
    animation: counter-wheel-spin 75s linear infinite;
    top: 5dvh;
    left: 45dvw;
}

@keyframes wheel-spin {
    from{
        transform: rotate(0deg);
    }
    to{
        transform:  rotate(360deg);
    }
}
@keyframes counter-wheel-spin {
    from{
        transform: rotate(360deg);
    }
    to{
        transform:  rotate(0deg);
    }
}
</style>