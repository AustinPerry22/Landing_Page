<template>

<section class="row bg-about">
    <div class="col-12 col-md-6 d-flex flex-column justify-content-center text-center">
        <p id="name-title">AUSTIN PERRY</p>
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

#name-title{
    font-size: 56px;
}
.bg-about{
    background-image: url(https://images.unsplash.com/photo-1668681919287-7367677cdc4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    background-size: cover;
    animation: bg-anim 65s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

.row{
  height: 85dvh;
}

@keyframes bg-anim {
    from{
        background-position: top left;background-size: 3000px;
    }
    25%{
        background-position: 25% 10%;
    }
    50%{
        background-position: 50% 25%;
    }
    75%{
        background-position: 75% 75%;
    }
    to{
        background-position: 85% right; background-size: 3000px;
    }
}
</style>