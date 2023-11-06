{
  // ==============================================================

  // utility types
  type Person = {
    name: string;
    age: number;
    email: string;
    phone?: string;
  };

  // creating a new type from an existing type picking only needed ones
  type NameAndAge = Pick<Person, "name" | "email">;

  // Omit (creating a new type from an existing type excluding the given key)
  type ContactInfo = Omit<Person, "name" | "age">;

  // required type (it will make a new type with the existing type with all the filled required fields)
  type RequiredPerson = Required<Person>;

  // Partial type (it will make a new type with the existing type with all the filled partial fields)
  type PartialPerson = Partial<Person>;

  // readonly types

  type PersonReadonly = Readonly<Person>;

  const person: PersonReadonly = {
    name: "John",
    age: 30,
    email: "john@gmail.com",
    phone: "1234567890",
  };

  // person.name = "Mark"

  // ==============================================================
}
