<template>
  <div id="app" class="flex flex-column">
    <div class="flex flex-row">
      <div id="nav" class="flex flex-column">
        <img class="logo" src="./assets/logo.png">
        <router-link to="/">Home</router-link>
        <router-link to="/about">Over mij</router-link>
        <router-link to="/projects">Projecten</router-link>
      </div>
      <router-view>
      </router-view>
    </div>
    <div class="footer flex flex-center">
      &copy; Peter Romijn
    </div>
  </div>
</template>

<style>
  * {
    font-family: 'Lato', sans-serif;
  }
  .flex {
    display: flex;
  }
  .flex-column {
    flex-direction: column;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-center {
    justify-content: center;
    align-items: center;
  }
  #nav {
    width: 30%;
    text-align: center;
    background-color: #fff;
    height: 90vh;
  }
  #nav a {
    text-align: left;
    display: block;
    padding: 1em 2em;
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    font-weight: 600;
  }
  #nav a:hover {
    color: gray;
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
    height: 90vh;
    width: 70%;
  }

  .footer {
    width: 100%;
    padding: 0.5em 0;
    background-color: black;
    color: #fff;
  }
</style>
