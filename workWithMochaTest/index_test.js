const assert = require("assert");
const Rooster = require("../index.js");

describe("Rooster Module", () => {
  describe("announceDawn", () => {
    it("returns a rooster call", () => {
      
      //setup
        const expected = 'cock-a-doodle-doo!';

      //exercise
        const result = Rooster.announceDawn();

      //verify
        assert.strictEqual(expected, result);

    });
  });

  describe("timeAtDawn", () => {
    it("returns its argument as a string", () => {
      
      //setup
        const hour = 15;
        const expected = hour.toString();

      //exercise
        const result = Rooster.timeAtDawn(hour);

      //verify
        assert.strictEqual(expected, result);

    });

    it("throws an error if passed a number less than 0", () => {
      
      //setup
        const hour = -3;

          assert.throws(
           () => { 
          // Exercise
          Rooster.timeAtDawn(hour);
          },
          RangeError, // Tipo de error esperado
          "Expected a RangeError when hour is less than 0");

    });

    it("throws an error if passed a number greater than 23", () => {
      
      //setup
        const hour = 24;

        assert.throws(
        () => { 
          // Exercise
          Rooster.timeAtDawn(hour);
          },
          RangeError, // Tipo de error esperado
          "The number is greater than 23");

    });
  });
});