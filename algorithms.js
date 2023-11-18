function laptopRentals(times) {
  if (times.length === 0) return 0;
  times.sort((a, b) => a[0] - b[0]);
  let endTimes = [times[0][1]];
  for (let i = 1; i < times.length; i++) {
    let [start, end] = times[i];
    let lastEndTime = endTimes[endTimes.length - 1];
    if (start >= lastEndTime) {
      endTimes[endTimes.length - 1] = end;
    } else {
      endTimes.push(end);
    }
  }
  return endTimes.length;
}

let assert = require("chai").assert;
describe("Laptop Rentals", function () {
  it("Example 1", function () {
    assert.equal(
      laptopRentals([
        [0, 2],
        [1, 4],
        [4, 6],
        [0, 4],
        [7, 8],
        [9, 11],
        [3, 10],
      ]),
      3
    );
  });
  it("Example 2", function () {
    assert.equal(
      laptopRentals([
        [0, 4],
        [2, 3],
        [2, 3],
        [2, 3],
      ]),
      4
    );
  });
  it("Example 3", function () {
    assert.equal(
      laptopRentals([
        [1, 5],
        [5, 6],
        [6, 7],
        [7, 9],
      ]),
      1
    );
  });
  it("Example 4", function () {
    assert.equal(laptopRentals([[0, 4]]), 1);
  });
  it("Example 5", function () {
    assert.equal(laptopRentals([[]]), 0);
  });
});
