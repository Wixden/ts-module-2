{
  // ==============================================================

  // mapped types

  const arrOfNumbers: number[] = [1, 2, 3, 4, 5];

  const arrOfString: string[] = arrOfNumbers.map((number) => number.toString());

  // console.log(arrOfString);

  type BoxSize = {
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
  type BoxSizeString = { [key in keyof BoxSize]: string };
  type BoxSizeBoolean = { [key in keyof BoxSize]: boolean };

  // now check using all declared types
  const boxSize1: BoxSize = {
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

  // ==============================================================
}
