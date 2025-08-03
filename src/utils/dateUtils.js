/**
 * Calculates the time period between two dates and returns the duration in years and months.
 * If endDate is not provided, it uses the current date.
 * 
 * @param {string|Date} startDate - The start date in YYYY-MM-DD format or Date object
 * @param {string|Date} [endDate] - Optional end date in YYYY-MM-DD format or Date object (defaults to current date)
 * @returns {{years: number, months: number}} An object containing years and months of the duration
 */
const calculateTimePeriod = (startDate, endDate) => {
  // Parse start date
  const start = new Date(startDate);
  
  // Use current date if endDate is not provided
  const end = endDate ? new Date(endDate) : new Date();
  
  // Calculate the difference in months
  let months = (end.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += end.getMonth();
  
  // Adjust for the case where the end day is before the start day
  if (end.getDate() < start.getDate()) {
    months--;
  }
  
  // Calculate years and remaining months
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  return {
    years,
    months: remainingMonths + 1
  };
};

/**
 * Formats the duration in a human-readable string (e.g., "2 years 3 months" or "6 months")
 * 
 * @param {Object} duration - The duration object from calculateTimePeriod
 * @param {number} duration.years - Number of years
 * @param {number} duration.months - Number of months
 * @returns {string} Formatted duration string
 */
const formatDuration = ({ years, months }) => {
  const parts = [];
  
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  }
  
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
  }
  
  // If duration is less than a month
  if (parts.length === 0) {
    return 'Less than a month';
  }
  
  return parts.join(' ');
};

export { calculateTimePeriod, formatDuration };
