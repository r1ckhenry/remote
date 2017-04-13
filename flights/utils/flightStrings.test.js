const flightStrings = require( "./flightStrings.js" );

test( "returns price as a number", () => {
    const flightString = "£872round trip16:30 – 09:10+2EI 3257 operated by Stobart Air for Aer LingusEtihad, Aer Lingus · Stobart Air for Aer Lingus32h 40m2 stopsDUB, AUH"
    expect( flightStrings.getPrice( flightString ) ).toBe( 872 );
})
