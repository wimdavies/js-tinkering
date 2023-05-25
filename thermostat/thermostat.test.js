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

    //call #down 15 times
    for (let i = 0 ; i < 15 ; i++) {
      thermostat.down();
    }

    expect(thermostat.getTemperature()).toBe(10);
  })

  it('PSM is true by default, so #up cannot increase temp above 25', () => {
    const thermostat = new Thermostat();

    expect(thermostat.psm).toBe(true);
    
    //call #up 10 times
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }

    expect(thermostat.getTemperature()).toBe(25);
  })

  it('#setPowerSavingMode can set PSM to false, and #up can increase above 25', () => {
    const thermostat = new Thermostat();

    thermostat.setPowerSavingMode(false);

    expect(thermostat.psm).toBe(false);

    //call #up 10 times
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }

    expect(thermostat.getTemperature()).toBe(30);
  })

  it('when PSM is false, #up cannot increase above 32', () => {
    const thermostat = new Thermostat();

    thermostat.setPowerSavingMode(false);

    //call #up 15 times
    for (let i = 0 ; i < 15 ; i++) {
      thermostat.up();
    }

    expect(thermostat.getTemperature()).toBe(32);
  })


})