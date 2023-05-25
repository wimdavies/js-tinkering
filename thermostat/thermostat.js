class Thermostat {
  constructor() {
    this.temperature = 20
    this.psm = true
  }

  getTemperature() {
    return this.temperature
  }

  up() {
    switch (this.psm) {
      case (true):
        if (this.temperature < 25) this.temperature++;
        break;
      case false:
        if (this.temperature < 32) this.temperature++;
    }
  }

  down() {
    if (this.temperature > 10) this.temperature--; 
  }

  setPowerSavingMode(boolean) {
    this.psm = boolean
  }


}

module.exports = Thermostat