{
  // generic constraints with keyof operator:

  interface Vehicles {
    bike: string;
    car: string;
    truck: string;
    bus: string;
    boat: string;
    plane: string;
  }

  // manual type input:
  type Owner = "bike" | "car" | "truck" | "bus" | "boat" | "plane";

  // keyof operator
  type Owner2 = keyof Vehicles;

  const person1: Owner = "plane";
  const person2: Owner2 = "boat";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Akhtar",
    email: "akhtar@gmail.com",
    phone: 987654321,
  };

  const car = {
    name: "Honda",
    color: "Blue",
    year: 2020,
  };

  const result1 = getPropertyValue(user, "name");

  const result2 = getPropertyValue(car, "color");

  //
}
