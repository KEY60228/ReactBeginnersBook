import React, { Component, FC } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     const logoAttrs = {
//       alt: "logo",
//       className: "App-logo",
//       src: logo
//     };
//     const title = "こんにちはReact";
//     const targets = ["World", "Kanae", "Yukina"];

//     return (
//       <div className="App">
//         <header className="App-header">
//           {
//             // コメント
//           }
//           <img {...logoAttrs} />
//           { title && <p>{title}</p>}
//           { targets.map(target => (
//             <p>Hello, {target}!</p>
//           ))}
//         </header>
//       </div>
//     );
//   }
// }

const Hello: FC = () => <div>Hello World!</div>;

const logProps = (WrappedComponent: FC) => {
  return class extends Component {
    componentDidMount() {
      console.log('Component is rendered.')
    }

    render() {
      return <WrappedComponent />;
    }
  };
};

// export default App;
export default logProps(Hello);
