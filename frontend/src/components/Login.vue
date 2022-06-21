<template>
<body>
  
  <div>
    <h2>Login</h2>
    <div class="row g-3 align-items-center">
      <div class="col-auto">
        <label class="col-form-label">Ingrese su correo:</label>
      </div>
      <div class="col-auto">
        <input type="email" v-model="usuario.email" class="form-control">
      </div>
    </div>

    <div class="row g-3 align-items-center">
      <div class="col-auto">
        <label class="col-form-label">Contraseña:</label>
      </div>
      <div class="col-auto">
        <input type="password" v-model="usuario.password" class="form-control">
      </div>
    </div>

    <button type="button" class="btn btn-dark" @click="login">Login </button>
    {{ error.msg }}
  </div>
</body>
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
      error: {msg: ""}
    };
  },
  methods: {
      
    async login() {
      
      const copiaUsuario = { ...this.usuario };
      await this.login(copiaUsuario);
     
      if (this.estaLogeado) {
        this.$router.push("/");
      } else {
        this.error.msg = "Incorrect user or password"
      }
    },
  },
};
</script>

<style>
</style>