// Import stylesheets
import './style.css';
import data from './data.json';

const getInvalidIds = () => {
  const seenRow = {};
  const filteredResult = data.filter((row) => {
    const key = `${row.name}_${row.address}_${row.zip}`;
    if (
      seenRow[key] ||
      !row.name ||
      !row.address ||
      !(row.zip && /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(row.zip))
    ) {
      return true;
    }
    seenRow[key] = true;
    return false;
  });
  return filteredResult.map((row) => `<p>${row.id}</p>`).join('');
};

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = getInvalidIds();
