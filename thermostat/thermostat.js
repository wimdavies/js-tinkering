class Thermostat {
  constructor() {
    this.temperature = 20
    this.psm = true
  }

  getTemperature() {
    return this.temperature
  }

  up() {
    if (this.psm = true && this.temperature < 25) this.temperature++;
  }

  down() {
    if (this.temperature > 10) this.temperature--; 
  }


}

module.exports = Thermostat