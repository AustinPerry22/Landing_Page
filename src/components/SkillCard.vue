<template>
    <img :src="skill.logo" :alt="'logo of ' + skill.name" class="img-fluid skill-img">
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    props: {skill: {}},
    setup(){
    return {  }
    }
};
</script>


<style lang="scss" scoped>
.skill-img{
    max-height: 10dvh;
}
</style>