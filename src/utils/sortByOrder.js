const sortByOrder = (itemsCopy, sortOrder, field) => {
  const sortedItems = itemsCopy.sort((a, b) => {
    if (a[field] < b[field]) {
      return sortOrder === "desc" ? -1 : 1;
    }
    if (a[field] > b[field]) {
      return sortOrder === "desc" ? 1 : -1;
    }
    return 0;
  });
  return sortedItems;
};

export default sortByOrder;
