import { expect } from "chai";
import add from "../src/stringCalc.js";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).to.equal(0);
  });

  it("should return the number for a single number string", () => {
    expect(add("1")).to.equal(1);
  });

  it("should return the sum of two comma-separated numbers", () => {
    expect(add("1,5")).to.equal(6);
  });

  it("should return the sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3,4")).to.equal(10);
  });

  it("should return the sum of numbers separated by new lines", () => {
    expect(add("1\n2,3")).to.equal(6);
  });

  it("should handle custom delimiters", () => {
    expect(add("//;\n1;2")).to.equal(3);
  });

  it("should throw an exception for a single negative number", () => {
    expect(() => add("1,-2,3")).to.throw("negative numbers not allowed -2");
  });
});
