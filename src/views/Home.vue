<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TableComponent
            :peopleList = addPartData()
            :tableHead = tableHead
            @sortData="sortedBy">
    </TableComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import TableComponent from '@/components/TableComponent.vue'

const SORTED_DIRECTION = {
  up: 'up',
  down: 'down'
}

export default {
  name: 'Home',
  data() {
    return {
      tableHead: ['id', 'firstName', 'lastName', 'email', 'phone'],
      people: []
    }
  },
  methods: {
    // делит массив с сервера на части по 50 элементов
    splitTo(arr, countEl = 50) {
      let i = 0
      return arr.reduce(( prevVal, curVal, curIndex) => {
        if(curIndex % countEl === 0) {
          prevVal.push([])
          i = 0
        }
        prevVal[prevVal.length-1][i] = curVal
        i++
        return prevVal
      }, [])
    },

    addPartData(partNum = 0) { // перенести всё в таблицу обратно и пробовтаь сортировать и отдавать по 50 через computed прям там
      const people = this.peopleList
      console.log('People = ', people)
      return people[partNum]
    },

    sortedBy(sortField, target) {
      //console.log('sortField ', sortField)
      //console.log('target ', target)
      //this.deleteClassList(SORTED_DIRECTION)
      //const target = this.$refs[sortField][0]
      const arr = this.people

      const sortDirection = target.dataset.sort_dir
      switch (sortDirection) {
        case SORTED_DIRECTION.up :
          arr.sort((a, b)=> {
            //console.log('Элемент === ', a[sortField])
            return a[sortField] < b[sortField] ? -1 : 1
          })
          target.setAttribute('data-sort_dir', SORTED_DIRECTION.down)
          target.classList.remove(SORTED_DIRECTION.down)
          target.classList.add(SORTED_DIRECTION.up)
          break
        case SORTED_DIRECTION.down :
          arr.sort((a, b)=> a[sortField] > b[sortField] ? -1 : 1)
          target.setAttribute('data-sort_dir', SORTED_DIRECTION.up)
          target.classList.remove(SORTED_DIRECTION.up)
          target.classList.add(SORTED_DIRECTION.down)
          break
      }
    },
  },
  computed: {
    peopleList() {
      this.people = this.$store.getters.getPeoples
      // Так как в исходных данных id - не уникален, добавляю собственный
      this.people.forEach((el)=> {
        el.myId = Math.random();
      })
                                          // Можно засунуть тест! Разбивает ли исходный массив на массивы по 50
      if(this.people.length > 50) {
        return this.splitTo(this.people)
      } else {
        return this.people
      }
    }
  },
  mounted() {
    this.$store.dispatch('getSmallData')
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
