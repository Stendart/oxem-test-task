import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import Table from '../views/Table'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

const router = new VueRouter()


const testPeopleList = [
  {
    id: 101,
    firstName: 'Sue',
    lastName: 'Corson',
    email: 'DWhalley@in.gov',
    phone: '(612)211-6296',
    address: {
      streetAddress: '9792 Mattis Ct',
      city: 'Waukesha',
      state: 'WI',
      zip: '22178'
    },
    description: 'et lacus magna dolor...',
  },
  {
    id: 102,
    firstName: 'Sue',
    lastName: 'Corson',
    email: 'DWhalley@in.gov',
    phone: '(612)211-6296',
    address: {
      streetAddress: '9792 Mattis Ct',
      city: 'Waukesha',
      state: 'WI',
      zip: '22178'
    },
    description: 'et lacus magna dolor...',
  },
]
const tableHead = ['id', 'firstName', 'lastName', 'email', 'phone']


describe('Table', () => {
  let getters
  let actions
  let store
  beforeEach(() => {
    getters = {
      getPeoples: () => testPeopleList,
      //getFilterSubstr: () => 'input'
    }
    actions = {
      getData: jest.fn(),
    }

    store = new Vuex.Store({
      getters,
      actions
    })
  })

  test('getter should return equal data', () => {
    const wrapper = shallowMount(Table, { store, localVue, router })
    expect(wrapper.vm.peopleList).toStrictEqual([getters.getPeoples()])
  })
  test('action getData have been called', () => {
    const wrapper = shallowMount(Table, { store, localVue, router })
    expect(actions.getData).toHaveBeenCalled()
  })

  test('sould initialize corectly', () => {
    const wrapper = shallowMount(Table, { store, localVue, router })
    expect(wrapper.is(Table)).toBeTruthy()
    expect(wrapper.vm.tableHead).toEqual(tableHead)
    expect(wrapper.vm.countElemInPatr).toEqual(50)
    expect(wrapper.vm.showModal).toEqual(false)
  })
})



