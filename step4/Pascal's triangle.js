export const rows = (count) => {
  if (count === 0) return [];
  const triangle = [[1]];
  for (let i = 1; i < count; i++) {
    const prev = triangle[i - 1];
    const row = [1];
    for (let j = 1; j < prev.length; j++) {
      row.push(prev[j - 1] + prev[j]);
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
};
