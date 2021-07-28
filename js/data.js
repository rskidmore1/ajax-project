/* exported data */
// debugger;
var data = {
  collection: [
    { foxImage: '', quote: '' }
  ]
};


var previousFormEntries = localStorage.getItem('collection');

if (previousFormEntries !== null) {
  data = JSON.parse(previousFormEntries);
}

window.addEventListener('beforeunload', function (event) {
  var entriesStringified = JSON.stringify(data);
  localStorage.setItem('collection', entriesStringified);
});
