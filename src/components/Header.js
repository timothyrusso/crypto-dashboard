import React from "react";

function Header() {

    const [currencyPrice, setCurrencyPrice] = React.useState({})

    React.useEffect(() => {
        getPrice()
            .then((res) => {
                setCurrencyPrice(res['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const getPrice = () => {
        return fetch("https://alpha-vantage.p.rapidapi.com/query?from_currency=BTC&function=CURRENCY_EXCHANGE_RATE&to_currency=USD", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
                "x-rapidapi-key": "c1dc0541fbmsh97b126e67e8b10cp18a981jsn0f89556838a5"
            }
        })
            .then((res) => {
                if (res.ok) {
                    console.log(
                        `URL: ${res.url}
      Status: ${res.statusText}
      Status code: ${res.status}`);
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            })
    }

    return (
            <div>
                <h1>BTC price</h1>
                <p>{currencyPrice} $</p>
            </div>
    )
}

export default Header;