import { mount, createLocalVue } from '@vue/test-utils'

import TableComponent from '../components/TableComponent'

const localVue = createLocalVue()
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


describe('TableComponent', () => {
  test('sould initialize corectly', () => {
    const wrapper = mount(TableComponent,
      {
        localVue,
        propsData: {
          peopleList: testPeopleList, tableHead
        }
      })
    expect(wrapper.is(TableComponent)).toBeTruthy()
    expect(wrapper.vm.peopleList).toEqual(testPeopleList)
    expect(wrapper.vm.tableHead).toEqual(tableHead)
    expect(wrapper.vm.idx).toEqual(0)
  })
})



