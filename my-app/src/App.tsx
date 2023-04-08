import './App.css';
import CurrencyRow from './CurrencyRow';
// import TextField from "@mui/material/TextField";

import React,{useState,useEffect} from 'react';
const url = "https://api.pro.coinbase.com";
const rurl = "https://rest.coinapi.io/v1/exchangerate";

function baseCurr(element: any, base: string, array: any) {
	return (element.quote_currency == "USD");
}

function App() {
  const [currencies,setCurrencies]=useState<any[]>([])
  const [currency,setCurrency]=useState<any[]>([])
  useEffect(() => {
    fetchCurrencies();
  }, [])

  //useEffect(() => {
  //  console.log(currencies)
  //}, [currencies])

  useEffect(() => {
    console.log(currency)
  }, [currency])

  const fetchCurrency=async()=>{
    const headers =  {'X-CoinAPI-Key': '079DF833-3789-4BD8-9B3D-82D6E8BAEFE4'}
    const response=await fetch(rurl + "/USD", {headers})
	.then(response => response.json())
	.then(res =>console.log(res.status))
  }

  const fetchCurrencies=async()=>{
    const response=await fetch(url + "/products")
	.then(response => response.json())
	.then(res => res.filter(baseCurr))
	.then(res => setCurrencies(res))
  }
  const input = document.getElementById('search') as HTMLInputElement | null;
  const value = input?.value;
  console.log(value) // 👉️ "Initial value"
  // if (input != null) {
  //   console.log(input.value); // 👉️ "Initial value"
  // }
  // input?.addEventListener('input', function (event) {
  //   const target = event.target as HTMLInputElement;
  //   console.log(target.value);
  // });
  const [term, setTerm] = useState('');

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    // Do something 
    console.log(term);
  }

  return (
    <>
    <h1>Currencies</h1>
    <form onSubmit={submitForm}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          placeholder="find... "
          className="input"
        />
        <button type="submit" className="btn">Submit</button>
      </form>
    <button>USD</button>
    <CurrencyRow 
      currencyOptions = {currencies}
      filterParam = {1}
    />
    <div className="App">
      {
        currencies && currencies.map(currency=>{
          return(
            <div key={currency.id} style={{alignItems:'center',margin:'20px 60px'}}>
            {/* <h4>{currency.base_currency}</h4> */}
            {/* <button>{currency.base_currency}</button> */}
            {/* <p>{currency.quote_currency}</p> */}
          </div>
          )
        })
      }
    </div>
    </>
  );
}
export default App;
