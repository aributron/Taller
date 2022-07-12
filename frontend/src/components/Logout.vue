<template>
  <body>
    
    <div id = "tab">
      <h2>Logout</h2>
      <p>¿Está seguro que quiere continuar?</p>
      <button type="button" class="btn btn-dark" @click="logout">Salir</button>
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
    const { logout } = store;
    return {
      store,
      estaLogeado,
      logout,
    };
  },

  methods: {
    logout() {
        this.logout();
        this.$router.push("/");
    },
  },
};
</script>

<style>
#tab {
  padding: 20px;
}
</style>