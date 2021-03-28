<template>
  <div class="about">
    <div class="card">
      <h1>Выберите набор данных:</h1>
      <div class="selectDataset">
        <button class="btn" @click="selectData('small')">Маленький</button>
        <button class="btn" @click="selectData('big')">Большой</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "SelectData",
    methods: {
      selectData(dataSize) {
        this.$store.dispatch('getData', dataSize)
        this.$router.push('/table')
      }
    },
    mounted() {
      this.$store.commit('clearDate')
    }
  }
</script>
<style scoped>
  .about, .card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .selectDataset {
    display: flex;
    width: 70%;
    justify-content: space-around;
    margin: 2rem 1rem 1rem;
  }
</style>
