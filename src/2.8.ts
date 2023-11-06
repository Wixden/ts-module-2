{
  // =================================================================

  // promise
  // interface:
  interface User {
    name: string;
    email: string;
    password: string;
    phone: string;
  }

  const user: User = {
    name: "John",
    email: "johndoe@gmail.com",
    password: "JohnDoePassword",
    phone: "1234567890",
  };

  // TODO data type
  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  // using jsonplaceholder
  const getTodoData = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    return data;
  };
  getTodoData();

  // simulate
  const createPromise = (): Promise<User> => {
    return new Promise<User>((resolve, reject) => {
      const data: User = user;
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  // calling create promise function
  const showData = async (): Promise<User> => {
    const data: User = await createPromise();
    console.log({ data });
    return data;
  };

  showData();

  // =================================================================
}
