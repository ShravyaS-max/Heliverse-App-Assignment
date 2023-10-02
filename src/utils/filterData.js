export function filterData(data, searchTerm, filters) {
    return data.filter((user) => {
      return (
        (searchTerm === '' || user.first_name.includes(searchTerm)) &&
        (filters.domain === '' || user.domain === filters.domain) &&
        (filters.gender === '' || user.gender === filters.gender) &&
        (!filters.availability || user.available)
      );
    });
  }
  