import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        filterParam
    } = props

    return (
        <>
            {currencyOptions.map(option => (
                <>
                <div>
                <button>{option.base_currency}</button>
                <span>{option.base_increment}</span>
                </div>
                {/* <h1>{filterParam}</h1> */}
                </>
            ))}
        </>
    )
}
