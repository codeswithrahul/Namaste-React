export function filterData(searchText, restaurants) {
  return restaurants.filter((rest) =>
    rest?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}
