import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        filterParam
    } = props
    const displayMoreInfo = (event) => {
        // Preventing the page from reloading
        // event.preventDefault();
    
        // Do something 
        console.log("eventevent!!buttonclikc");
        // console.log(term);
      }
    //   event.addEventListener("click", myScript);

    return (
        <>
            {currencyOptions.map(option => (
                <>
                <div>
                <button key={option.named} onClick={console.log("butttton")}>{option.base_currency}: {option.base_increment}</button>
                {/* <span>{option.base_increment}</span> */}
                </div>
                {/* <h1>{filterParam}</h1> */}
                </>
            ))}
        </>
    )
}
