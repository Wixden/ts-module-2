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

  //
}
