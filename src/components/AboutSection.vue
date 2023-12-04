<template>

<section class="row bg-about">
    <div class="col-12 col-md-6 d-flex flex-column justify-content-center text-center">
        AUSTIN PERRY
    </div>
    <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
        <p>
            Welcome to my website! I'm Austin, a full-stack software developer. I have taken courses in computer science while earning my associates in S.T.E.M. at the College of Western Idaho.  Additionally, I successfully completed the Immersive Full Stack web development course at Boise Codeworks.
        </p>
        <p>
            I enjoy diving into projects and acquiring new skills. Beyond software development, you'll find me immersed in video games, movies, playing ping pong, or enjoying the company of my cat.
        </p>
        <p>
            I'm excited to work with a team, eager to learn, and looking forward to the growing as as software developer and as a person.
        </p>
        
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
    animation-fill-mode: infinite alternate forwards;
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