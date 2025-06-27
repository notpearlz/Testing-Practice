const capitalize = require('../modules/capitalize')

test('Capitalize', ()=>{
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("HELLO")).toBe("HELLO");
    expect(capitalize("Hello")).toBe("Hello");

});