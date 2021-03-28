<template>
    <div class="card">
        <FilterForm></FilterForm>
        <button class="btn" @click="$emit('showModal')">Добавить новую запись</button>
    </div>
</template>

<script>
  import FilterForm from './FilterForm';
  export default {
    name: "topNavWrapper",
    components: {
      FilterForm
    }
  }
</script>

<style scoped>

</style>
