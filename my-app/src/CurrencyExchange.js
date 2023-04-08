import CurrencyExchangeRow from './CurrencyExchangeRow'
export default function CurrencyExchange(props) {
    const {
        currencyOptions,
        selectCurrency
    } = props
    return (
        <div>
            <h1> Exchange Rate </h1>
            <CurrencyExchangeRow  currencyOptions = {currencyOptions} selectCurrency = {selectCurrency}/>
            <span className="equals"> converts to: </span>
            <CurrencyExchangeRow  currencyOptions = {currencyOptions} selectCurrency = {selectCurrency}/>
        </div>
    )
}
