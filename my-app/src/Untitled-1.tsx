// import './App.css';
// import React,{useState,useEffect} from 'react';
// import CurrencyExchange from './CurrencyExchange';

// const url = "https://api.pro.coinbase.com";
// const rurl = "https://rest.coinapi.io/v1/exchangerate";

// function baseCurr(element: any, base: string, array: any) {
// 	return (element.quote_currency == "USD");
// }

// function App() {
//   const [currencies, setCurrencies]=useState<any[]>([])
//   // const [currency,setCurrency]=useState<any[]>([])

//   useEffect(() => {
//    console.log(currencies)
//   }, [currencies])

  // useEffect(() => {
  //   fetch(BASE_URL)
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }, [])
  // const headers =  {'X-CoinAPI-Key': '079DF833-3789-4BD8-9B3D-82D6E8BAEFE4',
  //                   'Contenet-Type': 'application/json'
  // }

  // fetch(rurl + "/USD", {method: 'GET', headers})
	//   .then(res => {
  //     if (res.ok) {
  //       console.log('SUCCESS');
  //       console.log(res.status);
  //       console.log("body:");
  //       console.log(res.body);
  //     } else {
  //       console.log('NOT SUCCESS')
  //     }
  //   })
	//   .then(data =>console.log(data))

  // const fetchCurrencies=async()=>{
  //   const response=await fetch(url + "/products")
	// .then(response => response.json())
  // .then(res => console.log("hi"))
	// .then(res => res.filter(baseCurr))
	// .then(res => setCurrencies(res))
  // }
  // return (
  //   <>
  //     <h1> Currency Market Rates </h1>
  //     <CurrencyExchange />
  //   </>
  // )
//   return (
//     <div className="App">
//       {
//         currencies && currencies.map(currency=>{
//           return(
//             <div key={currency.id} style={{alignItems:'center',margin:'20px 60px'}}>
//             <h4>{currency.base_currency}</h4>
//             <p>{currency.quote_currency}</p>
//           </div>
//           )
//         })
//       }
//     </div>
//   );
// }
// export default App;
import './App.css';
import Axios from 'axios'
import React,{useState,useEffect} from 'react';

function App() {
  const [comments,setComments]=useState<any>([])
  useEffect(() => {
    fetchComments();
  }, [])
  useEffect(() => {
    console.log(comments)
  }, [comments])
  
  const fetchComments=async()=>{
    const response=await fetch('https://api.pro.coinbase.com' + "/products")
      .then(response => response.json())
      .then(res => setComments(res))
  }
  return (
    <div className="App">
      {
        comments && comments.map((comment: any)=>{
          return(
            <div key={comment.id} style={{alignItems:'center',margin:'20px 60px'}}>
            <h4>{comment.name}</h4>
            <p>{comment.email}</p>
          </div>
          )

        })
      }
    </div>
  );
}

export default App;