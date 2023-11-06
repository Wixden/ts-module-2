{
  // ==============================================================

  // conditional types

  type a1 = null;
  type a2 = undefined;

  type x = a1 extends null ? true : false; // conditional type;

  type y = a1 extends null ? true : a1 extends undefined ? undefined : any;

  interface Sheikh {
    bike: string;
    car: string;
    ship: string;
    tractor: string;
    boat: string;
  }

  // check if it has a bike | car | ship manually (not the correct way)
  type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;

  // check the key dynamically
  type CheckVehicle2<T> = T extends keyof Sheikh ? true : false;

  type HasBike = CheckVehicle<"bike">; //true
  type HasTractor = CheckVehicle<"tractor">; //false

  type HasBoat = CheckVehicle2<"boat">; //true

  // ==============================================================
}
