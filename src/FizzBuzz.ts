export class FizzBuzz {
    generate(n: number) :string {
        if(n === 3){
            return "fizz";
        }
        if (n === 5 ) {
            return "buzz";
        }
        return n.toString();
    }
}