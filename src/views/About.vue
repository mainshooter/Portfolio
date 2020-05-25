<template>
  <div class="about content">
    <h1>Over mij</h1>
    <p>Ik ben Peter Romijn een programmeur met onderzoekskills.</p>

    <h2>Mijn skills</h2>
    <ul class="skill-list">
      <li v-for="skill in skills" :key="skill" v-text="skill"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        skills: ['HTML/CSS', 'PHP', 'JavaScript', 'Vue.JS', 'Ionic', 'NodeJS', 'Java', 'Docker', 'Git', 'C#'],
      }
    }
  }
</script>

<style>
  .skill-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .skill-list li {
    width: 20%;
    list-style: none;
    padding: 1em 2em;
  }
</style>
