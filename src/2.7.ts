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

  //
}
