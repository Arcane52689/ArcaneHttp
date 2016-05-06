url = "http://localhost:3000/api/cards/commanders"

var ArcaneHttp = window.ArcaneHttp = function(method, url, data, options) {
  this.method = method;
  this.url = url;
  this.data = data;
  this.options = options;

  this.initializeRequest();
}


ArcaneHttp.get = function(url, data, options) {
  return new ArcaneHttp('GET', url, data, options);
}

ArcaneHttp.post = function(url, data, options) {
  return new ArcaneHttp('POST', url, data, optins);
}

ArcaneHttp.put = function(url, data, options) {
  return new ArcaneHttp('PUT', url, data, options);
}

ArcaneHttp.delete = function(url, data, options) {
  return new ArcaneHttp('DELETE', url, data, options);
}

ArcaneHttp.prototype.initializeRequest = function() {
  this.request = new XMLHttpRequest();
  this.request.onreadystatechange = this.checkStatus.bind(this);
  this.request.open(this.method, this.url);
}

ArcaneHttp.prototype.checkStatus = function() {
  if (this.request.readyState === 1) {
    console.log('request opened, url set to ' + this.url);
  } else if (readyState === 2 ) {

  } else if (readyState === 3) {

  } else if (readyState === 4) {

  } else {
    console.error("WTF DID YOU DO?");
  }

}






