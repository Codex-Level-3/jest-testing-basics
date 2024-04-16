const { multiply, isPrime } = require("./utils");

describe("multiply function", () => {
  it("multiples 2 and 3 to get 6", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it("multiples 5 and 0 to get 0", () => {
    expect(multiply(5, 0)).toBe(0);
  });

  it("multiples -2 and 3 to get -6", () => {
    expect(multiply(-2, 3)).toBe(-6);
  });
});

describe("isPrime function", () => {
  it("return true for prime number 2", () => {
    expect(isPrime(2)).toBeTruthy();
  });

  it("return false for non-prime number 10", () => {
    expect(isPrime(10)).toBeFalsy();
  });

  it("return false for negative number -5", () => {
    expect(isPrime(-5)).toBeFalsy();
  });

  it("return false for number 0", () => {
    expect(isPrime(0)).toBeFalsy();
  });
});
