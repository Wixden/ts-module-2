# <p style="color: blue">Be A TypeScript Technocrat: <p>

## What It TypeScript: 

-  ##### TypeScript is a language for application-scale JavaScript
-  ##### Typescript is an object oriented Programming Language that build on top of JavaScript with Extra Feature.
-  ##### Typescript is superset of JavaScript developed by microsoft.
-  ##### Typescript is strongly Typed programming Languages.
-  ##### Typescript Designed By Andres Hejlsberg with c# or .net specification .
-  ##### Typescript can be transpiled older versions of javaScript

## Whats Wrong with JavaScript ?

-  ##### JavaScript is an Dynamically Typed Language.
-  ##### JavaScript is not suitable for Large scale application.
-  ##### Lack of Strong Typing.
-  ##### only errors during runtime.
-  ##### Suffers type correction.
-  ##### Hard to find bugs.
-

## Can Browser Recognize TypeScript Code ?

-  ##### No, We need to `transpiled` typeScript by using complier like `babel, swc etc.`
-  ##### Typescript convert into javaScript then Browser can read the code.

## Benefits of TypeScript:

-  Support all JS Types.
   -  String
   -  Number
   -  Boolean
   -  Null
   -  Undefined
   -  Object
   -  Symbol
-  Give Some new types :
   -  Interface
   -  void
   -  Array
   -  Tuple
   -  Enum
   -  Union
   -  InterSection
-  Type Safety
-  Support Older Browser
-  Less Bugs
-  Increase Developer Productivity
-  Less Bugs && Less Testing.
-  Best Intelligence support.
-  Typescript give us an complier name `tsc` or `typescript complier`

## TypeScript Installation :

```ts
 npm i -g typescript
```

## TypeScript Configs or `tsconfig.js` Command:

```ts
   tsc --init
```

## TypeScript File Run:

1. ```ts
      tsc filename.ts
   ```
2. ```ts
      tsc --w file.ts
   ```
3. after include configs only use :

```ts
tsc - watch;
```

### Type `Assertion` in TypeScript: with `as`

-  Type assertion in TypeScript is a way to explicitly specify the type of a
   value, even when TypeScript cannot infer it automatically.
-  If developer have more information about type of a variable , he can
   explicitly define a type with `as` type ;
-  syntax :

```ts
// use value as type

variableName as type;
```

-  Example :

   ```ts
   // Type Assertion : as

   let random: any;

   // assign string :
   random = "next level Development";
   // random. // its not show the suggestion or properties of string when use include . (dot)

   // so we can use here type assertion to declare the type string

   const upperCase: string = (random as string).toUpperCase();
   console.log(upperCase);

   // assign number :
   random = 22;
   //  convert floated number:
   const precision = (random as number).toFixed();
   console.log(precision);

   // assign array :
   random = ["Akhtar Hussain", "Hafiz hossain", 20, 40];
   (random as []).forEach((i) => console.log(i));

   type TUser = {
      name: string;
      age: number;
   };

   random = { name: "Akhtar", age: 27 };
   const age = (random as TUser).age;
   const name = (random as TUser).name;
   console.log(name, age);
   ```

-  Example 2: With A function ;

   ```ts
   const getKgToGm = (value?: string | number): string | number | undefined => {
      if (typeof value === "string") {
         const convertedValue = parseFloat(value) * 1000;
         return `converted value : ${convertedValue}`;
      }

      if (typeof value === "number") {
         return value * 1000;
      }
   };

   const result1: string = getKgToGm("10") as string;
   const result2: number = getKgToGm(20) as number;
   const result3: undefined = getKgToGm(undefined) as undefined;
   console.table([result1, result2, result3]);
   ```

-  Example : For Error Handling :

   ```ts
   type TCustomError = {
      name: string;
      stack: string;
      message: string;
   };

   try {
      throw new Error("UnAuthenticated User");
   } catch (error) {
      const err = error as TCustomError;
      console.table([err.name, err.message]);
   }
   ```

## `Interface` in TypeScript :

-  Interfaces, on the other hand , define a contract must be object adhere to.
-  Interface are also be used to represent type definition of an object.
-  Interface only used for `object`, `array` and `function` type definition.
-  Interface are `extends` single or multiple `interface` or `type alias`

```ts
type TUser = {
   name: string;
   email: string;
};

interface IUser {
   roll: number;
   age: number;
}

interface ICommonUser extends IUser, TUser {
   contactNo?: string;
   address: {
      permanent: string;
      present: string;
   };
}
```

-  Syntax:

```ts
interface IInterFaceName {
   propertyName: type;
   propertyName: type;
}
```

-  ### `Object` Type with `Interface `:

   ```ts
   interface IPersonal {
      name: string;
      dob: Date;
   }

   interface IContact {
      email: string;
      phone: string;
   }

   interface IAddress {
      permanent: string;
      present: string;
      city: string;
      post: number;
   }

   interface IUser extends IPersonal, IContact {
      status: "active" | "in-active";
      address: IAddress;
   }

   const user: IUser = {
      name: "Akhtar",
      dob: new Date(),
      email: "akhtar@gmail.com",
      phone: "0123456789",
      address: {
         permanent: "Sylhet",
         present: "Sylhet",
         city: "Sylhet",
         post: 3100,
      },
      status: "active",
   };
   ```

-  ### `Array` Type In TypeScript:

   -  We can define array type in typeScript with `interface`;
   -  syntax :

   ```ts
   interface IArray {
      [index: number]: number;
   }

   interface IStringArray {
      [index: number]: string;
   }
   ```

   -  Example :

   ```ts
   interface INumber {
      [index: number]: number;
   }

   const numArr1: INumber = [1, 3, 4, 5];
   ```

-  ### `Function` Type with `Interface` :

   -  We can define a type for function with `interface`.
   -  syntax:

   ```ts
   interface TAdd {
      (parameter: type, parameter: type): returnType;
   }
   ```

   -  Example:

   ```ts
   interface IAdd {
      (num1: number, num2: number): number;
   }

   const add1: IAdd = function add1(num1, num2) {
      return num1 + num2;
   };
   ```

## `Interface extends` & `Type alias Intersection`

-  We can Extends any `interface ` and `type` which we define previously
-  we can premix type and interface with `extends` in `interface` and
   `intersection` in `type` & `interface`
-  ### Extends and Intersection:
-  Example:

```ts
type TUser = {
   name: {
      firstName: string;
      lastName: string;
   };
};

interface IUser extends TUser {
   roll: number;
}

type TUserWithStatus = IUser & { status: "active" | "in-active" };

interface INewUser extends TUserWithStatus {
   address: string;
}

//  implement whole type here:

const newUser: INewUser = {
   name: {
      firstName: "Akhtar",
      lastName: "Hussain",
   },
   roll: 3,
   address: "Sylhet",
   status: "active",
};
```

## `Generics` In TypeScript : -

-  TypeScript generics allow us to create reusable components or functions that
   can handle multiple types.
-  With generics, we can parameterize types and create type-safe and reusable
   code.
-  We can create generics for `function`, `array`, `object` and `classes`
-  syntax :

```ts
type GenericsName<parameter, parameter> = GeneralType<arg, arg>;
type GenerisName<parameter, parameter> = [parameter, parameter];
```

-  ### Generics For Array :

   -  We can use generics for array to normalize or generalize and make
      reuseable array type
   -  To normalize array we can use capital `Array` in javaScript
   -  for `string[] ` we can use `Array<string>`
   -  for `number[]` we can ues `Array<number>`
   -  for `boolean[]`, we can use `Array<boolean>`
   -  for `IInterface[]`, we can use `Array<Interface>`
   -  Syntax:

   ```ts
   // Generics Array:
   type GenericName<parameter> = Array<parameter>;

   // resuse the generics as need:

   //for Boolean: just pass boolean as parameter:
   const boolArr: GenericName<boolean> = [false, true];

   // for String: just pass string :
   const strArr: GenericsName<string> = ["one", "two", "three"];

   // for number: just pass number as parameter:
   const numArr: GenericsName<number> = [1, 2, 3, 4, 5, 6];

   // for object : just pass the pattern or Interface or type :
   const studentArr: GenericsName<{
      name: string;
      age: number;
      isPresent: boolean;
   }> = [
      { name: "Akhtar", age: 20, isPresent: true },
      { name: "Akhtar", age: 20, isPresent: true },
   ];
   ```

   -  Example :

   ```ts
   //  Generics Type:
   type GenericsArr<T> = Array<T>;

   //Interface :
   interface IUser {
      name: string;
      roll: number;
   }

   const numberArr: GenericsArr<number> = [1, 2, 3, 4, 5, 5];
   //use generics for string []
   const friendsArr: GenericsArr<string> = [
      "Akhtar Hussain",
      "Hafiz hossain",
      "Mamun hossain",
   ];

   // generalize for boolean
   const booleanArr: GenericsArr<boolean> = [
      false,
      true,
      false,
      true,
      false,
      true,
   ];

   // generalize for User
   const studentArr: GenericsArr<IUser> = [
      { name: "Akhtar Hussain ", roll: 2 },
      { name: "Sojib hossain ", roll: 3 },
      { name: "Khaled hossain ", roll: 4 },
      { name: "Mamun hossain ", roll: 5 },
   ];
   ```

-  ### `Tuple` in Generics :

   -  We can normalize or generalize any `Tuple` type with Generics;
   -  Know the length of tuple and specify type and order.
   -  syntax:

   ```ts
   // this tuple get only three parameter
   type GenericsTuple<parameter1, parameter2, parameter2> = [
      parameter1,
      parameter2,
      parameter3
   ];

   const tuple1: GenericsTuple<boolean, string, boolean> = [
      false,
      "one",
      false,
   ];
   ```

-  ### `Interface` in Generics:

   -  We can define `interface` generics ;
   -  syntax :

   ```ts

      // here T  & X are parameter
   interface IInterfaceName<T, X> = {
      name: string;
      computer: parameter1,
      bike: parameter2
   }
   ```

   -  Example:

   ```ts
   // Generics With Interface :
   interface IDeveloper<T, X = null> {
      name: string;
      computer: {
         brand: string;
         model: string;
         price: number;
      };
      smartWatch: T;
      bike?: X;
   }

   interface ISmartWatch {
      name: string;
      model: string;
      price: number;
   }

   interface IAppleWatch extends ISmartWatch {
      isSleepTracker: boolean;
      isPressureTacker: boolean;
   }

   type TBike = {
      model: string;
      speed: string;
   };

   //  poor developer Type :
   const poorDeveloper: IDeveloper<ISmartWatch> = {
      name: "Akhtar",
      computer: {
         brand: "AMD",
         model: "Ryzen 5600G",
         price: 19000,
      },
      smartWatch: {
         name: "Apple Smart Watch",
         model: "Series 9 ",
         price: 75000,
      },
   };

   //  rich developer:
   const richDeveloper: IDeveloper<IAppleWatch, TBike> = {
      name: "Abu Sufian",
      computer: {
         brand: "Note BOOK Elite",
         model: "Y Series",
         price: 74000,
      },
      smartWatch: {
         name: "Apple watch",
         model: "Series 9",
         price: 75000,
         isPressureTacker: true,
         isSleepTracker: true,
      },

      bike: {
         model: "YAMAHA",
         speed: "160CC",
      },
   };
   ```

-  ### Default value of `parameter in Generics`:

   -  we can use default If `user` not provided the parameter value;
   -  syntax:

   ```ts
   // here i pass the default type for X parameter

   interface IUser<T, X = null> {
      name: string;
      computer: T;
      bike?: X;
   }

   // here X default is null type
   type GenericUser<T, X = null> = {
      name: string;
      computer: T;
      bike?: X;
   };

   interface IComputer {
      model: string;
      price: number;
   }

   const user: GenericUser<IComputer> = {
      name: "Khaled hossain",
      computer: {
         model: "HP Privillion",
         price: 75000,
      },
   };

   const user2: GenericUser<IComputer, TBike> = {
      name: "Jihad Hossain",
      computer: {
         model: "Apple Laptop",
         price: 2000000,
      },
      bike: {
         model: "Hero Bike122222",
         speed: "120cc",
      },
   };
   ```

-  ### `Function` with `Generics`:

   -  we can define generic `function` type with `Generics`.
   -  Which helps to reuse `function` type.
   -  syntax:

   ```ts
   /**
    * it's a function which return an array depends on data type
    * @T : is type params which receive dynamic type for function
    */
   const getArr = <T>(parameter: T): T[] => {
      return [parameter];
   };

   const stringArr: string[] = getArr<string>("one"); // returns ['one']
   const numberArr: number[] = getArr<number>(20); // returns [2]
   const boolean: boolean[] = getArr<boolean>(false); // returns [false]
   /**
    * Write function which get two data and return a tuple:
    * @T : T is a type params which receive dynamic  type as param
    * @K : K is a another params which also work like @T .
    *
    */

   function createTuple2<T, Q>(a: T, b: Q): [T, Q] {
      return [a, b];
   }

   const one: [string, number] = createTuple2<string, number>("one", 1);
   const two: [number, string] = createTuple2<number, string>(1, "one");
   console.log(one);
   console.log(two);
   ```

-  ### `Constraint` in Generics :

   -  With can `generics` `constraint` we can force to `provide` some specific
      property.
   -  Constraints are used to limit the kinds of types that a type parameter can
      accept.
   -  Constraints ensure that the properties accessed within the function are
      available and compatible with the type parameter.
   -  By using `extends` keyword we can `ensure` types which must need to assign
   -  আমরা যখন Generics তৈরী করি তখন যদি কিছু নিদিষ্ট প্রোপ্রটি বা টাইপের ডাটা
      আমরা পেতে চাই তখন আমরা extends keyword ব্যবহার করে কোনো টাইপ এলিয়াস বা
      ইন্টারফেইসকে extends করতে পারি।
   -  এর মাধ্যমে আমরা ইউজারকে কিছু নিদিষ্ট প্রোপ্রারটি নিশ্চিত করতে বাধ্য করতে
      পারি।

   -  Example:

   ```ts
   // Constraints IN Generics:

   function addStudent<T extends { name: string; email: string; roll: number }>(
      student: T
   ) {
      const course = "Next Level Development";
      return {
         ...student,
         course,
      };
   }

   //  student one :

   const student1 = addStudent({
      name: "Akhtar Hussain",
      email: "akhtar@gmail.com",
      roll: 22,
      age: 20,
      haveWatch: true,
   });

   const student2 = addStudent({
      name: "Hafiz hossain",
      email: "hafiz@gmail.com",
      roll: 21,
      isCar: false,
   });

   const student3 = addStudent({
      name: "redowan shawon",
      email: "redowan@gmail.com",
      roll: 3,
      emni: "emni",
   });
   ```

-  ### Constraints `keyof` in TypeScript:

   -  The `keyof` keyword is used in TypeScript to extract the key type from an
      object type.
   -  `keyof` operator returns an union type :
   -  Example with `function`:

   ```ts
   type IUser = {
      name: string;
      age: number;
      isVerifed: boolean;
   };

   type key = keyof IUser; // return  key = 'name' | 'age' | 'isVerified'
   ```

   -  Example:

   ```ts
   const user: IUser = {
      name: "Akhtar Hussain",
      age: 20,
      isVerified: true,
   };
   // here use the keyof and extends the  T to make limit the type with constraint.
   function getPropertyValue<T, K extends keyof T>(obj: T, key: K) {
      return obj[key];
   }

   const property1 = getPropertyValue(user, "isVerified");
   console.log(property1);
   ```
