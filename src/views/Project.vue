<template>
  <div class="project content">
    <h1>Projecten</h1>
    <div class="project-container flex flex-row">
      <project-tag v-for="(project, index) in projects" :project="project" :key="index"></project-tag>
    </div>
  </div>
</template>

<script>
  import { Project } from '../model/Project.js';
  import ProjectComponent from '../components/ProjectComponent.vue';

  export default {
    components: {
      'project-tag': ProjectComponent,
    },
    data() {
      return {
        projects: [
          new Project({
            title: 'Test project',
            image: 'https://peter-romijn.nl/file/kermis_weert_logo.png',
            description: 'Lorem ipsum de set a mon',
            links: [
              {
                'title': 'Leuk',
                'href': 'nu.nl',
              }
            ]
          }),
          new Project({
            title: 'Dialogic',
            image: 'https://peter-romijn.nl/file/kermis_weert_logo.png',
            description: 'Lorem ipsum',
          }),
        ],
      }
    },
  }
</script>
