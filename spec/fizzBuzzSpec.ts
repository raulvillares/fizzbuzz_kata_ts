import { FizzBuzz } from ".././src/FizzBuzz";

describe("FizzBuzz should", function() {
    describe("when number is 1", function() {
        it("returns 1", function() {

            let fizzBuzz = new FizzBuzz();

            let result = fizzBuzz.generate(1);
        
            expect(result).toBe("1");
        });
    });
  });