'use strict';

console.log('App.js is running!');

var appObject = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var formSubmit = function formSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    appObject.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var clearOptions = function clearOptions() {
  appObject.options = [];
  renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      appObject.title
    ),
    appObject.subtitle && React.createElement(
      'p',
      null,
      appObject.subtitle
    ),
    React.createElement(
      'p',
      null,
      appObject.options && appObject.options.length > 0 ? 'Here are your options!' : 'No options',
      ' '
    ),
    React.createElement(
      'p',
      null,
      appObject.options.length
    ),
    React.createElement(
      'button',
      { onClick: clearOptions },
      'Remove all'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Item One'
      ),
      React.createElement(
        'li',
        null,
        'Item Two'
      ),
      React.createElement(
        'li',
        null,
        'Item Three'
      ),
      React.createElement(
        'li',
        null,
        'Item Four'
      )
    ),
    React.createElement(
      'form',
      { onSubmit: formSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
