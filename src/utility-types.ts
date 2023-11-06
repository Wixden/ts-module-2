{
  // ==============================================================

  // utility types
  type Person = {
    name: string;
    age: number;
    email: string;
    phone?: string;
  };

  // creating a new type from an existing type
  type NameAndAge = Pick<Person, "name" | "email">;

  // Omit;
  type ContactInfo = Omit<Person, "name" | "age">;

  // required type (it will make a new type with the existing type with all the filled required fields)
  type RequiredPerson = Required<Person>;

  // Partial type (it will make a new type with the existing type with all the filled partial fields)
  type PartialPerson = Partial<Person>;

  // ==============================================================
}
