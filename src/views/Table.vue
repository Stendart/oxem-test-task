<template>
  <div class="home">
      <topNavWrapper
              @showModal="showModal = true"
      ></topNavWrapper>
    <TableComponent
            :peopleList = addPartData(pageNum)
            :tableHead = tableHead
            @sortData="sortedBy">
        <template v-slot:loader>
            <Animation v-if="!addPartData(pageNum).length"></Animation>
        </template>
        <Toggle @click="clickTogle"
                :pageNum=pageNum
                :countPage="countPage">
        </Toggle>
    </TableComponent>

    <DisplayRowInfo></DisplayRowInfo>

      <Modal v-if="showModal" @close="showModal = false">
          <AddNewRow @close="showModal = false"></AddNewRow>
      </Modal>
  </div>
</template>

<script>
import TableComponent from '../components/TableComponent'
import Toggle from '../components/navigate/Toggle';
import DisplayRowInfo from '../components/DisplayRowInfo';
import Modal from '../components/modal/Modal';
import AddNewRow from '../components/modal/AddNewRow';
import topNavWrapper from '../components/navigate/topNavWrapper';
import Animation from '../components/Animation';

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
      //countPage: null,
      countElemInPatr: 50,
      showModal: false
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
      if(this.filterStr) {
        // console.log('this.filter(this.filterStr) ', this.splitTo(this.filter(this.filterStr))[partNum])

        return this.splitTo(this.filter(this.filterStr))[partNum]
      }
      // console.log('this.peopleList', this.peopleList)
      return this.peopleList[partNum]
    },

    sortedBy(sortField, target) {
      const arr = this.people

      const sortDirection = target.dataset.sort_dir
      switch (sortDirection) {
        case SORTED_DIRECTION.up :
          arr.sort((a, b)=> a[sortField] < b[sortField] ? -1 : 1)
          this.changeAttrandClass(target, 'down', 'up')
          break
        case SORTED_DIRECTION.down :
          arr.sort((a, b)=> a[sortField] > b[sortField] ? -1 : 1)
          this.changeAttrandClass(target, 'up', 'down')
          break
      }
    },

    changeAttrandClass(target, attr, className) {
      target.setAttribute('data-sort_dir', SORTED_DIRECTION[attr])
      target.classList.add(SORTED_DIRECTION[className])
    },

    clickTogle(direction) {
      if(direction === 'right' && this.pageNum < this.countPage - 1) {
        this.pageNum ++
      } else if (direction === 'left' && this.pageNum > 0) {
        this.pageNum --
      }
    },

    // фильтраия по всем полям
    filter(subString) {
      if(!subString) {
        console.log('Filter string is empty')
        return this.people
      }
      let newArray = this.people.filter((element) => {
        const valArr = Object.values(element)
          for (let e of valArr) {
            if(e.toString().indexOf(subString) !== -1) {
              return true
            }
        }
      })

      return newArray
    }
  },
  computed: {
    peopleList() {
      this.people = this.$store.getters.getPeoples

      if(this.people.length > this.countElemInPatr) {
        return this.splitTo(this.people)
      } else {
        return [this.people]
      }
    },

    countPage() {
      if(this.filterStr) {
        this.pageNum = 0
        return Math.ceil(this.filter(this.filterStr).length/this.countElemInPatr)
      }
      return Math.ceil(this.people.length/this.countElemInPatr)
    },

    filterStr() {
      return this.$store.getters['filterSubstring/getFilterSubstr']
    }
  },
  mounted() {
    const dataSize = this.$route.query.dataSize
    this.$store.dispatch('getData', dataSize)
  },
  components: {
    TableComponent,
    Toggle,
    DisplayRowInfo,
    Modal,
    AddNewRow,
    topNavWrapper,
    Animation
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
