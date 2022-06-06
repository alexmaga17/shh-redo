<template>
  <footer>
    <div class="firstContainer container">
      <img src="../../public/assets/logo-pb-branco.svg" alt="Logo" id="logo" />
    </div>
    <div class="secondContainer container">
      <span>SOME HELPING HANDS, Inc. © 2021</span>
      <p>
        A <span class="bold">Some Helping Hands</span> é um projeto da
        <span class="bold">Escola Superior de Media Artes e Design</span>
        do
        <span class="bold">Instituto Politécnico do Porto</span>
      </p>
    </div>
    <div class="thirdContainer container">
      <router-link to="#">Privacidade</router-link>
      <router-link to="#">Termos de Utilização</router-link>
      <router-link to="#">Contactos</router-link>
    </div>
    <div class="forthContainer container">
      <img src="../../public/assets/instagram.svg" alt="" class="social" />
      <img src="../../public/assets/facebook.svg" alt="" class="social" />
      <img src="../../public/assets/tiktok.svg" alt="" class="social" />
      <img src="../../public/assets/twitter.svg" alt="" class="social" />
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  font-family: "Gilroy", sans-serif;
  background-color: black;
  width: 100%;
  height: 120px;
  display: grid;
  grid-template-columns: minmax(80px, 8%) 300px auto 430px;
  bottom: 0;
  position: relative;
  z-index: 1;
}

.container {
  display: flex;
}

.firstContainer {
  height: 120px;
  position: absolute;
  grid-column: 1/2;
}

#logo {
  width: 85px;
  position: relative;
  left: -12px;
}

.secondContainer {
  grid-column: 2/3;
  color: white;
  flex-direction: column;
  justify-content: center;
}

.secondContainer span {
  font-weight: 1000;
  font-size: 9px;
}

.secondContainer p {
  font-weight: 700;
  font-size: 9px;
  color: #6a6a6a;
  max-width: 180px;
  margin-bottom: 0;
}

.bold {
  font-weight: 700 !important;
  color: #cfcfcf;
}

.thirdContainer {
  align-items: center;
  justify-content: center;
}

a {
  color: white;
  font-family: "Gilroy", sans-serif;
  text-decoration: none;
  font-weight: 700;
  font-size: 10px;
  padding: 0 20px;
}

.forthContainer {
  align-items: flex-end;
}

.social {
  width: 50px;
  padding: 0 10px;
}
</style>
