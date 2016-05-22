interface Person {
  firstName: string;
  lastName: string;
}



module s {
  export class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    greeter(person: Person): string {
      return "Hello, " + person.firstName + person.lastName;
    }
  }
}