<template>
    <div>
        <form @submit="onSubmit" class="form-control">
                <div :class="{'invalid' : this.id.isError}">
                    <label for="id">id</label>
                    <input @focus="focusElem('id')"
                           type="number" ref="id"
                           id="id"
                           v-model.number="id.value">
                    <small v-if="this.id.isError">{{ this.id.isError}}</small>
                </div>

                <div :class="{'invalid' : this.firstName.isError}">
                    <label for="firstName">FirstName</label>
                    <input @focus="focusElem('firstName')"
                           type="text"
                           id="firstName"
                           v-model.trim="firstName.value">
                    <small v-if="this.firstName.isError">{{this.firstName.isError}}</small>
                </div>

                <div :class="{'invalid' : this.lastName.isError}">
                    <label for="lastName">LastName</label>
                    <input @focus="focusElem('lastName')"
                           type="text"
                           id="lastName"
                           v-model.trim="lastName.value">
                    <small v-if="this.lastName.isError">{{this.lastName.isError}}</small>
                </div>

                <div :class="{'invalid' : this.email.isError}">
                    <label for="email">email</label>
                    <input @focus="focusElem('email')"
                           type="text"
                           ref="email"
                           id="email"
                           v-model="email.value">
                    <small v-if="this.email.isError">{{this.email.isError}}</small>
                </div>

                <div :class="{'invalid' : this.phone.isError}">
                    <label for="phone">phone</label>
                    <input @focus="focusElem('phone')"
                           type="text"
                           ref="phone"
                           id="phone"
                           v-model.number="phone.value">
                    <small v-if="this.phone.isError">{{this.phone.isError}}</small>
                </div>

                <button class="btn primary" :disabled="!enableBtn">Добавить в таблицу</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: "AddNewRow",
    data() {
      return {
        id: {value: null, isError: false},
        firstName: {value: null, isError: false},
        lastName: {value: null, isError: false},
        email: {value: null, isError: false},
        phone: {value: null, isError: false},
        isErrorValidate: false
      }
    },
    methods: {
      onSubmit(e) {
        this.isErrorValidate = false

        this.isRequaired(this.id)
        this.isRequaired(this.firstName)
        this.isRequaired(this.lastName)
        this.isRequaired(this.email)
        this.isRequaired(this.phone)

        this.isValidEmail(this.email)
        this.isAllLetters(this.firstName)
        this.isAllLetters(this.lastName)
        this.isCorrectPhone(this.phone)



        if(!this.isErrorValidate) {
          this.$store.commit('addNewRow',
            {
              id: this.id.value,
              firstName: this.firstName.value,
              lastName: this.lastName.value,
              email: this.email.value,
              phone: this.phone.value,
              myId: Math.random(),
            })
          this.$emit('close')
        }

        e.preventDefault();
      },

      isRequaired(field) {
        if(!field.value) {
          field.isError = 'Обязательное поле'
          this.isErrorValidate = true
        }
      },

      isValidEmail(email) {
        const regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regExpEmail.test(email.value)) {
          email.isError = 'Неверный формат'
          this.isErrorValidate = true
        }
      },

      isAllLetters(obj) {
        const regExpLetters = /^([a-zа-яё]+)$/i
        if(!regExpLetters.test(obj.value)) {
          obj.isError = 'Должны быть лишь буквы'
          this.isErrorValidate = true
        }
      },

      isCorrectPhone(phone) {
        // /^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/
        // формат 8 (999) 123-45-64
        const regExpPhone = /^\d[\d\(\)\ -]{4,14}\d$/
        if(!regExpPhone.test(phone.value)) {
          phone.isError = 'Некорректный формат номера'
          this.isErrorValidate = true
        }
      },

      focusElem(elem) {
        this[elem].isError = false
      }
    },
    computed: {
      enableBtn() {
        if(this.id.value &&
          this.firstName.value &&
          this.lastName.value &&
          this.email.value &&
          this.phone.value) {
          return true
        }
        return false
      }
    }
  }
</script>

<style scoped>
    .form-control input {
       margin: 0 auto;
    }
    .form-control div {
        margin-bottom: 1rem;
    }
    .invalid input {
        border-color: #e53935;
    }
</style>
