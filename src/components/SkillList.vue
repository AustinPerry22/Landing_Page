<template>
    <section class="row text-center">
        <h4>My Skills</h4>
        <div class="logos">
            <div class="logos-slide">
                <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill"/>
            </div>
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

@keyframes slide {
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(-100%);
    }
}

.logos{
    overflow: hidden;
    padding: 5dvh;
    white-space: nowrap;
    
}

.logos:hover .logos-slide{
    animation-play-state: paused;
}

.logos-slide{
    display: inline-block;
    animation: 15s slide infinite linear;
}

.logos-slide img{
    margin: 0 2.5dvw;
}

</style>