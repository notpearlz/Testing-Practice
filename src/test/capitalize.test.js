const capitalize = require('../modules/capitalize')

test('capitalize', ()=>{
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("HELLO")).toBe("HELLO");
    expect(capitalize("Hello")).toBe("Hello");

});