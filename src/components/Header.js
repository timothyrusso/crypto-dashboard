import React from "react";
import api from "../utils/api";

function Header() {

    const [currencyPrice, setCurrencyPrice] = React.useState([])

    React.useEffect(() => {
        api.getPrice()
            .then((res) => {
                setCurrencyPrice(res['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
            <div>
                <h1>BTC price</h1>
                <p>{currencyPrice} $</p>
            </div>
    )
}

export default Header;
