{
  // Interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
    address: string;
  }

  const user1: User2 = {
    name: "John",
    age: 30,
    address: "New York",
  };

  // we can use type for primitive types but we can't use interface for primitive types.
  type rollNumber = number;

  // Type intersection: type/interface
  type UserWithRoll1 = User1 & { roll: rollNumber };
  const user3: UserWithRoll1 = {
    name: "John",
    age: 30,
    roll: 10,
  };

  // To extent interface we have to use extends keyword. We can also use extends in type
  interface UserWithRoll2 extends User1 {
    roll: rollNumber;
  }

  const user4: UserWithRoll2 = {
    name: "John",
    age: 30,
    roll: 10,
  };

  // js --> object, array --> object, fuction --> object,
  type Roll = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const roll: Roll = [1, 2, 3];
  const roll2: Roll2 = [1, 2, 3]; //0 1 2 3 -> number type index

  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add1 = (num1, num2) => num1 + num2;
  const add2: Add2 = (num1, num2) => num1 + num2;

  //
}
