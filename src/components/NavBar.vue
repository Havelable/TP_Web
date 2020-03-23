<template>
  <div class="nav-bar">
    <router-link class="nav-button" :to="{ name: 'Accueil'}"><h3>Accueil</h3></router-link>
    <router-link class="nav-button" :to="{ name: 'Formulaire'}"><h3>Formulaire</h3></router-link>
    <router-link class="nav-button" :to="{ name: ''}">
      <h3>Liste</h3>
      <img class="icon" src="@/assets/arrow.svg" alt="">
    </router-link>
    <router-link class="nav-button" :to="{ name: 'About'}"><h3>About</h3></router-link>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  .nav-bar{
    height: 50px;
    display: flex;
  }
  .nav-bar > a{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a, a:hover, a:visited{
    color: inherit;
    text-decoration: inherit;
  }

  .nav-bar > :last-child{
    flex: 4;
  }

  .nav-button{
    height: 100%;
    width: 100%;
    text-decoration: none;
  }

  .nav-button:hover{
    background-color: darkgray;
  }

  .nav-button:hover .icon{
    transform: rotate(0deg);
  }

  .icon{
    transform: rotate(180deg);
    transition-duration: 0.5s;
    margin-left: 10px;
    width: 20px;
    height: 20px;
  }
</style>
