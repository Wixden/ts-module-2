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

  //
}
