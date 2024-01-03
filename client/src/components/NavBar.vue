<template>
    <section class="row bg-secondary text-center py-1 nav-border">
        <div class="col-4 col-md-2"><button @click="scrollToComponent('home')" class="btn btn-dark">About Me</button></div>
        <div class="col-4 col-md-2"><button @click="scrollToComponent('project-navbar')" class="btn btn-dark">Projects</button></div>
        <div class="col-4 col-md-2"><button @click="scrollToComponent('contact')" class="btn btn-dark">Contact</button></div>
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
button:hover{
    background-color: #635985;
    transform: scale(1.1);
}
.nav-border{
    border-bottom: 3px solid #18122B;
}

@media screen and (max-width: 768px){
   .nav-border{
    border-bottom: none;
    border-top: 3px solid #18122B;
   }
}
</style>