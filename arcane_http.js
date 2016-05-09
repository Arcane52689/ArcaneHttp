




ArcaneHttp = function(method, url, optoi, options) {
  this.method = method;
  this.url = url;
  this.data = data || null;
  this.options = options || {};

  this._callbacks = {};

  this.initializeRequest();
  this.send();
}

// class methods
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
  this.complyCSRF();

  this.request.responseType = this.options.responseType || "json";
}

ArcaneHttp.prototype.checkStatus = function() {
  if (this.request.readyState === 1) {
    console.log('request opened, url set to ' + this.url);
  } else if (this.request.readyState === 2 ) {
    console.log('request has been sent')
  } else if (this.request.readyState === 3) {
    console.log('request is loading');
  } else if (this.request.readyState === 4) {
    console.log('request is complete');
    console.log(this.request.response);
    // console.log(this.request.responseText)
    if (Math.floor(this.request.status / 100) === 2) {
      this.executeCallbacks('success');
    } else if (Math.floor(this.request.status / 100) === 4) {
      this.executeCallbacks('error');
    }
  } else {
    console.error("WTF DID YOU DO?");
  }
}

ArcaneHttp.prototype.send = function() {
  if (this.request.readyState === 1) {
    this.request.send(null);
  }
}





ArcaneHttp.prototype.complyCSRF = function() {
  var meta = document.getElementsByName("csrf-token");
  if (meta.length > 0) {
    var token = meta[0].attributes.content;
    this.requeset.setRequestHeader("X-CSRF-Token", token);
  }
}

// Callback functions


ArcaneHttp.prototype.addCallback = function(status, callback) {
  if (!this._callbacks[status]) {
    this._callbacks[status] = [];
  }
  this._callbacks[status].push(callback);
  return this;
}


ArcaneHttp.prototype.success = function(callback) {
  this.addCallback('success', callback);
  return this;
}

ArcaneHttp.prototype.error = function(callback) {
  this.addCallback('error', callback);
  return this;
}


ArcaneHttp.prototype.executeCallbacks = function(status) {

  if (this._callbacks[status]) {
    for (var i = 0; i < this._callbacks[status].length; i++) {
      this._callbacks[status][i](this.request.response, this.request);
    }
  }
}





