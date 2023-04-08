import CurrencyExchangeRow from './CurrencyExchangeRow'
export default function CurrencyExchange(props) {
    const {
        currencyOptions
    } = props
    return (
        <div>
            <h1> Exchange Rate </h1>
            <CurrencyExchangeRow  currencyOptions = {currencyOptions}/>
            <span className="equals"> converts to: </span>
            <CurrencyExchangeRow  currencyOptions = {currencyOptions}/>
        </div>
    )
}
