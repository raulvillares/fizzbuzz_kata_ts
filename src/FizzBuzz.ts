export class FizzBuzz {
    generate(n: number) :string {
        if(n === 3){
            return "fizz";
        }
        return n.toString();
    }
}