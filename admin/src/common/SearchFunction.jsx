export const DataSourceSearch = (
  searchElement,
  searchItem,
  searchDataSource
) => {
  if (!searchElement || searchElement === "") return searchDataSource; // Return original data if search is empty.

  return searchDataSource.filter((item) =>
    searchItem.some((key) =>
      String(item[key] || "") // Handle cases where key might not exist.
        .toLowerCase()
        .includes(searchElement.toLowerCase())
    )
  );
};
