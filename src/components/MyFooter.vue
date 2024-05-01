<template>
<section class="row justify-content-center text-center py-2 bg-secondary">
    <div class="col-12 col-md-4">
        <p class="text-footer">Created By Austin Perry</p>
    </div>
    <div class="col-6 col-md-4">
        <a target="blank" href="https://github.com/AustinPerry22"><button class="btn btn-dark">Github <i class="mdi mdi-github"></i></button></a>
    </div>
    <div class="col-6 col-md-4">
        <a target="blank" href="https://www.linkedin.com/in/austin-perry22/"><button class="btn btn-dark">Linkedin <i class="mdi mdi-linkedin"></i></button></a>
    </div>
</section>
</template>


<script>
</script>


<style lang="scss" scoped>
button:hover{
    background-color: #2e31ffe3;
    transform: scale(1.1);
}
.text-footer{
    margin-top: 5px;
    margin-bottom: 0px;
    font-size: 16px;
    font-weight: bold;
}

@media screen and (max-width: 768px){
    button{
        width: 100%;
    }
    .text-footer{
        margin-bottom: 10px;
    }
}
</style>