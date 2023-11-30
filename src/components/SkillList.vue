<template>
    <section class="row text-center">
        <h4>My Skills</h4>
        <div class="logos">
            <div class="logos-slide">
                <img v-for="skill in skills" @click="changeActiveSkill(skill)" :key="skill.name" :src="skill.logo" :alt="skill.name" :title="skill.name" class="selectable"/>
            </div>
            <div class="logos-slide">
                <img v-for="skill in skills" @click="changeActiveSkill(skill)" :key="skill.name" :src="skill.logo" :alt="skill.name" :title="skill.name" class="selectable"/>
            </div>
        </div>
        <div v-if="activeSkill">
            <h5>{{ activeSkill.name }}</h5>
            <p>{{ activeSkill.description }}</p>
        </div>
        <div v-else>
            <p>Click a skill to view more about it</p>
        </div>
    </section>
    
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    setup() {
        return {
            skills: computed(() => AppState.skills),
            activeSkill: computed(()=> AppState.activeSkill),

            changeActiveSkill(skill){
                AppState.activeSkill = skill;
            }
        };
    },
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

.logos-slide{
    display: inline-block;
    animation: 20s slide infinite linear;
}

.logos-slide img{
    height: 10dvh;
    margin: 0 2.5dvw;
}

</style>