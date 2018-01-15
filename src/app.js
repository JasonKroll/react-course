import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//   constructor () {
//     this.name = 'Jason'
//     this.getGreeting = this.getGreeting.bind(this);
//   }

//   getGreeting () {
//     console.log(`Hi my name is ${this.name}`)
//   }
// };
// const old = new OldSyntax();
// console.log(old);
// console.log(old.getGreeting())
// const getGreeting = old.getGreeting;
// console.log(getGreeting())
// // -------

// class NewSyntax {
//   name = 'Bill';

//   getGreeting = () => {
//     console.log(`Hi my name is ${this.name}`)
//   }
// }

// const newsyn = new NewSyntax();
// console.log(newsyn)
// console.log(newsyn.getGreeting())
// const newGetGreeting = newsyn.getGreeting;
// console.log(newGetGreeting())