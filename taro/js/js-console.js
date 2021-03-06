// Generated by CoffeeScript 1.3.1
(function() {
  var container, html_escape, input, log, original_log;

  html_escape = function(str) {
    return str.replace(/[&<>"']/g, function(m) {
      return "&#" + m.charCodeAt(0) + ';';
    });
  };

  log = document.createElement('div');

  log.setAttribute('style', 'width: 100%; height: 3em; background-color: black; color: white; overflow: auto; -webkit-overflow-scrolling: touch;');

  original_log = console.log;

  console.log = function(msg) {
    log.innerHTML += html_escape(msg.toString()) + '<br />';
    log.scrollTop = log.scrollHeight;
    original_log.call(console, msg);
    return null;
  };

  input = document.createElement('input');

  input.type = 'text';

  input.size = '80';

  input.addEventListener('change', function() {
    console.log('> ' + input.value);
    try {
      return console.log(eval(input.value));
    } catch (e) {
      return console.log(e.message);
    }
  });

  container = document.createElement('div');

  container.setAttribute('style', 'width: 100%; border: solid, 1px, red; position: fixed; top: 0;');

  container.appendChild(log);

  container.appendChild(input);

  window.addEventListener('load', function() {
    return document.body.appendChild(container);
  });

}).call(this);
