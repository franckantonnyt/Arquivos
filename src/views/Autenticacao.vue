<template>
  <div class="container">
    <div class="tittle"></div>
    <div class="formulario">
      <div class="user">
        <input type="text" v-model="email" placeholder="Usuario">
      </div>
      <div class="pass">
        <input type="password" v-model="senha" placeholder="Senha">
      </div>
      <div class="lembrarS">
        <input type="checkbox" value="lembrarSenha" v-model="lembrarSenha">
        <h4>Lembrar Senha</h4>
      </div>
      <div class="buttonLogin">
        <button class="btn" v-bind:class="btnClassLogin">Sing-in</button>
      </div>
      <div class="RecuperarSenha">
        <span class="icon icon--info">
          <a href="#">Recuperar a Senha</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  email: "",
  senha: "",
  btnClassLogin: "btn-primary",
  lembrarSenha: ""
};
</script>

<style scoped>
.container {
  border-radius: 8px;
  border: 4px solid;
  border-style: outset;
  border-color: rgb(123, 25, 29, 0.9);
  padding: 10px;
  margin: 0 auto;
  width: 35%;
  height: 360px;
  position: relative;
  top: 200px;
  background: radial-gradient(ellipse at center, #eef4f8 0%, #b8c9d6 100%);
  box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.9);
}
.tittle {
  text-align: center;
  font-size: 20px;
  padding: 50px;
  background-image: url("../assets/logo-alfa.png");
  background-size: 100px;
  background-position: 50%;
  background-repeat: no-repeat;
}
.formulario {
  text-align: center;
  padding: 10px;
}
input {
  border-radius: 3px;
  background: transparent;
  border: none;
  border-bottom: 2px solid rgb(123, 25, 29, 0.9);
  margin: 3px;
  position: relative;
  bottom: 10px;
  width: 210px;
  height: 30px;
}
.lembrarS {
  display: flex;
  position: relative;
  left: 118px;
  width: 40%;
}
.lembrarS input {
  position: relative;
  width: 10%;
  bottom: 4px;
}
.lembrarS h4 {
  font-size: 13px;
  position: relative;
  top: 8px;
  color: dimgrey;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
.buttonLogin button {
  position: relative;
  top: 10px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  border-radius: 8px;
  border: 2px solid rgb(123, 25, 29, 0.9);
  padding: 8px 70px;
  font-size: 16px;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.buttonLogin button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  background-color: rgb(123, 25, 29, 0.9);
  color: white;
}
.RecuperarSenha {
  position: relative;
  top: 30px;
}
</style>
