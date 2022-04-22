const EvenOneToFiftieth = () => {
  let even = [];
  for (let i = 1; i < 51; i++) {
    if (i % 2 === 0) {
      even.push(i);
    }
  }
  return even;
};
