'use strict';

var appObject = {
  text: "Hello world",
  visible: false
};

var showHide = function showHide() {
  appObject.visible = !appObject.visible;
  render();
};

var appRoot = document.getElementById('app');
var render = function render() {

  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Make it Visible'
    ),
    React.createElement(
      'button',
      { onClick: showHide },
      appObject.visible ? 'Hide text' : 'Show text'
    ),
    appObject.visible && React.createElement(
      'p',
      null,
      appObject.text
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
