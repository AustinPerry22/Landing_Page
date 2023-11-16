<template>
    <section class="row bg-dark">
        <div class="col-2"><button @click="scrollToComponent('home')" class="btn btn-dark">About Me</button></div>
        <div class="col-2"><button @click="scrollToComponent('skills')" class="btn btn-dark">My Skills</button></div>
        <div class="col-2"><button @click="scrollToComponent('project-navbar')" class="btn btn-dark">My Projects</button></div>
        <div class="col-2"><button @click="scrollToComponent('contact')" class="btn btn-dark">Contact Info</button></div>
    </section>
</template>


<script>
export default{
    setup(){
        return{
            scrollToComponent(componentId){
                const componentToScrollTo = document.getElementById(componentId)
                if(!componentToScrollTo) return "bad Id"
                componentToScrollTo.scrollIntoView({behavior: 'smooth'})
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>