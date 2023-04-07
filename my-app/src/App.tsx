import React,{useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
 const [currencies, setCurrencies] = useState([])
 const [pair, setPair] = useState('')
 const [price, setPrice] = useState('0.00')
 const [pastData, setPastData] = useState({})
 const ws = useRef(null)

 const first = useRef(false)
 const url = "https://api.pro.coinbase.com"

 const [todos, setTodos] = useState([])
 const [error, setError] = useState({})
 
 useEffect(() => {
  //ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com");
  
  let pairs = [];
  
  fetch(url + "/products")
  .then(response => response.json())
  .then(res => console.log(res.slice(0,10)))
  .catch(err => setError(err))
}, [])

  return (
	<div className="container">
	<h1> Hello </h1>
	<h2> start editing </h2>
	</div>
  );
}

export default App;
