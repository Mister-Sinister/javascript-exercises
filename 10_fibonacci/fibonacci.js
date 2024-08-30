const fibonacci = function (member) {
  if (typeof member !== "number") {
    member = parseInt(member);
  }
  if (member === 0) return 0;
  if (member < 0) return "OOPS";

  sequence = [1, 1];
  for (let i = 2; i <= member; i++) {
    let next_term = sequence[i - 1] + sequence[i - 2];
    sequence.push(next_term);
  }

  return sequence[member - 1];
};

// Do not edit below this line
module.exports = fibonacci;
