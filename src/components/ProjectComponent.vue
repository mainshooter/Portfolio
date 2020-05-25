<template>
  <div class="project">
    <div class="project-image">
      <img v-if="project.image" :src="project.image"/>
    </div>
    <div class="project-description">
      <h3 v-text="project.title"></h3>
      <p v-text="project.description"></p>
      <ul class="links" v-if="project.links.length > 0">
        <li v-for="link in project.links" :key="link" :href="link.href" v-text="link.text"></li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ProjectComponent',
    props: ['project'],
    created() {
    }
  }
</script>
