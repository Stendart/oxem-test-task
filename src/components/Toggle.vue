<template>
    <div class="toggle card">
        <button @click="clickArr('left')" class="btn"> &#8592; </button>
        <span>{{pageNum + 1}}</span>
        <button @click="clickArr('right')" class="btn"> &#8594; </button>
    </div>
</template>

<script>
  export default {
    name: "Toggle",
    props: ['pageNum'],
    methods: {
      clickArr(direction) {
        this.$emit('click', direction)
      }
    }
  }
</script>

<style scoped>
.toggle {
    display: flex;
    justify-content: space-around;
    width: 30%;
border: 2px solid #56433D;

    /*box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);*/
    margin-top: 30px;
}
</style>
