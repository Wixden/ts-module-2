{
  // generic type with functions

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const result1 = createArray("Bangladesh");
  const result2 = createArrayWithGeneric<boolean>(true);

  interface User {
    id: number;
    name: string;
    email: string;
  }

  const result3 = createArrayWithGeneric<User>({
    id: 1,
    name: "Akhtar",
    email: "akhtar@gmail.com",
  });

  // tuple with generic function
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const result4 = createArrayWithTuple<string, number>("Bangladesh", 2023);

  interface User2 {
    id: number;
    name: string;
    email: string;
    phone: number;
  }

  const result5 = createArrayWithTuple<User2, string>(
    {
      id: 1,
      name: "Akhtar",
      email: "akhtar@gmail.com",
      phone: 987654321,
    },
    "Bangladesh"
  );

  //
}
