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

  it('#reset resets temp to 20, from above and below', () => {
    const thermostat = new Thermostat();

    thermostat.up();
    thermostat.up();

    thermostat.reset();

    expect(thermostat.getTemperature()).toBe(20);
    
    thermostat.down();
    thermostat.down();

    thermostat.reset();

    expect(thermostat.getTemperature()).toBe(20);
  })

  it('#getCurrentEnergyUsage returns "low-usage" when temp is < 18', () => {
    const thermostat = new Thermostat();

    //call #down 5 times
    for (let i = 0 ; i < 5 ; i++) {
      thermostat.down();
    }

    expect(thermostat.getCurrentEnergyUsage()).toBe('low-usage');
  })

  it('#getCurrentEnergyUsage returns "medium-usage" when temp is <= 25', () => {
    const thermostat = new Thermostat();

    //call #up 5 times
    for (let i = 0 ; i < 5 ; i++) {
      thermostat.up();
    }

    expect(thermostat.getCurrentEnergyUsage()).toBe('medium-usage');
  })

  it('#getCurrentEnergyUsage returns "high-usage" when temp is > 25', () => {
    const thermostat = new Thermostat();

    thermostat.setPowerSavingMode(false);

    //call #up 10 times
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }

    expect(thermostat.getCurrentEnergyUsage()).toBe('high-usage');
  })
})