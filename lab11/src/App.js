//import logo from './logo.svg';
import './App.css';

const changeText = (event) => {
  console.log(event.target)
  event.target.innerText = event.target.innerText + "被點了!"
}

function App() {
  return (
    <div className="App">
      <h1 style={styleArgument} onClick={changeText}>Hello CGU!!</h1>
    </div>
  );
}

const styleArgument = {
  fontSize: '30px',
  color: 'red'
};
export default App;
