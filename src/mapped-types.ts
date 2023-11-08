{
  // ==============================================================

  // mapped types

  const arrOfNumbers: number[] = [1, 2, 3, 4, 5];

  const arrOfString: string[] = arrOfNumbers.map((number) => number.toString());

  // console.log(arrOfString);

  type BoxSizeNumber = {
    width: number;
    height: number;
    depth: number;
    volume: number;
    surfaceArea: number;
  };

  // in here we are creating another type for the box size manually while the values are same in both.
  // type BoxSizeString = {
  //   width: string;
  //   height: string;
  // }

  // now in here converting the same value type to different type using mapped types
  type BoxSizeString = { [key in keyof BoxSizeNumber]: string };
  type BoxSizeBoolean = { [key in keyof BoxSizeNumber]: boolean };

  // now check using all declared types
  const boxSize1: BoxSizeNumber = {
    width: 10,
    height: 20,
    depth: 30,
    volume: 10 * 20 * 30,
    surfaceArea: 2 * (10 + 20 + 30),
  };

  const boxSize2: BoxSizeString = {
    width: "50 cm",
    height: "60 cm",
    depth: "70 cm",
    volume: "50 cm^3",
    surfaceArea: "60 cm^2",
  };

  const boxSize3: BoxSizeBoolean = {
    width: true,
    height: false,
    depth: true,
    volume: false,
    surfaceArea: true,
  };

  console.log({ boxSize1 }, { boxSize2 }, { boxSize3 });

  // Look up type
  type Height = BoxSizeNumber["height"]; // Look up type
  type Width = BoxSizeNumber["width"]; // Look up type
  type Depth = BoxSizeNumber["depth"]; // Look up type

  // generic mapped types
  type BoxSizeString2<T> = {
    [key in keyof T]: T[key];
  };

  type BoxSizeDynamic = {
    width: number;
    height: number;
    depth: string;
    volume: string;
    surfaceArea: boolean;
  };

  const boxSize4: BoxSizeString2<BoxSizeDynamic> = {
    width: 50,
    height: 60,
    depth: "70 cm",
    volume: "50 cm^3",
    surfaceArea: false,
  };

  console.log({ boxSize4 });

  // ==============================================================
}
