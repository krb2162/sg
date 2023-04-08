import CurrencyExchangeRow from './CurrencyExchangeRow'
export default function CurrencyExchange() {
    return (
        <div>
            <h1> Exchange Rate </h1>
            <CurrencyExchangeRow  />
            <div className="equals">=</div>
            <CurrencyExchangeRow  />
        </div>
    )
}
