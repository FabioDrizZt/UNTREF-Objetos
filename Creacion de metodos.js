const leon = {
  name: 'Lion',
  birth: 2019,
  color: 'Golden',
  sound: function () {
    return 'Roar!'
  },
  age: function () {
    return new Date().getFullYear() - this.birth
  }
}

const perro = {
  name: 'Perro',
  birth: 2018,
  color: 'White',
  sound: function () {
    return 'Guau!'
  },
  age: function () {
    return new Date().getFullYear() - this.birth
  }
}

console.log(leon.sound())
console.log(`La edad del ${leon.name} es ${leon.age()}`)

console.log(perro.sound())
console.log(`La edad del ${perro.name} es ${perro.age()}`)
