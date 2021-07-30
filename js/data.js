/* exported data */

var data = {
  collection: [],
  view: 'summon',
  editing: []
};

var previousFormEntries = localStorage.getItem('collection');

if (previousFormEntries !== null) {
  data = JSON.parse(previousFormEntries);
}

window.addEventListener('beforeunload', function (event) {
  var entriesStringified = JSON.stringify(data);
  localStorage.setItem('collection', entriesStringified);
});
