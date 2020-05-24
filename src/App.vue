<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Over mij</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  * {
    font-family: 'Roboto', sans-serif;
  }
  #nav {
    margin-top: 3em;
    text-align: center;
    background-color: #fff;
  }
  #nav a {
    padding: 1em 2em;
    text-decoration: none;
    color: #12CBC4;
    font-size: 1.3rem;
    font-weight: 600;
  }
  #nav a:hover {
    color: #EA2027;
  }
  #container {
    margin: 0 5em;
  }
</style>
