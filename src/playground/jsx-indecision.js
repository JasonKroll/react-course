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
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appObject.options.length);
  const decision = appObject.options[randomNum];
  console.log(decision);
};

const appRoot = document.getElementById('app');

const renderApp = () => {
  var template = ( 
    <div>
      <h1>{appObject.title}</h1>
      <p>{appObject.subtitle}</p>
      <p>{(appObject.options && appObject.options.length > 0) ? 'Here are your options!' : 'No options'} </p>
      <button disabled={appObject.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={clearOptions}>Remove all</button>
      <ol>
        {appObject.options.map((option, i) => <li key={option + '-' + i}>{option}</li>)}
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