//your JS code here. If required.
let div = document.createElement('div');
div.id= 'browser-info';
body.append(div);
div.innerHTML = "You Are using "+ navigator.appName + " version " + naviagator.appVersion;