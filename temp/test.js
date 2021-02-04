// ajax = XMLHTTPRequest + promise
function ajax (url, params) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHTTPRequest();
    xhr.open('get', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'text/htm');
    xhr.send(params);

    xhr.onreadystatechange = function (res) {
      if (res.readyState !== 4) {
        return;
      }
      if (res.status === 200) {
        resolve(res.response);
      } else {
        reject(new Error(res.statusText));
      }
    }
  });
}