<template>
        <div class="card center" v-if="rowInfo.myId">
            <p>
                Выбран пользователь <b>{{ rowInfo.firstName + ' ' + rowInfo.lastName}}</b>
            </p>
            <p>
                Описание:<textarea>{{rowInfo.description}}</textarea>
            </p>
            <template  v-if="rowInfo.address">
                <p>
                    Адрес проживания: <b>{{rowInfo.address.streetAddress}}</b>
                </p>
                <p>
                    Город: <b>{{rowInfo.address.city}}</b>
                </p>
                <p>
                    Провинция/штат: <b>{{rowInfo.address.state}}</b>
                </p>
                <p>
                    Индекс: <b>{{rowInfo.address.zip}}</b>
                </p>
            </template >
            <div class="card" v-else>У пользователя не указан адресс</div>

        </div>

</template>

<script>
  export default {
    name: "DisplayRowInfo",
    computed: {
      rowInfo() {
        console.log('===', this.$store.getters['selectRowInfo/getRowData'])
        return this.$store.getters['selectRowInfo/getRowData']
      }
    }
  }
</script>

<style scoped>
.card p {
    margin-bottom: 1rem;
    width: 50%;
    display: flex;
    justify-content: space-between;
}
</style>
