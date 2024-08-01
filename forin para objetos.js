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

for (const key in leon) {
  console.log(key)
  if (typeof leon[key] === 'function') {
    leon[key]()
  } else {
    console.log(leon[key])
  }
}
