const { daysOfTheWeek } = require('./app');

TextDecoderStream('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('3/18/2023'));
    expect( day ).toBe('Wednesday');
});