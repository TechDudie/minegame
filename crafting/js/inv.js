var storage = window.localStorage;
var i;
function store(id,data) {
  storage.setItem(id, data);
}
function get(id) {
  return storage.getItem(id);
}
for (i = 1; i < 28; i++) { 
  //document.getElementById("inv".concat(toString(i))).appendChild(null);
}
