import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';

// class App extends React.Component {

//   state = {
//     name: 'Haryphamdev',
//     address: 'Hoi Dan IT',
//     age: 26
//   }

//   handleClick = (event) => {
//     console.log('>> Click me my button')
//     console.log('random ', Math.floor((Math.random() * 100) + 1))

//     this.setState({
//       name: 'Eric'
//     })

//   }

//   handleOnMouseOver(event) {
//     console.log(event.pageX)
//   }

//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value
//     })
//   }

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state)
//   }

//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and I'm from {this.state.address}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <input
//             type='text'
//             onChange={(event) => this.handleOnChangeInput(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const App = () => {
  // const count = useSelector(state => state.counter.count);
  // const dispatch = useDispatch();

  return (

    <div>
      Hello world Slayah
      <MyComponent></MyComponent>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hello world Slayah
    //     </p>
    //     <div>Count = {count}</div>
    //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    //   </header>
    // </div>
  );
}

export default App;
