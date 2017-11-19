console.log('App.js is running!');

var appObject = {
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
    </ol>
  </div>
);

var user = {
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

var myTemplate = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);