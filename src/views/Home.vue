<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <FilterForm @clickSearch="applyFilter"></FilterForm>
    <TableComponent
            :peopleList = addPartData(pageNum)
            :tableHead = tableHead
            @sortData="sortedBy">
    </TableComponent>
    <Toggle @click="clickTogle" :pageNum=pageNum></Toggle>
    <DisplayRowInfo></DisplayRowInfo>
  </div>
</template>

<script>
import TableComponent from '../components/TableComponent.vue'
import Toggle from '../components/Toggle';
import FilterForm from '../components/FilterForm';
import DisplayRowInfo from '../components/DisplayRowInfo';

const SORTED_DIRECTION = {
  up: 'up',
  down: 'down'
}

export default {
  name: 'Home',
  data() {
    return {
      tableHead: ['id', 'firstName', 'lastName', 'email', 'phone'],
      people: [],
      pageNum: 0,
      countElemInPatr: 50,
      usedFilter: ''
    }
  },
  methods: {
    // делит массив с сервера на части по 50 элементов
    splitTo(arr) {
      let i = 0
      return arr.reduce(( prevVal, curVal, curIndex) => {
        if(curIndex % this.countElemInPatr === 0) {
          prevVal.push([])
          i = 0
        }
        prevVal[prevVal.length-1][i] = curVal
        i++
        return prevVal
      }, [])
    },

    addPartData(partNum = 0) {
      if(this.usedFilter) {
        return this.filter(this.usedFilter)
      }
      // console.log(this.peopleList[partNum])
      return this.peopleList[partNum]
    },

    sortedBy(sortField, target) {
      const arr = this.people
5
      const sortDirection = target.dataset.sort_dir
      switch (sortDirection) {
        case SORTED_DIRECTION.up :
          arr.sort((a, b)=> a[sortField] < b[sortField] ? -1 : 1)
          target.setAttribute('data-sort_dir', SORTED_DIRECTION.down)
          target.classList.add(SORTED_DIRECTION.up)
          break
        case SORTED_DIRECTION.down :
          arr.sort((a, b)=> a[sortField] > b[sortField] ? -1 : 1)
          target.setAttribute('data-sort_dir', SORTED_DIRECTION.up)
          target.classList.add(SORTED_DIRECTION.down)
          break
      }
    },

    clickTogle(direction) {
      const countPage = this.people.length/this.countElemInPatr
      console.log('countPage', countPage)
      if(direction === 'right' && this.pageNum < countPage - 1) {
        this.pageNum ++
      } else if (direction === 'left' && this.pageNum > 0) {
        this.pageNum --
      }
    },

    applyFilter(subString) {
      this.usedFilter = subString
    },

    filter(subString) {
      let newArray = this.people.filter((element) => {
        const valArr = Object.values(element)
          for (let e of valArr) {
            if(e.toString().indexOf(subString) !== -1) {
              return true
            }
        }
      })
      console.log('Filtered Arr ', newArray)
      return newArray
    }
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
        return [this.people]
      }
    }
  },
  mounted() {
    this.$store.dispatch('getSmallData')
  },
  components: {
    TableComponent,
    Toggle,
    FilterForm,
    DisplayRowInfo
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
