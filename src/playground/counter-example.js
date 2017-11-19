
const appObject = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['one', 'two']
}
var template = ( 
  <div>
    <h1>{appObject.title}</h1>
    {appObject.subtitle && <p>{appObject.subtitle}</p>}
    <p>{(appObject.options && appObject.options.length > 0) ? 'Here are your options!' : 'No options'} </p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
      <li>Item Four</li>
    </ol>
  </div>
);

const user = {
  name: 'Jason',
  age: 42,
  location: 'Mackay'
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
  // return user.location || 'Unknown'
}

let count = 1;
const addOne = () => {
  count++;
  console.log('addOne');
  renderCounterApp();
};

const minusOne = () => {
  console.log('minus one');
  count--;
  renderCounterApp();
};

const reset = () => {
  console.log('reset');
  count = 1;
  renderCounterApp();
};




const renderCounterApp = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne} className="myClass">+1</button>
      <button onClick={minusOne} className="myClass">-1</button>
      <button onClick={reset} className="myClass">reset</button>
    </div>
  )

  ReactDOM.render(template2, appRoot);

}

renderCounterApp();
