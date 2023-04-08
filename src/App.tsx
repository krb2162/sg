import './App.css';
import CurrencyExchangeRow from './CurrencyExchangeRow';
import React,{useState,useEffect} from 'react';

const url = "https://api.pro.coinbase.com";
const rurl = "https://rest.coinapi.io/v1/exchangerate";
const exrurl = "https://api.coinbase.com/v2/exchange-rates?currency="

type DataType = {
  data: {
    currency: string,
    rates: {
      [key: string]: number | undefined
    }
  };
}
function App() {
  const [currency2,setCurrency2]=useState<any>(
    {data: 
      { currency: 'USD', rates: { 
        'XCN' : 233.9181286549707602
      }
    }})
    
  const[query, setQuery] = useState("");
  const[currDisplay, setCurrDisplay] = useState(["USD", 1]);
  const[base, setBase] = useState("USD");
  const [fromCurrency, setFromCurrency] = useState<[string, number]>(["USD", 1])
  const [toCurrency, setToCurrency] = useState(["USD", 1]);
  const [amount, setAmount] = useState<number>(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
 
  let toAmount, fromAmount

  useEffect(() => {
    fetchCurrency2();
  }, [])


  const fetchCurrency2=async()=>{
    const response=await fetch(exrurl + fromCurrency[0])
	.then(response => response.json())
	.then(res => {
    setCurrency2(res)})
  }

let currenciesArray :any = []
Object.keys(currency2.data.rates).forEach(function(key) {
  currenciesArray.push({named: key, value: currency2.data.rates[key]})
})

function handleFromAmountChange(e:any) {
  setAmount(e.target.value)
  setAmountInFromCurrency(true)
}

function handleToAmountChange(e:any) {
  setAmount(e.target.value)
  setAmountInFromCurrency(false)
}

  return (
    <>
    <h1>{fromCurrency[0]} to {toCurrency[0]} exchange rate is {Number(toCurrency[1])/fromCurrency[1]}</h1>
    <div className="toCurr">
        <h4>select exchange currency: </h4>
        <div>
      <select value={toCurrency[0]} onChange={e => setToCurrency([e.target.value, currency2.data.rates[e.target.value]])}>
        {currenciesArray.map((option:any) => (
          <option key={option.named} value={option.named}>{option.named}</option>
        ))}
      </select>
    </div>
    </div>

    <div className="baseCurr">    
    <h4>search for a currency: </h4>
    <input type ="text" placeholder="Search..." className="search2" onChange={e=>{setQuery(e.target.value)}}/>

    <ul className="list">
      {currenciesArray.filter((currency:any) =>
      currency.named.toLowerCase().includes(query)).map((currency:any) => (
        <>
          <div>
          <button className="listItem" 
          id={currency.named}
          value={currency.value}
          onClick={e=>
            {
              setFromCurrency([e.currentTarget.id, Number(e.currentTarget.value)])
              // fetch(exrurl + fromCurrency[0])
	            // .then(response => response.json())
	            // .then(res => {
              // setCurrency2(res)})
              // setFromCurrency([e.currentTarget.id, currency2.data.rates[e.currentTarget.id]])
              setCurrDisplay([e.currentTarget.id, currency2.data.rates[e.currentTarget.id]])
            }}>
            {currency.named}
          </button>
          </div>
        </>
      ))}
    </ul>
    </div>
    </>
  );
}
export default App;
