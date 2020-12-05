class Hero {
  constructor({ id, name, age, power }) {
    this.id = Math.floor(Math.random() * 100) + Date.now()
    this.name = name
    this.age = age
    this.power = power
  }

  isValid() {
    const propertyNames = Object.getOwnPropertyNames(this)
    const amountInvalid = propertyNames
      .map(property => (!!this[property]) ? null : `${property} is missing!`)
      .filter(Boolean)

    return {
      valid: !amountInvalid.length,
      error: amountInvalid
    }
  }
}

module.exports = Hero
