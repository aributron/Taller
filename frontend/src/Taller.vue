
<template>
<body>
  <header>
  </header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">TallerORT</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                      <div v-if="estaLogeado">
                          <a class="nav-link" href="/#/cliente"> Cliente </a>
                      </div>
                      <div v-if="estaLogeado">   
                          <a class="nav-link" href="/#/vehiculo"> Vehiculo </a>
                      </div>
                      <div v-if="estaLogeado">
                          <a class="nav-link" href="/#/reparacion">Reparacion</a>
                      </div> 
                      <div v-if="estaLogeado">
                          <a class="nav-link" href="/#/trabajoporhacer">Trabajos</a>
                      </div>
                      <div v-if="!estaLogeado">
                          <a class="nav-link" href="/#/login">Login</a>
                      </div>
                      <div v-else>
                          <a class="nav-link" href="/#/logout">Logout</a>
                      </div>    
              </div>
          </div>
      </div>
    </nav>
  
  <section>
  <router-view>

  </router-view>

  </section>
  <article>

  </article>
  
  <footer id="foot">
    <div class="container">
        <h1>¡Suscribite para enterarte de todo lo nuevo!</h1>
        <form>
            <a @click="sub" class="my-5 btn btn-outline-primary btn-lg" >Suscribirse</a>
        </form>
    </div>
        <p> Sistema taller ORT </p>
  </footer>
</body>
</template>

<script>
import { usuarioStore } from "../src/store/usuario.js";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = usuarioStore();
    const { usuario, estaLogeado } = storeToRefs(store);
    return {
      store,
      usuario,
      estaLogeado,
    };
  },
  data() {
    return {
    };
  },
  methods: {
    sub(){
      alert('¡Gracias por suscribirte! Te va a estar llegando un mail de bienvenida.');
    }
  },
};
</script>


<style>

#pepe {
  background-color: #000000
}
#banner2{

    background-color: black;
  
    background-size: cover;
  
    color: rgb(255, 255, 255);
  
}

#foot{
  color: black;
  background-color: whitesmoke;
  text-align: left;
  padding: 20%;
  
}
#newsletter{
  background-color:aqua;
}

h2 { color: #111; font-family: 'Helvetica Neue', sans-serif; font-size: 20px; font-weight: bold; letter-spacing: -1px; line-height: 1; }

</style>
