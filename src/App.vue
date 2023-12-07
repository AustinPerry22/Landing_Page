<template>
  <header class="order-last order-md-first sticky-bottom sticky-md-top container-fluid">
    <NavBar/>
  </header>
  <main>
    <router-view />
  </main>
  <div class="container-fluid" id="contact">
    <MyFooter/>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import NavBar from './components/NavBar.vue';


export default {
    setup() {
        return {
            appState: computed(() => AppState)
        };
    },
    components: { NavBar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
header,
main,
footer{
  font-family: "Roboto Slab", Arial, Helvetica, sans-serif;
}
</style>
