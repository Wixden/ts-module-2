{
  // ==============================================================

  // conditional types

  type a1 = null;
  type a2 = undefined;

  type x = a1 extends null ? true : false; // conditional type;

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  // ==============================================================
}
