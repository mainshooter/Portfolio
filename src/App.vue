<template>
  <div id="app">
    <div id="nav">
      <img class="logo" src="./assets/logo.png">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Over mij</router-link>
      <router-link to="/projects">Projecten</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  * {
    font-family: 'Lato', sans-serif;
  }
  #nav {
    width: 30%;
    text-align: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  #nav a {
    text-align: left;
    display: block;
    padding: 1em 2em;
    text-decoration: none;
    color: #0652DD;
    font-size: 1.3rem;
    font-weight: 600;
  }
  #nav a:hover {
    color: #EA2027;
  }

  html, body {
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
  }

  #app {
    display: flex;
  }

  .logo {
    width: 100%;
    object-fit: contain;
  }

  .content {
    width: 70%;
  }
</style>
