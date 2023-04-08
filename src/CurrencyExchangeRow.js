import { readConfigFile } from "typescript";
import React from 'react'

export default function CurrencyExchangeRow(props) {

    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props

    // return (
    //     <> 
    //         {/* {console.log(selectCurrency[0])} */}
    //         <input type="number" class="input" />
    //         <select> 
    //             {currencyOptions.map((currency)=> (
    //             <option value={currency.value}> {currency.named} </option> ))}
    //         </select>
    //     </>
    // )
// }
console.log("!" + selectedCurrency)
  
  return (
    <div>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option.named} value={option.named}>{option.named}</option>
        ))}
      </select>
    </div>
  )
}