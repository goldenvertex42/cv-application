/**
 * Checks if all values in an object are empty, excluding specified properties.
 * @param {Object} obj - The object to check.
 * @param {Array<string>} [ignoreProperties=[]] - Properties to ignore during the check.
 * @returns {boolean} True if all values are empty, false otherwise.
 */
export const areAllValuesEmpty = (obj, ignoreProperties = []) => {
  return Object.keys(obj).every(key => {
    // If the key is in the ignoreProperties list, skip it
    if (ignoreProperties.includes(key)) return true;
    const value = obj[key];
    // Check for common 'empty' representations:
    return value === '' || value === null || value === undefined;
    // You might add more checks here if needed, e.g., for empty arrays or objects
  });
};

/**
 * Checks if all values in all objects within an array are empty, excluding the 'id' property.
 * @param {Array<Object>} arr - The array of objects to check.
 * @returns {boolean} True if all values in all objects are empty, false otherwise.
 */
export const areAllObjectsInArrayEmpty = (arr) => {
  // Check if the input is an array
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }

  // Use the areAllValuesEmpty function on each object in the array, ignoring 'id'
  return arr.every(obj => {
    // Ensure obj is an object
    if (typeof obj !== 'object' || obj === null) {
      return false; // or throw an error, depending on your requirements
    }
    return areAllValuesEmpty(obj, ['id']);
  });
};

export const formatLocalizedDate = (dateString, locale = undefined, options = undefined) => {
  const date = new Date(dateString);
  // Check for invalid dates before formatting
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  return date.toLocaleDateString(locale, options);
}