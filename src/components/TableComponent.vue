<template>
    <div class="card center">
        <table class="table">
            <caption>People list</caption>
            <thead>
                <tr>
                    <th @click="sortedBy($event, 'id')" data-sort_dir="up" >
                        id
                    </th>
                    <th @click="sortedBy($event, 'firstName')" data-sort_dir="up">
                        firstName
                    </th>
                    <th @click="sortedBy($event, 'lastName')" data-sort_dir="up">
                        lastName
                    </th>
                    <th @click="sortedBy($event, 'email')" data-sort_dir="up">
                        email
                    </th>
                    <th @click="sortedBy($event, 'phone')" data-sort_dir="up">
                        phone
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="p in peopleList" :key="p.id">
                    <td>{{p.id}}</td>
                    <td>{{p.firstName}}</td>
                    <td>{{p.lastName}}</td>
                    <td>{{p.email}}</td>
                    <td>{{p.phone}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
const SORTED_DIRECTION = {
  up: 'up',
  down: 'down'
}
let target = ''

export default {
name: "TableComponent",
  props: {
    peopleList: Array
  },
  methods: {
    sortedBy(e, sortField) { // разбить методы на сортировку и удаление классов

      if (target !== e.target) {
        console.log('НЕ РАВНЫ!')
        target.classList?.remove(SORTED_DIRECTION.down)
        target.classList?.remove(SORTED_DIRECTION.up)
        target = e.target
      }
      const sortDirection = e.target.dataset.sort_dir
      // console.log('Sorted by', e.target)

      //e.target.setAttribute('data-sort_dir', SORTED_DIRECTION.down);

      switch (sortDirection) {
        case SORTED_DIRECTION.up :
          this.peopleList.sort((a, b)=> a[sortField] < b[sortField] ? -1 : 1)
          e.target.setAttribute('data-sort_dir', SORTED_DIRECTION.down)
          e.target.classList.remove(SORTED_DIRECTION.down)
          e.target.classList.add(SORTED_DIRECTION.up)
          break
        case SORTED_DIRECTION.down :
          this.peopleList.sort((a, b)=> a[sortField] > b[sortField] ? -1 : 1)
          e.target.setAttribute('data-sort_dir', SORTED_DIRECTION.up)
          e.target.classList.remove(SORTED_DIRECTION.up)
          e.target.classList.add(SORTED_DIRECTION.down)
          break
      }
    }
  }
}
</script>

<style scoped>
    .table {
        width: 90%;
        border-collapse: collapse;
    }

    .table caption {
        padding: 1rem 1rem 2rem 1rem;
        font-weight: bold;
        font-size: 21px;
    }

    .table thead {
        border: 2px solid #56433D;
    }
    .table th {
        /*padding: .5rem 1rem;*/
        padding: 10px 20px;
        background: #56433D;
        color: #F9C941;
        border-right: 2px solid;
        font-size: 0.9em;

        cursor: pointer;
    }

    .table th:last-child {
        border-right: none;
    }

    .table td {
        vertical-align: middle;
        padding: 10px;
        font-size: 14px;
        text-align: center;
        border-top: 2px solid #56433D;
        border-bottom: 2px solid #56433D;
        border-right: 2px solid #56433D;
    }
    .table td:first-child {
        border-left: 2px solid #56433D;
        /*border-right: none;*/
    }

    .table tbody td {
        text-align: center;
    }

    .table tbody tr:hover {
        background: #eee;
    }

    .card {
        width: 90%;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 10px;
        box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
        background: #fff;
    }

    .card.center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .up:after {
        content: '\2191';  /*  \2193  */
    }

    .down:after {
        content: '\2193';  /*  \2193  */
    }

</style>
