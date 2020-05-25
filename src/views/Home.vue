<template>
  <div class="content home flex flex-center">
    <div class="home-container flex">
      <div class="home-text">
        <h1>Hoi, Ik ben Peter Romijn!</h1>
        <h2>Developer</h2>
        <h2>Badmintonner</h2>
      </div>
      <div class="home-photo">
        <img class="round" src="../assets/peter.jpg">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
  .home-container {
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }
  .home-text {
    width: 50%;
  }
  .home-photo {
    width: 50%;
  }
  .home-photo img {
    width: 300px;
  }
  .round {
    border-radius: 100%;
  }

</style>
