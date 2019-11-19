import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';
import { cipher } from 'node-forge';

const customers = [
  {
    'idx':1,
    'image':'https://placeimg.com/64/64/23',
    'name':'김보람',
    'birthday':'000506',
    'gender':'남자',
    'class':'채널매니저'
  },
  {
    'idx':2,
    'image':'https://placeimg.com/64/64/24',
    'name':'이조은',
    'birthday':'000125',
    'gender':'여자',
    'class':'회사원'
  },
  {
    'idx':3,
    'image':'https://placeimg.com/64/64/22',
    'name':'임세빈',
    'birthday':'990501',
    'gender':'여자',
    'class':'회사원'
  }
]

class App extends Component{
  render(){
    return(
      <div>
        {customers.map(c=>{
          return <Customer key={c.idx} idx={c.idx} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} class={c.class}/>
        })}
      </div>
    );
  }
}

export default App;
