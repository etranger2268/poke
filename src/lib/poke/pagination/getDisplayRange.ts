interface GetDisplayRangeReturnType {
  start: number;
  end: number;
}

export const getDisplayRange = (page: number, limit: number): GetDisplayRangeReturnType => {
  const offset = page - 1;
  const start = limit * offset + 1;
  const end = limit * offset + limit;
  return { start, end };
};
