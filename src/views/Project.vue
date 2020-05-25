<template>
  <div>
    <h1>Projecten</h1>
    <project-tag v-for="(project, index) in projects" :project="project" :key="index"></project-tag>
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
            description: 'Lorem ipsum de set a mon',
            links: [
              {
                'title': 'Leuk',
                'href': 'nu.nl',
              }
            ]
          })
        ],
      }
    },

    created() {
      console.log(this.projects[0].id);
    }
  }
</script>
