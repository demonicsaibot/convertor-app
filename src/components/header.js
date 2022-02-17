import React, { useState } from "react";
import "../css/header.css"
function Header(){
    const [euroCurrency,setEuroCurrensy] = useState("")
    const [usdCurrency,setUsdCurrensy] = useState("")
    fetch(`https://freecurrencyapi.net/api/v2/latest?apikey=c0dbb410-47d3-11ec-9ff6-015eed2fab9a&base_currency=UAH`)
    .then(response=>response.json())
    .then(data=> {
        setEuroCurrensy((data.data.EUR*1000).toFixed(2))
        setUsdCurrensy((data.data.USD*1000).toFixed(2))  
    })
    return(
        <header className="header jumbotron">
            <div className="tablo"><span>EUR</span> <span>{euroCurrency}</span></div>
            <div className="tablo"><span>USD</span> <span>{usdCurrency}</span></div>
        </header>
    )
}
export default Header