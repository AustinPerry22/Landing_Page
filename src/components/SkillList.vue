<template>
    <section class="row text-center">
        <h4>My Skills</h4>
    </section>
    <section class="text-center d-flex justify-content-center align-items-center height-75">
        <div class="wheel-space">
            <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill" class="wheel-item "/>
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

.height-75{
    height: 75dvh;
}
.wheel-space{
    height: 50dvh;
    width: 50dvh;
    position: relative;
    animation: wheel-spin 75s linear infinite;
}
.wheel-item{
    position: absolute;
    animation: counter-wheel-spin 75s linear infinite;
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