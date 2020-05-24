<template>
  <ul>
    <menu-item v-for="item in items" :key="item.id" :menuItem="item"></menu-item>
  </ul>
</template>

<script>
  import menuItemComponent from './MenuItemComponent';

  export default {
    components: {
      'menu-item': menuItemComponent,
    },


    data() {
      return {
        items: [
          {
            id: 1,
            name: 'Home',
            href: '/',
          },
          {
            id: 2,
            name: 'Over mij',
            href: '/about-me',
          },
          {
            id: 3,
            name: 'Projecten',
            href: '/projects',
          }
        ]
      }
    }

  }
</script>
