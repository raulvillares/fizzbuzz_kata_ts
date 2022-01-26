import { FizzBuzz } from ".././src/FizzBuzz";

describe("FizzBuzz should", function() {
    describe("when number is not 3", function() {
        it("returns the number", () => {
            [
                [1],
                [2],
                [4]
            ].forEach(([number]) => {
                let fizzBuzz = new FizzBuzz();
                let result = fizzBuzz.generate(number);
                expect(result).toBe(number.toString());
            })
        });
    });

        describe("when number is 3", function() {
        it("returns fizz", function() {

            let fizzBuzz = new FizzBuzz();

            let result = fizzBuzz.generate(3);
        
            expect(result).toBe("fizz");
        });
    });

    describe("when number is 5", function() {
        it("returns buzz", function() {

            let fizzBuzz = new FizzBuzz();

            let result = fizzBuzz.generate(5);
        
            expect(result).toBe("buzz");
        });
    });
  });