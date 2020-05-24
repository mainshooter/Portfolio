<template>
  <li>
    <a :href="menuItem.href" v-text="menuItem.name"></a>
  </li>
</template>

<script>
  export default {
    props: ['menuItem'],
    created() {
      console.log(this.menuItem);
    }
  }
</script>
