{
  // generic type

  // Dynamic type
  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [1, 2, 3, 4, 5];
  const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];

  // const mentors: string[] = ["Mr. Marshal", "Mrs. Marshal", "Mark Smith"];
  const mentors: GenericArray<string> = [
    "Mr. Marshal",
    "Mrs. Marshal",
    "Mark Smith",
  ];

  // const boolArray: boolean[] = [true, false, false, true, false];
  const boolArray: GenericArray<boolean> = [true, false, true, false];

  // Array of objects
  // In here we are declaring the type for the object property values. Now we can't make mistakes even if we want to.
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "John",
      age: 30,
    },
    {
      name: "Jane",
      age: 20,
    },
    {
      name: "Bob",
      age: 10,
    },
  ];

  // Generic Tuple:
  type GenericTuple<X, Y> = [X, Y];
  const couple: GenericTuple<string, string> = ["John", "Jane"];

  const User: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "John", email: "john@example.com" },
  ];

  //
}
