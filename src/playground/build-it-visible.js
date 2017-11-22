let appObject = {
  text: "Hello world",
  visible: false
}

const showHide = () => {
  appObject.visible = !appObject.visible
  render();
}

const appRoot = document.getElementById('app');
const render = () => {

  const template = (
    <div>
      <h1>Make it Visible</h1>
      <button onClick={showHide}>{appObject.visible ? 'Hide text' : 'Show text'}</button>
      {appObject.visible && <p>{appObject.text}</p>}
    </div>
  )
  
  ReactDOM.render(template, appRoot);
}

render();
