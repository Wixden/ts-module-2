{
  // interface -> generic interface with dynamic data

  interface Developer<T, X = null> {
    //null will be default value if nothing is specified
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type AppleWatch = {
    brand: string;
    model: string;
    releaseYear: number;
    sleepTrack: boolean;
  };

  const developer1: Developer<AppleWatch, null> = {
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

  interface SamsungWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
  }

  interface YamahaBike {
    brand: string;
    model: string;
    engine: string;
    price: number;
  }

  const developer2: Developer<SamsungWatch, YamahaBike> = {
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
    bike: {
      brand: "Yamaha",
      model: "R16",
      engine: "400 CC",
      price: 78500,
    },
  };

  //
}
