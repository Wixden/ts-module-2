{
  // interface -> generic interface with dynamic data

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  type AppleWatch = {
    brand: string;
    model: string;
    releaseYear: number;
    sleepTrack: boolean;
  };

  const developer1: Developer<AppleWatch> = {
    name: "John",
    computer: {
      brand: "Apple",
      model: "iPhone",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Apple",
      model: "iWatch",
      releaseYear: 2020,
      sleepTrack: true,
    },
  };

  type SamsungWatch = {
    brand: string;
    model: string;
    heartTrack: boolean;
  };

  const developer2: Developer<SamsungWatch> = {
    name: "Michael",
    computer: {
      brand: "Samsung",
      model: "iPhone",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Samsung",
      model: "SuperWatch",
      heartTrack: true,
    },
  };

  //
}
