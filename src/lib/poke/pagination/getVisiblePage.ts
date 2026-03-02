interface GetVisiblePageReturnType {
  type: 'page' | 'ellipsis';
  pageNumber: number | '...';
  key: string;
}

export const getVisiblePage = (
  currentPage: number,
  pageLink: number[],
): GetVisiblePageReturnType[] => {
  const validPageSet = new Set([
    1,
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
    pageLink.at(-1),
  ]);

  return pageLink
    .filter((pageNumber) => validPageSet.has(pageNumber))
    .reduce<{ acc: GetVisiblePageReturnType[]; prevPageNumber: number | null }>(
      ({ acc, prevPageNumber }, pageNumber) => {
        if (prevPageNumber !== null && pageNumber - prevPageNumber > 1) {
          acc.push({ type: 'ellipsis', pageNumber: '...', key: `ellipsis-${prevPageNumber}` });
        }
        acc.push({ type: 'page', pageNumber, key: `page-${pageNumber}` });
        return { acc, prevPageNumber: pageNumber };
      },
      { acc: [], prevPageNumber: null },
    ).acc;
};
