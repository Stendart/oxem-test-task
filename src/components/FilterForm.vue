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
        this.$emit('clickSearch', search.value)
        this.$refs.search.value = ''
      }
    }
  }
</script>

<style scoped>

    .form-control {
        position: relative;
        margin-bottom: 0.5rem;
    }

    .form-control input {
        margin: 0;
        outline: none;
        border: 2px solid #ccc;
        display: block;
        width: 70%;
        color: #2c3e50;
        padding: 0.5rem 1.5rem;
        border-radius: 3px;
        font-size: 1rem;
        resize: none;
    }

    .form-control label {
        display: block;
        margin: 0 0 0.3rem 0.3rem;
        font-weight: 500;
    }

    .form-control input:active,
    .form-control input:focus {
        transition: border 0.22s;
        border: 2px solid #42b983;
    }

    .search-wrap {
        display: flex;
        justify-content: space-between;
    }

    .btn {
        width: 20%;
    }
</style>
