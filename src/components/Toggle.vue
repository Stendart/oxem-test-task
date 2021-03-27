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
}
.btn {
    width: 100px;
    color: #42b983;
    position: relative;
    place-content: center;
    place-items: center;
    /*width: fit-content;*/
    border-radius: 99px;
    letter-spacing: 0.05em;
    border: 1px solid #42b983;
    text-decoration: none;
    text-transform: uppercase;
    /*margin-right: 10px;*/
    padding: 0.5rem 1.5rem;
    white-space: nowrap;
    font-weight: 700;
    outline: none;
    background: #fff;
    transition: all 0.22s;
}

.btn:hover {
    cursor: pointer;
    opacity: 0.8;
}

.btn:disabled {
    cursor: not-allowed;
    opacity: 1;
    background: #eee;
    border-color: #ddd;
    color: #999;
}

.btn:active {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

</style>
