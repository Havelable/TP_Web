<template>
  <div class="nav-bar">
    <router-link class="nav-button" :to="{ name: 'Accueil'}"><h3>Accueil</h3></router-link>
    <router-link class="nav-button" :to="{ name: 'Formulaire'}"><h3>Formulaire</h3></router-link>
    
    <div class="nav-drop">
      <router-link class="nav-button" :to="{ name: 'Liste'}">
        <h3>Liste</h3><img class="icon" src="@/assets/arrow.svg" alt="">
      </router-link>
      <div class="dropdown-content">
        <a class="nav-button" href="#">Link 1</a>
        <a class="nav-button" href="#">Link 2</a>
        <a class="nav-button" href="#">Link 3</a>
      </div>
    </div>

    
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
    display: flex;
    height: 100%;
    width: 100%;
    text-decoration: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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

  .nav-drop{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .dropdown-content{
    display: none;
  }
  .dropdown-content .nav-button{
    height: 50px;
  }

  .nav-drop:hover .dropdown-content{
    display: flex;
    flex-direction: column;
  }
</style>
