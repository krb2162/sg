import './App.css';
import CurrencyRow from './CurrencyRow';
import CurrencyExchange from './CurrencyExchange';
// import TextField from "@mui/material/TextField";

import React,{useState,useEffect} from 'react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
const url = "https://api.pro.coinbase.com";
const rurl = "https://rest.coinapi.io/v1/exchangerate";
const exrurl = "https://api.coinbase.com/v2/exchange-rates"
// ?currency=USD
function baseCurr(element: any, base: string, array: any) {
	return (element.quote_currency == "USD");
}

type DataType = {
  data: {
    currency: string,
    rates: {
      [key: string]: number | undefined
    }
  };
}
function App() {
  const [currencies,setCurrencies]=useState<any[]>([])
  const [currency2,setCurrency2]=useState<any>(
    {data: 
      { currency: 'USD', rates: { 
        'XCN' : 233.9181286549707602
      }
    }})

  useEffect(() => {
    fetchCurrencies();
  }, [])

  useEffect(() => {
    fetchCurrency2();
  }, [])

  const fetchCurrency2=async()=>{
    const response=await fetch(exrurl)
	.then(response => response.json())
	.then(res =>setCurrency2(res))
  }

console.log(currency2);
let currenciesArray :any = []
Object.keys(currency2.data.rates).forEach(function(key) {
  console.log(key)
  currenciesArray.push({named: key, value: currency2.data.rates[key]})
  // currenciesArray.push({named: currency2.data.rates, value: currency2.data.rates[key]})
})
console.log(currenciesArray)

  const fetchCurrencies=async()=>{
    const response=await fetch(url + "/products")
	.then(response => response.json())
	.then(res => res.filter(baseCurr))
	.then(res => setCurrencies(res))
  }

  const[query, setQuery] = useState("");
  
  const[currDisplay, setCurrDisplay] = useState(["USD", 1]);
  
  // console.log(currencies.filter(currency=>currency.id.toLowerCase().includes("SU")))
  // console.log(currDisplay)
  return (
    <>
    <h1>Currencies</h1>
    <CurrencyExchange currencyOptions = {currencies}/>
    {/* display for more info on click! */}
    <h2>{currDisplay[0]}</h2>
    <h2>{currDisplay[1]}</h2>

    <input type ="text" placeholder="Search..." className="search2" onChange={e=>{setQuery(e.target.value)}}/>
    <ul className="list">
      {currenciesArray.filter((currency:any) =>
      currency.named.toLowerCase().includes(query)).map((currency:any) => (
        <>
        <div>
        <button className="listItem" 
          id={currency.named}
          value={currency.value}
          onClick={e=>setCurrDisplay([e.currentTarget.id, e.currentTarget.value])}>
            {currency.named}
        </button>
        </div>
        </>
      ))}
    </ul>
    <div className="App">
      {
      }
    </div>
    </>
  );
}
export default App;
