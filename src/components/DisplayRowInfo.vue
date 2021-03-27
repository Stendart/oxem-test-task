<template>
    <div class="card center">

        Выбран пользователь <b>{{ rowInfo.firstName + rowInfo.lastName}}</b>
        Описание:
        <textarea>
        {{rowInfo.description}}
        </textarea>
        Адрес проживания: <b>{{rowInfo.address.streetAddress}}</b>
        Город: <b>{{rowInfo.address.city}}</b>
        Провинция/штат: <b>{{rowInfo.address.state}}</b>
        Индекс: <b>{{rowInfo.address.zip}}</b>
    </div>
</template>

<script>
  export default {
    name: "DisplayRowInfo",
    computed: {
      rowInfo() {
        return this.$store.getters['selectRowInfo/getRowData']
      }
    }
  }
</script>

<style scoped>

</style>
