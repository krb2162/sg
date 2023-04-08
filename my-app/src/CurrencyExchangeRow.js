import { readConfigFile } from "typescript";
import React from 'react'

export default function CurrencyExchangeRow(props) {
    const {
        currencyOptions
    } = props
    return (
        <>
            <input type="number" class="input" />
            <select> {currencyOptions.map((currency)=> <option value="hi">{currency.base_currency}</option> )}
                
            </select>
        </>
    )
}
