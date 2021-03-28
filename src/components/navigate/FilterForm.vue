<template>
    <div class="card">
        <form class="form-control">
            <label for="filter">Введите искомое слово</label>
            <div class="search-wrap">
                <input ref="search" id="filter" type="text">
                <button type="button" class="btn" @click="filter"> Найти </button>
            </div>
        </form>
    </div>
</template>

<script>

  export default {
    name: "FilterForm",
    methods: {
      filter() {
        const search = this.$refs.search
        this.$store.commit('filterSubstring/setFilterSubstr', search.value)
        // this.$emit('clickSearch', search.value)
        this.$refs.search.value = ''
      }
    }
  }
</script>

<style scoped>
    .search-wrap {
        display: flex;
        justify-content: space-between;
    }

    .btn {
        width: 20%;
    }
</style>
