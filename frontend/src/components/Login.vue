<template>
  <div>
    <h2>Login</h2>
    correo <input type="email" v-model="usuario.email" /> password
    <input type="password" v-model="usuario.password" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { usuarioStore } from "../store/usuario.js";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = usuarioStore();
    const { estaLogeado } = storeToRefs(store);
    const { login, seLogueo } = store;
    return {
      store,
      estaLogeado,
      login,
      seLogueo
    };
  },
  data() {
    return {
      usuario: { email: "", password: "" },
    };
  },
  methods: {
      
    login() {
      const loggedIn = localStorage.getItem('usuario');
      const copiaUsuario = { ...this.usuario };
      this.login(copiaUsuario);
      console.log(loggedIn);
      if (loggedIn != null) {
        this.$router.push("/vehiculo");
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
</style>