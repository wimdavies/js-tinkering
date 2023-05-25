class Thermostat {
  constructor() {
    this.temperature = 20
  }

  getTemperature() {
    return this.temperature
  }

  up() {
    this.temperature++;
  }

  down() {
    this.temperature--;
  }


}

module.exports = Thermostat