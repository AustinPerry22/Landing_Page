<template>

<section class="row bg-about">
    <div class="col-12 col-md-6 d-flex flex-column justify-content-center text-center">
        AUSTIN PERRY
    </div>
    <div class="col-12 col-md-6 d-flex flex-column justify-content-center text-md-center">
        Welcome to my website! My name is Austin and I'm passionate about crafting meaningful experiences through code. My journey into the world of computer science began in high school. With over 500 hours of hands-on projects at Boise Codeworks and a foundation built in college computer science classes, I've explored both front-end and back-end development. My curiosity led me to self-guided learning in Python and React, followed by a deep dive into various programming languages and technologies at Boise Codeworks. Beyond the lines of code, I'm recognized for my resilience and helpful nature. When I'm not immersed in the digital realm, you'll find me gaming, watching movies, playing ping pong, and enjoying the company of my feline companion. Join me as I continue to evolve my skills and share the journey of a developer with a passion for creating in the ever-expanding world of technology. REWRITE THE GARBAGE!!!
    </div>
</section>
</template>


<script>
</script>


<style lang="scss" scoped>
.bg-about{
    background-image: url(../assets/img/AboutBackground.svg);
    background-size: cover;
    animation: bg-anim 65s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
.row{
  height: 85dvh;
}

@keyframes bg-anim {
    from{
        background-position: top;background-size: 3000px;
    }
    to{
        background-position: -100px 0px; background-size: 2750px;
    }
}
@media screen and (max-width: 768px){
    @keyframes bg-anim {
    from{
        background-position: bottom left;background-size: 350dvh;
    }
    to{
        background-position: center right; background-size: 600dvh;
    }
}
}
</style>