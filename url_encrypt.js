var keys_of = function(obj) {
  var result = [];
  for key in obj {
    if obj.hasOwnProperty(key) {
      result.push(key);
    }
  }
}


// var UriEncryptor = function(data) {
//   this.data = data;
//   this.string = "";
// }
//
// UriEncryptor.prototype.encodeObject = function() {
//   var keys = keys_of(data);
//   var result = [];
//   var key;
//   for (var i = 0; i < keys.length; i++) {
//     key = keys[i];
//     if (Array.isArray(data[key])) {
//
//     } else if ()
//   }
// }


