export const areAllValuesEmpty = (obj) => {
  return Object.values(obj).every(value => {
    // Check for common 'empty' representations:
    return value === '' || value === null || value === undefined;
    // You might add more checks here if needed, e.g., for empty arrays or objects
  });
};
