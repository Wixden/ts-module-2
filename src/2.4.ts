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

  const developer1: Developer<{
    brand: string;
    model: string;
    releaseYear: number;
    sleepTrack: boolean;
  }> = {
    name: "John",
    computer: {
      brand: "Apple",
      model: "iPhone",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Apple",
      model: "iPhone",
      releaseYear: 2020,
      sleepTrack: true,
    },
  };

  const developer2: Developer<{
    brand: string;
    model: string;
    heartTrack: boolean;
  }> = {
    name: "Michael",
    computer: {
      brand: "Samsung",
      model: "iPhone",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Samsung",
      model: "Galaxy",
      heartTrack: true,
    },
  };

  //
}
