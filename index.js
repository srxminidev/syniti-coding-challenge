// Import stylesheets
import './style.css';
import data from './data.json';

const findGoodData = () => {
  const seenRow = {};
  const filteredResult = data.filter((row) => {
    const key = `${row.name}#${row.address}#${row.zip}`;
    if (
      seenRow[key] ||
      !row.name ||
      !row.address ||
      !(row.zip && /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(row.zip))
    ) {
      return false;
    }
    seenRow[key] = true;
    return true;
  });
  return filteredResult.map((row) => `<p1 class="row">${row.id}</p1>`);
};

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = findGoodData();
