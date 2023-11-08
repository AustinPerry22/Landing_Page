<template>
    <section class="row bg-dark">
        <div class="col-2"><button @click="scrollToComponent('home')" class="btn btn-dark">Home</button></div>
        <div class="col-2"><button @click="scrollToComponent('project-navbar')" class="btn btn-dark">Projects</button></div>
        <div class="col-2"><button @click="scrollToComponent('contact')" class="btn btn-dark">Contact</button></div>
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