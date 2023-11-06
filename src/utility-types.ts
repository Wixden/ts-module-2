{
  // ==============================================================

  // utility types
  interface Person {
    name: string;
    age: number;
    email: string;
    phone?: string;
  }

  // creating a new type from an existing type
  type NameAndAge = Pick<Person, "name" | "email">;

  // Omit;
  type ContactInfo = Omit<Person, "name" | "age">;

  // ==============================================================
}
