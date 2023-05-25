const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  it('initializes with temperature of 20', () => {
    const thermostat = new Thermostat();

    expect(thermostat.getTemperature()).toBe(20);
  })

  it('#up increments temperature', () => {
    const thermostat = new Thermostat();

    thermostat.up();
    thermostat.up();

    expect(thermostat.getTemperature()).toBe(22);
  })

  it('#down decrements temperature', () => {
    const thermostat = new Thermostat();

    thermostat.down();
    thermostat.down();

    expect(thermostat.getTemperature()).toBe(18);
  })

  it('#down cannot decrease temperature below 10', () => {
    const thermostat = new Thermostat();

    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();

    expect(thermostat.getTemperature()).toBe(10);
  })

  it('PSM is on by default, and #up cannot increase temp above 25', () => {
    const thermostat = new Thermostat();

    expect(thermostat.psm).toBe(true);
    
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }

    expect(thermostat.getTemperature()).toBe(25);
  })


})