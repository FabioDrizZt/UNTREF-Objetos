function Animal (name, birth, color, sound) {
  this.name = name
  this.birth = birth
  this.color = color
  this.sound = function () {
    return sound
  }
  this.age = function () {
    return new Date().getFullYear() - this.birth
  }
}

const leon = new Animal('Mufasa', 2019, 'Golden', 'Roar !')
const perro = new Animal('Dogpool', 2018, 'White', 'Guau !')

console.log(`La edad del ${leon.name} es ${leon.age()}`)
console.log(`El hace: ${leon.sound()}`)

console.log(`La edad del ${perro.name} es ${perro.age()}`)
console.log(`El hace: ${perro.sound()}`)
