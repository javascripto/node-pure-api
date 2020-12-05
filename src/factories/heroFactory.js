const { resolve } = require('path')

const HeroService = require('../services/heroService')
const HeroRepository = require('../repositories/heroRepository')

function generateInstance() {
  const filename = resolve(__dirname, '../../database', 'data.json')
  const heroRepository = new HeroRepository({
    file: filename
  })
  const heroService = new HeroService({
    heroRepository
  })
  return heroService
}

module.exports = { generateInstance }
