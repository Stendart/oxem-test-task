<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TableComponent></TableComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TableComponent from '@/components/TableComponent.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    TableComponent
  }
}
</script>
<style>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
