const sortByOrder = (itemsCopy, sortOrder, field) => {
  const sortedItems = itemsCopy.sort((a, b) => {
    if (String(a[field]).toLowerCase() < String(b[field]).toLowerCase()) {
      return sortOrder === "desc" ? -1 : 1;
    }
    if (String(a[field]).toLowerCase() > String(b[field]).toLowerCase()) {
      return sortOrder === "desc" ? 1 : -1;
    }
    return 0;
  });
  return sortedItems;
};

export default sortByOrder;
