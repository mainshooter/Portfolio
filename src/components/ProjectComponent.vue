<template>
  <div class="project flex flex-row">
    <div class="project-image">
      <img v-if="project.image" :src="project.image"/>
    </div>
    <div class="project-description">
      <h3 v-text="project.title"></h3>
      <p v-text="project.description"></p>
      <ul class="links" v-if="project.links.length > 0">
        <li v-for="(link, index) in project.links" :key="index">
          <a :href="link.href" v-text="link.title"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ProjectComponent',
    props: ['project'],
  }
</script>

<style>
.project {
  width: 50%;
}
  .project-description {
    width: 100%;
  }
</style>
