<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TableComponent :peopleList = peopleList></TableComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import TableComponent from '@/components/TableComponent.vue'

export default {
  name: 'Home',
  data() {
    return {
      peoples: []
    }
  },
  mounted() {
    this.$store.dispatch('getSmallData')
  },
  computed: {
    peopleList() {
      return this.$store.getters.getPeoples
    }
  },
  components: {
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
