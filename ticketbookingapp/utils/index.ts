export const conversion = (rowIdx: number, colIdx: number) => {
  return rowIdx * 9 + (rowIdx + colIdx);
};
