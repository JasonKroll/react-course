console.log('App.js is running!');

const appObject = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const formSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    appObject.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const clearOptions = () => {
  appObject.options = [];
  renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
  var template = ( 
    <div>
      <h1>{appObject.title}</h1>
      {appObject.subtitle && <p>{appObject.subtitle}</p>}
      <p>{(appObject.options && appObject.options.length > 0) ? 'Here are your options!' : 'No options'} </p>
      <p>{appObject.options.length}</p>
      <button onClick={clearOptions}>Remove all</button>
      <ol>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
        <li>Item Four</li>
      </ol>
      <form onSubmit={formSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApp();