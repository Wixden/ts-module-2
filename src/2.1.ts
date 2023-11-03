{
  //

  // Type Assertion
  // defining something with type any will not do the auto suggestion by editor.
  // For example below variable is defined as a any type and wen we use "." after the variable we will not get any suggestions.
  let anything: any;
  anything = "Next Level Web Development";
  // anything. //no suggestions

  // But we can use assertion to assert a type to anything.
  (anything as string).toString();
  // Now we will get the suggestions.

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value);
      return `The correct value is ${convertedValue * 1000}`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };

  // we have to be sure of the data type that we are passing. if we pass wrong data type here it will make error because typescript will not detect error for us here. (It is called assertion)
  const result1 = kgToGm("1000") as string;
  const result2 = kgToGm(1000) as number;
  console.log({ result1 }, { result2 });

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
