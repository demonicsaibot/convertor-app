import React, { useRef, useState } from "react";
import "../css/content.css"
function Form (){
  const firstCurrencyRef = useRef(null)
  const secondCurrencyRef = useRef(null)
  const inputCurrencyRef = useRef(null)
  const[resultDiv,setResultDiv] =useState(null)
  const handleSubmit=(event)=>{
    event.preventDefault();
    const firstCurrencyValue = firstCurrencyRef.current.value
    const secondCurrencyValue = secondCurrencyRef.current.value
    fetch(`https://freecurrencyapi.net/api/v2/latest?apikey=c0dbb410-47d3-11ec-9ff6-015eed2fab9a&base_currency=${firstCurrencyValue}`)
   .then(response => response.json())
   .then(data=>{
       const koef = data.data[secondCurrencyValue]
       const amount = +inputCurrencyRef.current.value
       let result
       if (firstCurrencyValue===secondCurrencyValue) {
        result = amount;
       } else {result = amount * koef }
       setResultDiv(`${amount}${firstCurrencyValue} = ${result}${secondCurrencyValue}`)
   })
}  
  return(
    <>
      <div className="container">
      <h2 className="title">Currency Calculator</h2>
      <form onSubmit={handleSubmit} className="form-inline">
          <div className="content-items">
              <input type="number" ref={inputCurrencyRef}></input>
              <select className="currency-select" ref={firstCurrencyRef}>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="UAH">UAH</option>
              </select>
              <select className="currency-select" ref={secondCurrencyRef}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="UAH">UAH</option>
              </select>
              <button className="show-btn">Show me the result!</button>
          </div>
      </form>
      <div className="result-div">{resultDiv}</div>
      </div>
  </>
  )
} 
export default Form
